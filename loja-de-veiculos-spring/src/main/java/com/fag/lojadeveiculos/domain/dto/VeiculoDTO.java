package com.fag.lojadeveiculos.domain.dto;

import java.util.List;

import com.fag.lojadeveiculos.domain.entities.VeiculoImagemBO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VeiculoDTO {
    private Long id;
    private String nome;
    private String marca;
    private String cor;
    private String combustivel;
    private String anoFabricacao;
    private String anoModelo;
    private int quilometragem;
    private int potencia;
    private String placa;
    private String descricao;
    private List<VeiculoImagemDTO> listVeiculoImagem;
}
