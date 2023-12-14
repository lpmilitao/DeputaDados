package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

import java.util.List;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class EventoAPIResponse {

    private List<DadosEventoAPIResponse> dados;

    private List<LinksAPIResponse> links;
}
