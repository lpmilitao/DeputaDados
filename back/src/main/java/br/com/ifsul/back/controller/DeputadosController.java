package br.com.ifsul.back.controller;

import br.com.ifsul.back.service.DeputadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/deputados")
public class DeputadosController {

    @Autowired
    private DeputadoService deputadoService;

    @GetMapping
    public void copiarDadosDaApi(){
         deputadoService.copiarDadosDaApi();
    }
}
