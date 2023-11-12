package com.fag.lojadeveiculos.infra.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fag.lojadeveiculos.domain.dto.VeiculoDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoBO;
import com.fag.lojadeveiculos.domain.mapper.VeiculoMapper;
import com.fag.lojadeveiculos.domain.repositories.IVeiculoRepository;

public class VeiculoRepository {
    private static IVeiculoRepository veiculoRepository;

    @Autowired
    public VeiculoRepository(IVeiculoRepository veiculoRepository) {
        this.veiculoRepository = veiculoRepository;
    }

    
}
