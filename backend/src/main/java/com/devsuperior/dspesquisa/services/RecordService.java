package com.devsuperior.dspesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspesquisa.dto.RecordDTO;
import com.devsuperior.dspesquisa.dto.RecordInsertDTO;
import com.devsuperior.dspesquisa.entities.Game;
import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.repositories.GameRepository;
import com.devsuperior.dspesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	//Transaction é forma de garantir que toda
	//parte de banco de dados seja realizado no service
	
	//  o readOnly é importante para evitar o lock do banco de dados
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO recordDTO) {
		
		Record record = new Record();
		
		record.setName(recordDTO.getName());
		record.setAge(recordDTO.getAge());
		record.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(recordDTO.getGameId());
		record.setGame(game);
		
		record = repository.save(record);
		
		return new RecordDTO(record);
		
	}

	@Transactional
	public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		// TODO Auto-generated method stub
		return repository.findByMoments(minDate, maxDate, pageRequest ).map(x -> new RecordDTO(x));
	}
	
	
	
}
