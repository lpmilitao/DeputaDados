package br.com.ifsul.back.controller;

import br.com.ifsul.back.dto.request.EventoRequest;
import br.com.ifsul.back.dto.response.EventoResponse;
import br.com.ifsul.back.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
public class EventosController {

    @Autowired
    private EventoService eventoService;

    @GetMapping("/copiar")
    public void copiarDadosDaApi(){
        eventoService.copiarDadosDaApi();
    }

    @GetMapping
    public List<EventoResponse> listarEventos(){
        return eventoService.listar();
    }

    @PutMapping("/{id}")
    public void editarEvento(@PathVariable long id, @RequestBody EventoRequest request){
        eventoService.editar(id, request);
    }

}
