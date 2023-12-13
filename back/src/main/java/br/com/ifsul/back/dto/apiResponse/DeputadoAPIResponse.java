package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

import java.util.List;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class DeputadoAPIResponse {

    private List<DadosAPIResponse> dados;

    private List<LinksAPIResponse> links;
}
