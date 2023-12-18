package br.com.ifsul.back.service;

import br.com.ifsul.back.domain.Deputado;
import br.com.ifsul.back.domain.Evento;
import br.com.ifsul.back.dto.apiResponse.EventoAPIResponse;
import br.com.ifsul.back.dto.mapper.EventoMapper;
import br.com.ifsul.back.dto.request.EventoRequest;
import br.com.ifsul.back.dto.response.EventoResponse;
import br.com.ifsul.back.repository.DeputadoRepository;
import br.com.ifsul.back.repository.EventoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class EventoService {

    private static final String URL_EVENTOS = "https://dadosabertos.camara.leg.br/api/v2/eventos";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private DeputadoRepository deputadoRepository;

    @Transactional
    public void copiarDadosDaApi() {
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(URL_EVENTOS, String.class);
        String body = responseEntity.getBody();

        ObjectMapper mapper = new ObjectMapper();
        EventoAPIResponse response = null;
        try {
            response = mapper.readValue(body, EventoAPIResponse.class);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (response == null) return;


        List<Evento> eventos = response.getDados().stream().map(EventoMapper::toEntity).toList();

        eventoRepository.saveAll(eventos);
    }

    public List<EventoResponse> listar() {
        return eventoRepository.findAll().stream()
                .map(EventoMapper::toResponse)
                .toList();
    }

    public void editar(long eventoId, EventoRequest request) {
        Evento evento = eventoRepository.findById(eventoId)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Evento não encontrado."));

        evento.setNome(request.getNome());

        eventoRepository.save(evento);
    }

    public void excluir(long id) {
        Evento evento = eventoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Evento não encontrado."));

        evento.getDeputados().forEach(deputado -> {
            deputado.removerEvento(evento);
            deputadoRepository.save(deputado);
        });

        evento.setDeputados(new ArrayList<>());
        eventoRepository.save(evento);
        eventoRepository.delete(evento);
    }

    public List<EventoResponse> listarPorDeputado(long deputadoId) {
        Deputado deputado = deputadoRepository.findById(deputadoId)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Deputado não encontrado."));

        return eventoRepository.findAll().stream()
                .filter(evento -> evento.getDeputados().contains(deputado))
                .map(EventoMapper::toResponse)
                .toList();
    }
}
