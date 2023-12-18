package br.com.ifsul.back.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class EventoRequest {

    @NotBlank
    private String nome;
}
