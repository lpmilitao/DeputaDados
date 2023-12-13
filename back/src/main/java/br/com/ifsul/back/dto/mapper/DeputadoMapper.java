package br.com.ifsul.back.dto.mapper;

import br.com.ifsul.back.domain.Deputado;
import br.com.ifsul.back.dto.apiResponse.DadosAPIResponse;

public class DeputadoMapper {

    public static Deputado toEntity(DadosAPIResponse deputado) {
        return Deputado.builder()
                .id(deputado.getId())
                .nome(deputado.getNome())
                .email(deputado.getEmail())
                .siglaPartido(deputado.getSiglaPartido())
                .siglaUf(deputado.getSiglaUf())
                .urlFoto(deputado.getUrlFoto())
                .build();
    }
}
