package br.com.ifsul.back.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Entity
public class Evento {

    @Id @Column(unique = true)
    private long id;

    private String nome; //descricaoTipo

    @Column(columnDefinition = "LONGTEXT")
    private String descricao;

    private String situacao;

    private LocalDateTime dataHoraInicio;

    private LocalDateTime dataHoraFim;

    @ManyToMany(mappedBy = "eventos")
    private List<Deputado> deputados = new ArrayList<>();

    public void adicionarDeputado(Deputado deputado){
        deputados.add(deputado);
    }
}
