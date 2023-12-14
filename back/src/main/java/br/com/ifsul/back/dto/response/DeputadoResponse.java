package br.com.ifsul.back.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class DeputadoResponse {

    private long id;

    private String nome;

    private String email;

    private String siglaPartido;

    private String siglaUf;

    private String urlFoto;
}
