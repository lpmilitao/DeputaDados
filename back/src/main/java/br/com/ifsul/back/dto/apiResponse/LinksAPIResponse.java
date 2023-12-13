package br.com.ifsul.back.dto.apiResponse;

import lombok.*;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class LinksAPIResponse {

    private String href;

    private String rel;

    private String type;
}
