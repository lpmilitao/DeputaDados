package br.com.ifsul.back.controller;

import br.com.ifsul.back.dto.response.DeputadoResponse;
import br.com.ifsul.back.service.DeputadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/deputados")
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
}
