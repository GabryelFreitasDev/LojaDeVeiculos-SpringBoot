package com.fag.lojadeveiculos.presentations.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fag.lojadeveiculos.domain.dto.VeiculoDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoBO;
import com.fag.lojadeveiculos.domain.entities.VeiculoImagemBO;
import com.fag.lojadeveiculos.domain.mapper.VeiculoMapper;
import com.fag.lojadeveiculos.domain.repositories.IVeiculoImagemRepository;
import com.fag.lojadeveiculos.domain.repositories.IVeiculoRepository;

@RestController
@RequestMapping("veiculos")
public class VeiculoController {

    @Autowired
    private IVeiculoRepository veiculoRepository;
    @Autowired
    private IVeiculoImagemRepository veiculoImagemRepository;

    @GetMapping
    public List<VeiculoDTO> getAll() {
        //List<VeiculoImagemBO> imagems = veiculoImagemRepository.findAll();

        List<VeiculoDTO> veiculos = veiculoRepository.findAll().stream()
                .map(veiculo -> VeiculoMapper.toDTO(veiculo)).toList();

        // veiculos.stream().forEach(veiculo -> veiculo.setListVeiculoImagem(
        //         imagems.stream().filter(imagem -> imagem.getVeiculo().getId() == veiculo.getId()).toList()));

        return veiculos;
    }

    @PostMapping
    public void saveVeiculo(@RequestBody VeiculoDTO veiculoDTO){
        veiculoRepository.save(VeiculoMapper.toBO(veiculoDTO));

        //List<VeiculoImagemBO> listVeiculoImagem = veiculoDTO.getListVeiculoImagem();
        //if(listVeiculoImagem != null && !listVeiculoImagem.isEmpty())
          //  listVeiculoImagem.forEach(veiculoImagem -> veiculoImagemRepository.save(veiculoImagem));
            
    }

    public VeiculoBO getVeiculoById(Long idVeiculo){
        return veiculoRepository.findById(idVeiculo).orElse(null);
    }
}
