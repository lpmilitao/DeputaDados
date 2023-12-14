package br.com.ifsul.back.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class EventoResponse {

    private long id;

    private String nome;

    private String descricao;

    private String situacao;

    private String dataHoraInicio;

    private String dataHoraFim;
}
