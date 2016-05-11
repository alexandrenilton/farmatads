package br.com.farm.controle.login;

import br.com.farm.banco.LoginDao;
import br.com.farm.entidades.Funcionario;

public class CtrlLogin {
	
	private LoginDao loginDao;
	
	public Funcionario consultaFuncionario(String email, String senha, String tipo) throws Exception{
		loginDao = new LoginDao();
		return loginDao.consultaFuncionario(email, senha, tipo);
	}
}
