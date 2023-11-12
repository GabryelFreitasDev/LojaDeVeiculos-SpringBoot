package com.fag.lojadeveiculos.domain.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.fag.lojadeveiculos.domain.entities.VeiculoImagemBO;

public interface IVeiculoImagemRepository extends JpaRepository<VeiculoImagemBO, Long>{
}
