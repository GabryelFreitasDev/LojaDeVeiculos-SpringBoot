package com.fag.lojadeveiculos.domain.mapper;

import com.fag.lojadeveiculos.domain.dto.VeiculoImagemDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoImagemBO;
import com.fag.lojadeveiculos.infra.repositories.VeiculoRepository;

public class VeiculoImagemMapper {

    public static VeiculoImagemDTO toDTO(VeiculoImagemBO veiculoImagem) {
        VeiculoImagemDTO veiculoImagemDTO = new VeiculoImagemDTO();

        veiculoImagemDTO.setId(veiculoImagem.getId());
        veiculoImagemDTO.setDestaque(veiculoImagem.getDestaque());
        veiculoImagemDTO.setImagem(veiculoImagem.getImagem());
        veiculoImagemDTO.setIdVeiculo(veiculoImagem.getVeiculo().getId());

        return veiculoImagemDTO;
    }

    // public static VeiculoImagemBO toBO(VeiculoImagemDTO veiculoImagem) {
    //     return new VeiculoImagemBO(
    //             veiculoImagem.getId(),
    //             veiculoImagem.getDestaque(),
    //             veiculoImagem.getImagem(),
    //             veiculoImagem.ge);
    // }

}
