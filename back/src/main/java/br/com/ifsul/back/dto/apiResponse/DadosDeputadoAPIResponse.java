package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class DadosDeputadoAPIResponse {

    private String email;

    private long id;

    private long idLegislatura;

    private String nome;

    private String siglaPartido;

    private String siglaUf;

    private String uri;

    private String uriPartido;

    private String urlFoto;
}
