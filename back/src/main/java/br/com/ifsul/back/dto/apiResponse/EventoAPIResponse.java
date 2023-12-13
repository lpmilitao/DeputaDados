package br.com.ifsul.back.dto.apiResponse;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter @Setter
public class EventoAPIResponse {

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
