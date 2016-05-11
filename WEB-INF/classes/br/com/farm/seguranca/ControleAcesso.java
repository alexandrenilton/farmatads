package br.com.farm.seguranca;

import java.util.LinkedHashMap;

import br.com.farm.Facade;

public class ControleAcesso {
	
	private static ControleAcesso controleAcesso;
	private LinkedHashMap<String, String> acoesAdmin = new LinkedHashMap<String, String>();
	private LinkedHashMap<String, String> acoesFuncionario = new LinkedHashMap<String, String>();
	
	public synchronized static ControleAcesso getInstance() throws Exception {
		if (controleAcesso == null) {
			controleAcesso = new ControleAcesso();
		}
		return controleAcesso;
	}
	
	private ControleAcesso(){
		getAcoesAdmin();
		//carregaFuncionario();
	}
	
	private LinkedHashMap getAcoesAdmin(){
		acoesAdmin.put("/GerenciamentoCliente?acao=show", "");
		acoesAdmin.put("/CadastraCliente?acao=show", "");
		acoesAdmin.put("/CadastraCliente?acao=save", "");
		acoesAdmin.put("/ConsultarCliente?acao=show", "");
		acoesAdmin.put("/ConsultarCliente?acao=search", "");
		acoesAdmin.put("/ConsultarCliente?acao=detail", "");
		acoesAdmin.put("/AlterarCliente?acao=update", "");
		acoesAdmin.put("/AlterarCliente?acao=delete", "");
		
		acoesAdmin.put("/GerenciamentoProduto?acao=show", "");
		acoesAdmin.put("/CadastraProduto?acao=show", "");
		acoesAdmin.put("/CadastraProduto?acao=save", "");
		acoesAdmin.put("/ConsultarProduto?acao=show", "");
		acoesAdmin.put("/ConsultarProduto?acao=search", "");
		acoesAdmin.put("/ConsultarProduto?acao=detail", "");
		acoesAdmin.put("/AlterarProduto?acao=update", "");
		acoesAdmin.put("/AlterarProduto?acao=delete", "");
		
		
		return acoesAdmin;
	}
	
	private LinkedHashMap getAcoesFuncionario(){
		return acoesFuncionario;
	}
	
	public boolean permiteAcesso(String tipoUsuario, String url){
		String result = null;
		if ( tipoUsuario.equals("ADMIN")){
			result = acoesAdmin.get(url);
		}else{
			result = acoesFuncionario.get(url);
		}
		
		if ( result == null ){
			return false;
		}else{
			return true;
		}
	}
	
	
}
