/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class Produto {

	private Long idProduto;
   

	private String nome;
    private String descricao;
    private String laboratorio;
    private int quantidade;
    private double valor_venda;

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getLab() {
        return laboratorio;
    }

    public int getQtdEstoque() {
        return quantidade;
    }

    public double getPreco() {
        return valor_venda;
    }

    public void setNome(String pNome) {
        this.nome = pNome;
    }

    public void setDescricao(String pDescricao) {
        this.descricao = pDescricao;
    }

    public void setLab(String pLab) {
        this.laboratorio = pLab;
    }

    public void setQtdEstoque(int pQtd) {
        this.quantidade = pQtd;
    }

    public void setPreco(double pValor) {
        this.valor_venda = pValor;
    }

    public void incrementaQtdProd(int pQtd) {
    }

    public void decrementaQtdProd(int pQtd) {
    }
    public Long getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Long idProduto) {
		this.idProduto = idProduto;
	}
}
