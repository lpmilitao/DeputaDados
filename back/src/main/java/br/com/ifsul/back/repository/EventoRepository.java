package br.com.ifsul.back.repository;

import br.com.ifsul.back.domain.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepository extends JpaRepository<Evento, Long> {
}
