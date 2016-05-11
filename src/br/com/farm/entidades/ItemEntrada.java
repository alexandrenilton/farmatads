/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class ItemEntrada {
    private int quantidade;
    private double valorCompra;
    private Produto produto;

    public int getQtd(){
        return quantidade;
    }
    public double getValor(){
        return valorCompra;
    }
    public Produto getProduto(){
        return produto;
    }

    public void setQtd(int pQtd){
        quantidade = pQtd;
    }
    public void setValor(double pValor){
        valorCompra = pValor;
    }

    public void setProduto(Produto pProd){
        produto = pProd;
    }
}
