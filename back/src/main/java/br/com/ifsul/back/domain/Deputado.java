package br.com.ifsul.back.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Entity
public class Deputado {

    @Id @Column(unique = true)
    private long id;

    private String nome;

    private String email;

    private String siglaPartido;

    private String siglaUf;

    private String urlFoto;

    @ManyToMany @JoinTable(name = "deputado_evento",
            joinColumns = @JoinColumn(name = "deputado_id"),
            inverseJoinColumns = @JoinColumn(name = "evento_id"))
    private List<Evento> eventos = new ArrayList<>();

    public void adicionarEvento(Evento evento){
        eventos.add(evento);
    }

    public void removerEvento(Evento evento){
        eventos.remove(evento);
    }
}
