package br.com.ifsul.back.service;

import br.com.ifsul.back.domain.Deputado;
import br.com.ifsul.back.dto.apiResponse.DeputadoAPIResponse;
import br.com.ifsul.back.dto.mapper.DeputadoMapper;
import br.com.ifsul.back.dto.response.DeputadoResponse;
import br.com.ifsul.back.repository.DeputadoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static br.com.ifsul.back.dto.mapper.DeputadoMapper.toResponse;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class DeputadoService {

    private static final String URL_DEPUTADOS = "https://dadosabertos.camara.leg.br/api/v2/deputados";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DeputadoRepository deputadoRepository;

    @Transactional
    public void copiarDadosDaApi() {
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(URL_DEPUTADOS, String.class);
        String body = responseEntity.getBody();

        ObjectMapper mapper = new ObjectMapper();
        DeputadoAPIResponse response = null;
        try {
            response = mapper.readValue(body, DeputadoAPIResponse.class);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (response == null) return;

        List<Deputado> deputados = response.getDados().stream().map(DeputadoMapper::toEntity).toList();

        deputadoRepository.saveAll(deputados);
    }

    public List<DeputadoResponse> listar() {
        return deputadoRepository.findAll().stream()
                .map(DeputadoMapper::toResponse)
                .toList();
    }

    public DeputadoResponse detalhar(long id) {

        Deputado deputado = deputadoRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(NOT_FOUND, "Deputado não encontrado."));

        return toResponse(deputado);
    }
}
