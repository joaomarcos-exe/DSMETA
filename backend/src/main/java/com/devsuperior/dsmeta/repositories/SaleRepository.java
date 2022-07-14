package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

//Repository são os componentes que acessam o banco de dados EX: buscar, deletar , consultar dados

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
