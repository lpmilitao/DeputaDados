package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

import java.util.List;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class DadosEventoAPIResponse {

    private String dataHoraFim;

    private String dataHoraInicio;

    private String descricao;

    private String descricaoTipo;

    private long id;

    private LocalCamaraAPIResponse localCamara;

    private String localExterno;

    private List<OrgaoAPIResponse> orgaos;

    private String situacao;

    private String uri;

    private String urlRegistro;
}
