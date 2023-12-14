package br.com.ifsul.back.dto.mapper;

import br.com.ifsul.back.domain.Deputado;
import br.com.ifsul.back.dto.apiResponse.DadosDeputadoAPIResponse;
import br.com.ifsul.back.dto.response.DeputadoResponse;

public class DeputadoMapper {

    public static Deputado toEntity(DadosDeputadoAPIResponse deputado) {
        return Deputado.builder()
                .id(deputado.getId())
                .nome(deputado.getNome())
                .email(deputado.getEmail())
                .siglaPartido(deputado.getSiglaPartido())
                .siglaUf(deputado.getSiglaUf())
                .urlFoto(deputado.getUrlFoto())
                .build();
    }

    public static DeputadoResponse toResponse(Deputado deputado) {
        return DeputadoResponse.builder()
                .id(deputado.getId())
                .nome(deputado.getNome())
                .email(deputado.getEmail())
                .siglaPartido(deputado.getSiglaPartido())
                .siglaUf(deputado.getSiglaUf())
                .urlFoto(deputado.getUrlFoto())
                .build();
    }
}
