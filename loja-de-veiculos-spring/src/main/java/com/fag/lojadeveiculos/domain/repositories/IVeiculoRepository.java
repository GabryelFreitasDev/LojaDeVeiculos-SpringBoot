package com.fag.lojadeveiculos.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fag.lojadeveiculos.domain.entities.VeiculoBO;

//Interface extendendo JpaRepository para ajudar na manipuação dos dados.
public interface IVeiculoRepository extends JpaRepository<VeiculoBO, Long> {}
