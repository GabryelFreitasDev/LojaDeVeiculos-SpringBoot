package com.fag.lojadeveiculos.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VeiculoImagemDTO {
    private Long id;
    private String imagem;
    private Boolean destaque;
    private Long idVeiculo;
}
