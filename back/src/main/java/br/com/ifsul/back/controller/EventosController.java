package br.com.ifsul.back.controller;

import br.com.ifsul.back.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/eventos")
public class EventosController {

    @Autowired
    private EventoService eventoService;

    @GetMapping("/copiar")
    public void copiarDadosDaApi(){
        eventoService.copiarDadosDaApi();
    }

}
