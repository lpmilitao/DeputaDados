package br.com.ifsul.back.service;

import br.com.ifsul.back.domain.Evento;
import br.com.ifsul.back.dto.apiResponse.EventoAPIResponse;
import br.com.ifsul.back.dto.mapper.EventoMapper;
import br.com.ifsul.back.dto.request.EventoRequest;
import br.com.ifsul.back.dto.response.EventoResponse;
import br.com.ifsul.back.repository.EventoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class EventoService {

    private static final String URL_EVENTOS = "https://dadosabertos.camara.leg.br/api/v2/eventos";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private EventoRepository eventoRepository;

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
        evento.setDescricao(request.getDescricao());

        eventoRepository.save(evento);
    }

    public void excluir(long id) {
        eventoRepository.deleteById(id);
    }
}
