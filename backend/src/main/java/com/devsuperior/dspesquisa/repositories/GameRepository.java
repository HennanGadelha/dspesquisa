package com.devsuperior.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.entities.Game;

//registrando no mecanismo de injeção de dependencia
@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

	
	
	
}
