package com.fag.lojadeveiculos.presentations.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fag.lojadeveiculos.domain.dto.VeiculoDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoBO;
import com.fag.lojadeveiculos.domain.mapper.VeiculoMapper;
import com.fag.lojadeveiculos.domain.repositories.IVeiculoRepository;

@RestController
@RequestMapping("veiculos")
@CrossOrigin("*")
public class VeiculoController {

    @Autowired
    private IVeiculoRepository veiculoRepository;

    @GetMapping
    public List<VeiculoDTO> getAll() {
        List<VeiculoDTO> veiculos = veiculoRepository.findAll().stream()
                .map(veiculo -> VeiculoMapper.toDTO(veiculo)).toList();
        return veiculos;
    }

    @PostMapping
    public void saveVeiculo(@RequestBody VeiculoDTO veiculoDTO) {
        VeiculoBO veiculo = VeiculoMapper.toBO(veiculoDTO);
        veiculoRepository.save(veiculo);
    }

    @DeleteMapping(value = { "/{id}" })
    public void deleteVeiculo(@PathVariable Long id) {
        if (veiculoRepository.existsById(id))
            veiculoRepository.deleteById(id);
    }

    @PutMapping
    public void updateVeiculo(@RequestBody VeiculoDTO veiculoDTO) {
        VeiculoBO veiculo = VeiculoMapper.toBO(veiculoDTO);
        veiculoRepository.saveAndFlush(veiculo);
    }
}
