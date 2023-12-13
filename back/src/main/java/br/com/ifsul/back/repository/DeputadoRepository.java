package br.com.ifsul.back.repository;

import br.com.ifsul.back.domain.Deputado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeputadoRepository extends JpaRepository<Deputado, Long> {
}
