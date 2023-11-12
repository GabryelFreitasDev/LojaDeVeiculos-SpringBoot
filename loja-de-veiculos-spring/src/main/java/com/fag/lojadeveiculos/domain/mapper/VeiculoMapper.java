package com.fag.lojadeveiculos.domain.mapper;

import com.fag.lojadeveiculos.domain.CombustivelEnum;
import com.fag.lojadeveiculos.domain.dto.VeiculoDTO;
import com.fag.lojadeveiculos.domain.entities.VeiculoBO;


public class VeiculoMapper {
    public static VeiculoDTO toDTO(VeiculoBO veiculo) {
        VeiculoDTO veiculoDTO = new VeiculoDTO();

        veiculoDTO.setId(veiculo.getId());
        veiculoDTO.setNome(veiculo.getNome());
        veiculoDTO.setValor(veiculo.getValor());
        veiculoDTO.setMarca(veiculo.getMarca());
        veiculoDTO.setCor(veiculo.getCor());
        veiculoDTO.setCombustivel(CombustivelEnum.getCombustivelById(veiculo.getCombustivel()).getNome());
        veiculoDTO.setAnoFabricacao(veiculo.getAnoFabricacao());
        veiculoDTO.setAnoModelo(veiculo.getAnoModelo());
        veiculoDTO.setQuilometragem(veiculo.getQuilometragem());
        veiculoDTO.setPotencia(veiculo.getPotencia());
        veiculoDTO.setPlaca(veiculo.getPlaca());
        veiculoDTO.setDescricao(veiculo.getDescricao());
        veiculoDTO.setImagem(veiculo.getImagem());

        return veiculoDTO;
    }

    public static VeiculoBO toBO(VeiculoDTO veiculo) {
        return new VeiculoBO(
                veiculo.getId(),
                veiculo.getNome(),
                veiculo.getValor(),
                veiculo.getMarca(),
                veiculo.getCor(),
                CombustivelEnum.getCombustivelByNome(veiculo.getCombustivel()).getId(),
                veiculo.getAnoFabricacao(),
                veiculo.getAnoModelo(),
                veiculo.getQuilometragem(),
                veiculo.getPotencia(),
                veiculo.getPlaca(),
                veiculo.getDescricao(),
                veiculo.getImagem());
    }
}
