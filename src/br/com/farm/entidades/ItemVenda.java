/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class ItemVenda {
    private int quantidade;
    private Produto produto;

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }


}
