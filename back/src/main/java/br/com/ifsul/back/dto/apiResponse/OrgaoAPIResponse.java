package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class OrgaoAPIResponse {

    private String apelido;

    private long codTipoOrgao;

    private long id;

    private String nome;

    private String nomePublicacao;

    private String nomeResumido;

    private String sigla;

    private String tipoOrgao;
    private String uri;

}
