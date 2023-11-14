package com.fag.lojadeveiculos.domain.usecases;

import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CombustivelEnum {
    GASOLINA(1, "GASOLINA"),
    ALCOOL(2, "ETANOL"),
    FLEX(3, "FLEX"),
    DIESEL(4, "DIESEL"),
    HIBRIDO(5, "HIBRIDO"),
    ELETRICO(6, "ELETRICO");

    private int id;
    private String nome;

    private static final List<CombustivelEnum> listCombustivelEnum = Arrays.asList(CombustivelEnum.values());

    public static CombustivelEnum getCombustivelById(int id){
        return listCombustivelEnum.stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }

    public static CombustivelEnum getCombustivelByNome(String nome){
        return listCombustivelEnum.stream().filter(c -> c.getNome().contains(nome)).findFirst().orElse(null);
    }
}
