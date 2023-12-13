package br.com.ifsul.back.dto.apiResponse;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class LocalCamaraAPIResponse {

    private String andar;

    private String nome;

    private String predio;

    private String sala;

}
