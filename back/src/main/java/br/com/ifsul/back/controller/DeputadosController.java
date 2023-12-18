package br.com.ifsul.back.controller;

import br.com.ifsul.back.dto.response.DeputadoResponse;
import br.com.ifsul.back.service.DeputadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deputados")
@CrossOrigin(origins = "*")
public class DeputadosController {

    @Autowired
    private DeputadoService deputadoService;

    @GetMapping("/copiar")
    public void copiarDadosDaApi(){
         deputadoService.copiarDadosDaApi();
    }

    @GetMapping
    public List<DeputadoResponse> listarDeputados(){
        return deputadoService.listar();
    }

    @GetMapping("/{id}")
    public DeputadoResponse detalharDeputado(@PathVariable long id){
        return deputadoService.detalhar(id);
    }

    @PutMapping("/{deputadoId}/evento/{eventoId}")
    public void inscreverDeputadoEmEvento(@PathVariable long deputadoId, @PathVariable long eventoId){
        deputadoService.inscrever(deputadoId, eventoId);
    }

    @DeleteMapping("/{deputadoId}/evento/{eventoId}")
    public void desinscreverDeputadoEmEvento(@PathVariable long deputadoId, @PathVariable long eventoId){
        deputadoService.desinscrever(deputadoId, eventoId);
    }
}
