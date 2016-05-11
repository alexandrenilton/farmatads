/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.farm.entidades;

/**
 *
 * @author alexandre
 */
public class Pessoa {
	
	/*Acrescentado*/
	private Long idPessoa;
	
	/*Modelo*/
	private String nome;
    private String telefone;
    private String email;
    
    
    public Long getIdPessoa() {
		return idPessoa;
	}

	public void setIdPessoa(Long idPessoa) {
		this.idPessoa = idPessoa;
	}
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

}
