package br.com.ifsul.back.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Entity
public class Evento {

    @Id
    private long id;

    private String nome; //descricaoTipo

    private String situacao;

    @ManyToMany(mappedBy = "eventos")
    private List<Deputado> deputados = new ArrayList<>();
}
