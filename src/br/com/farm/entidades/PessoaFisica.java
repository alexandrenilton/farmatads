/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class PessoaFisica extends Pessoa{
    private String CPF;
    private String RG;

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public String getRG() {
        return RG;
    }

    public void setRG(String RG) {
        this.RG = RG;
    }


}
