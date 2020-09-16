package com.devsuperior.dspesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.entities.Record;

//registrando no mecanismo de injeção de dependencia
@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

	@Query("SELECT record FROM Record record WHERE "
			+ "(coalesce(:minDate, null) IS NULL OR record.moment >= :minDate) AND "
			+ "(coalesce(:maxDate,null) IS NULL OR record.moment <= :maxDate)")
	Page<Record> findByMoments(Instant minDate, Instant maxDate, Pageable pageable);


}
