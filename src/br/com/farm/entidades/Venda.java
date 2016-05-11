/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

import java.util.Date;

/**
 *
 * @author alexandre
 */
public class Venda {
    private Date data;
    private String formaPgto;
    private double desconto;
    private Cliente cliente;
    private Funcionario funcionario;

    /*public Cliente getCliente() {
        return cliente;
    }
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    public Date getData() {
        return data;
    }
    public void setData(Date data) {
        this.data = data;
    }
    public double getDesconto() {
        return desconto;
    }
    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }
    public String getFormaPgto() {
        return formaPgto;
    }
    public void setFormaPgto(String formaPgto) {
        this.formaPgto = formaPgto;
    }
    public Funcionario getFuncionario() {
        return funcionario;
    }
    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }*/

    public void adicionaItem(Produto pProd, int pQtd, String pPagto){

    }

    public void removeItem(ItemVenda pItem){

    }

    public void calcularTotal(double pDesconto){

    }

    public void setCliente(Cliente pCliente){
        this.cliente = pCliente;
    }

    public void setFunc(Funcionario pFunc){
        this.funcionario = pFunc;
    }

}
