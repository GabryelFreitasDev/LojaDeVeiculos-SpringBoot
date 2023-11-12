package com.fag.lojadeveiculos.infra.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fag.lojadeveiculos.domain.dto.VeiculoImagemDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoImagemBO;
import com.fag.lojadeveiculos.domain.mapper.VeiculoImagemMapper;
import com.fag.lojadeveiculos.domain.repositories.IVeiculoImagemRepository;

public class VeiculoImagemRepository{
    private static IVeiculoImagemRepository veiculoImagemRepository;

    @Autowired
    public VeiculoImagemRepository(IVeiculoImagemRepository veiculoImagemRepository) {
        this.veiculoImagemRepository = veiculoImagemRepository;
    }

    
}
