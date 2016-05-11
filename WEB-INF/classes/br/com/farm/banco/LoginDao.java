package br.com.farm.banco;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import br.com.farm.entidades.Funcionario;

import com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException;


public class LoginDao extends Conexao{
	
	
	private final String SQL_LOGIN = 
					"SELECT count(*) as QTD " +
			"FROM   FUNCIONARIO as FUNC,"+
			       "PESSOA_FISICA as PESF, "+
			       "PESSOA as PESS "+
			"WHERE  FUNC.Pessoa_Fisica_Pessoa_idPessoa = PESF.Pessoa_idPessoa "+
			  "AND  PESF.Pessoa_idPessoa = PESS.idPessoa "+
			  "AND  FUNC.senha like ? " +
			  "AND  PESS.nome like ? " +
			  "AND  FUNC.administrador = ? ";
	
	private final String SQL_CONSULTA_LOGIN = 
			"SELECT FUNC.idFuncionario as ID_FUNCIONARIO, "+
		    "PESS.idPessoa as ID_PESSOA, "+
		    "PESS.NOME as NOME "+
		    "FROM   FUNCIONARIO as FUNC, "+
		    "PESSOA_FISICA as PESF, "+
		    "PESSOA as PESS "+
			"WHERE  FUNC.Pessoa_Fisica_Pessoa_idPessoa = PESF.Pessoa_idPessoa "+
			"AND  PESF.Pessoa_idPessoa = PESS.idPessoa "+
			"AND  FUNC.senha like ? " +
			"AND  PESS.EMAIL = ? "+
			//"AND  PESS.nome like ? " +
			"AND  FUNC.administrador = ? ";
	
	public boolean validaLogin(String nome, String senha, boolean ehAdmin){
		String strQtd = null;
		int qtd = 0;
		
		try {
			Connection conn = obterConexao();
			PreparedStatement pstmt = conn.prepareStatement(SQL_LOGIN);
			pstmt.setString(1, senha);
			pstmt.setString(2, nome);
			pstmt.setBoolean(3, ehAdmin);
			
			ResultSet rs = pstmt.executeQuery();
			
			while (rs.next()){
				strQtd = rs.getString("QTD");
			}
			
			fecharTudo(rs, pstmt, conn);
			
			if ( strQtd != null ){
				try{
					qtd = Integer.parseInt(strQtd);
				}catch(ParseException pe){
					qtd = 0;
				}
			}else{
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if ( qtd == 0){
			return false;
		}else{
			return true;
		}
	}
	
	
	public Funcionario consultaFuncionario(String email, String senha, String tipo){
		Funcionario funcionario = new Funcionario();
		
		boolean ehAdmin = false;
		
		if ( tipo.equals("A")){
			ehAdmin = true;
		}
		
		try {
			Connection conn = obterConexao();
			PreparedStatement pstmt = conn.prepareStatement(SQL_CONSULTA_LOGIN);
			pstmt.setString(1, senha);
			pstmt.setString(2, email);
			pstmt.setBoolean(3, ehAdmin);
			
			ResultSet rs = pstmt.executeQuery();
			
			System.out.println("SQL Executado: "+pstmt.toString());
			
			while (rs.next()){
				funcionario.setIdPessoa(rs.getLong("ID_PESSOA"));
				funcionario.setIdFuncionario(rs.getLong("ID_FUNCIONARIO"));
				funcionario.setNome(rs.getString("NOME"));
			}
			fecharTudo(rs, pstmt, conn);
		} catch(Exception e){
			e.printStackTrace();
		}
		
		if ( funcionario.getIdPessoa() == null ){
			return null;
		}
		return funcionario;
	}
	
	public static void main(String[] args){
		LoginDao dao = new LoginDao();
		dao.validaLogin("Alexandre", "eaducon", true);
	}
}
