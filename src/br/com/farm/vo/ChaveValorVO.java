package br.com.farm.vo;

public class ChaveValorVO {
	private Long idChave;
	private String chave;
	private String valor;
	
	public ChaveValorVO(){
		
	}
	
	public ChaveValorVO(String chave, String valor){
		this.chave = chave;
		this.valor = valor;
	}
	
	public Long getIdChave() {
		return idChave;
	}
	public String getChave() {
		return chave;
	}
	public String getValor() {
		return valor;
	}
	public void setIdChave(Long idChave) {
		this.idChave = idChave;
	}
	public void setChave(String chave) {
		this.chave = chave;
	}
	public void setValor(String valor) {
		this.valor = valor;
	}
}
