package br.com.ifsul.back.dto.mapper;

import br.com.ifsul.back.domain.Evento;
import br.com.ifsul.back.dto.apiResponse.DadosEventoAPIResponse;

import java.time.LocalDateTime;

public class EventoMapper {

    public static Evento toEntity(DadosEventoAPIResponse evento) {
        LocalDateTime dataHoraFim = null;

        if (evento.getSituacao().equalsIgnoreCase("Encerrada") ||
                evento.getSituacao().equalsIgnoreCase("Encerrada (Final)")){
            dataHoraFim = LocalDateTime.parse(evento.getDataHoraFim());
        }


        return Evento.builder()
                .id(evento.getId())
                .nome(evento.getDescricaoTipo())
                .descricao(evento.getDescricao())
                .situacao(evento.getSituacao())
                .dataHoraInicio(LocalDateTime.parse(evento.getDataHoraInicio()))
                .dataHoraFim(dataHoraFim)
                .build();
    }
}
