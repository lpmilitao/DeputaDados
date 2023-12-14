package br.com.ifsul.back.dto.mapper;

import br.com.ifsul.back.domain.Evento;
import br.com.ifsul.back.dto.apiResponse.DadosEventoAPIResponse;
import br.com.ifsul.back.dto.response.EventoResponse;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static java.util.Objects.isNull;

public class EventoMapper {

    public static Evento toEntity(DadosEventoAPIResponse evento) {
        return Evento.builder()
                .id(evento.getId())
                .nome(evento.getDescricaoTipo())
                .descricao(evento.getDescricao())
                .situacao(evento.getSituacao())
                .dataHoraInicio(LocalDateTime.parse(evento.getDataHoraInicio()))
                .dataHoraFim(
                        isNull(evento.getDataHoraFim())
                                ? null
                                : LocalDateTime.parse(evento.getDataHoraFim())
                )
                .build();
    }

    public static EventoResponse toResponse(Evento evento) {
        return EventoResponse.builder()
                .id(evento.getId())
                .nome(evento.getNome())
                .descricao(evento.getDescricao())
                .situacao(evento.getSituacao())
                .dataHoraInicio(
                        evento.getDataHoraInicio().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"))
                )
                .dataHoraFim(
                        isNull(evento.getDataHoraFim())
                        ? null
                        : evento.getDataHoraFim().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"))
                )

                .build();
    }
}
