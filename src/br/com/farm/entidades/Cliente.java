/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class Cliente extends PessoaFisica{
    private Long idCliente;
    private int pontos;
    
	/*Getters and Setters*/
	public Long getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Long idCliente) {
		this.idCliente = idCliente;
	}
	
	public int getPontos() {
		return pontos;
	}

	public void setPontos(int pontos) {
		this.pontos = pontos;
	}

	public int getNumeroPontos(){
        return pontos;
    }

    public void atualizaPontos(int pPontos){
        pontos = pPontos;
    }

    public void zeraPontos(){
        pontos = 0;
    }
}
