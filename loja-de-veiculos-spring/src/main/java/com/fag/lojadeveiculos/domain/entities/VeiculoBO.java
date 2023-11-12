package com.fag.lojadeveiculos.domain.entities;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "veiculo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class VeiculoBO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "valor")
    private BigDecimal valor;
    @Column(name = "marca")
    private String marca;
    @Column(name = "cor")
    private String cor;
    @Column(name = "combustivel")
    private int combustivel;
    @Column(name = "anofabricacao")
    private String anoFabricacao;
    @Column(name = "anomodelo")
    private String anoModelo;
    @Column(name = "quilometragem")
    private int quilometragem;
    @Column(name = "potencia")
    private int potencia;
    @Column(name = "placa")
    private String placa;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "imagem")
    private String imagem;
}