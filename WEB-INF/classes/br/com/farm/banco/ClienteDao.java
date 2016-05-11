package br.com.farm.banco;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import br.com.farm.entidades.Cliente;

public class ClienteDao {
	
	
	public static final String SQL_UPDATE_PESSOA = 
							" UPDATE PESSOA  "+
							" SET NOME = ? , "+
							" TELEFONE = ? ,"+
							   " EMAIL = ? " +
							 " WHERE  IDPESSOA = ? " ;
	
	public static final String SQL_UPDATE_PESSOA_FISICA = 
							" UPDATE PESSOA_FISICA " +
							" SET    CPF = ? , " +
							        " RG = ? " +
							" WHERE   PESSOA_IDPESSOA = ? " ;
	
	
	public static final String SQL_CRIAR_PESSOA = 
					"INSERT INTO PESSOA VALUES ( NULL , ?, ?,  ? )";
	
	public static final String SQL_CRIAR_PF = 
					"INSERT INTO PESSOA_FISICA VALUES( ?, ? , ?)";
	
	public static final String SQL_CRIAR_CLIENTE = 
					"INSERT INTO CLIENTE VALUES(NULL, ? , ? )";
	
	public static final String SQL_CONSULTAR_CLIENTE = "" +
						"SELECT CLIE.PONTOS as PONTOS, " +
							  " CLIE.ID_CLIENTE as ID_CLIENTE, "+
					          " PESS.idPessoa as ID_PESSOA, " +
					          " PESF.cpf as CPF, " +
					    	  " PESF.rg as RG, " +
					    	  " PESS.NOME as NOME, " +
					    	  " PESS.telefone as TELEFONE, " +
					    	  " PESS.EMAIL as EMAIL " +
						 " FROM    CLIENTE as CLIE, " +
							     " PESSOA_FISICA PESF, " +
						         " PESSOA as PESS "+
						" WHERE  CLIE.Pessoa_Fisica_Pessoa_idPessoa = PESF.Pessoa_idPessoa " +
						" AND  PESF.Pessoa_idPessoa = PESS.idPessoa " +
						" AND  PESS.idPessoa = ? ";
						//" AND  PESF.CPF = ? " ;
	
	
	public static final String SQL_DELETA_PESSOA = " delete from  PESSOA "+
												" WHERE  idPessoa = ? ";

	public static final String SQL_DELETA_PESSOA_FISICA =  " delete from  PESSOA_FISICA "+
												" WHERE  Pessoa_idPessoa = ? ";

	public static final String SQL_DELETA_CLIENTE = " delete from CLIENTE "+
									" WHERE  Pessoa_Fisica_Pessoa_idPessoa = ? ";
	
	public final String SQL_CONSULTAR_CLIENTES_BASE =	
							"SELECT CLIE.PONTOS as PONTOS, " +
							    " CLIE.ID_CLIENTE as ID_CLIENTE, "+
						    	" PESS.idPessoa as ID_PESSOA, " +
						    	" PESF.cpf as CPF, " +
						    	" PESF.rg as RG, " +
								  " PESS.NOME as NOME, " +
								  " PESS.telefone as TELEFONE, " +
								  " PESS.EMAIL as EMAIL " +
							" FROM    CLIENTE as CLIE, " +
								     " PESSOA_FISICA PESF, " +
							       " PESSOA as PESS "+
							" WHERE  CLIE.Pessoa_Fisica_Pessoa_idPessoa = PESF.Pessoa_idPessoa " +
							" AND  PESF.Pessoa_idPessoa = PESS.idPessoa " ;
					
					//		" AND  PESF.CPF = ? " ;
	
	public Cliente consultarCliente(Long id){
		Cliente cliente = null;
		try{
			Connection conn = Conexao.obterConexao();
			PreparedStatement pstmt = conn.prepareStatement(SQL_CONSULTAR_CLIENTE);
			pstmt.setLong(1, id);
			ResultSet rs = pstmt.executeQuery();
			
			while (rs.next()){
				if (rs.isFirst()){
					cliente = new Cliente();
				}
				cliente.setIdCliente(rs.getLong("ID_CLIENTE"));
				cliente.setNome(rs.getString("NOME"));
				cliente.setRG(rs.getString("RG"));
				cliente.setCPF(rs.getString("CPF"));
				cliente.setEmail(rs.getString("EMAIL"));
				cliente.setTelefone(rs.getString("TELEFONE"));
				cliente.setPontos(rs.getInt("PONTOS"));
				cliente.setIdPessoa(rs.getLong("ID_PESSOA"));
			}
			Conexao.fecharTudo(rs, pstmt, conn);
			return cliente;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Metodo que insere um novo cliente na base de dados.
	 * @param cliente
	 * @return
	 * @throws SQLException
	 */
	public boolean cadastraCliente(Cliente cliente) throws SQLException{
		Long idPessoa = null;
		
		boolean algumErrado = false;
		
		try{
			Connection conn = Conexao.obterConexao();
			
			//So faz commit quando eu determinar...
			conn.setAutoCommit(false);
			
			//Insert na tabela Pessoa.
			PreparedStatement pstmt = conn.prepareStatement(SQL_CRIAR_PESSOA, 
					Statement.RETURN_GENERATED_KEYS);
			
			pstmt.setString(1, cliente.getNome());
			pstmt.setString(2, cliente.getTelefone());
			pstmt.setString(3, cliente.getEmail());
			int pessoa = pstmt.executeUpdate();
			if ( pessoa != 1 ) {
				algumErrado = true;
			}
			
			//Pego id do AUTO_INCREMENT
			ResultSet rs = pstmt.getGeneratedKeys();
			while(rs.next()){
				idPessoa = rs.getLong(1); 
			}
			
			//Insert na tabela PESSOA_FISICA
			pstmt = conn.prepareStatement(SQL_CRIAR_PF);
			pstmt.setLong(1, idPessoa);
			pstmt.setString(2, cliente.getCPF());
			pstmt.setString(3, cliente.getRG());
			int pessoaFisica = pstmt.executeUpdate();
			
			if ( pessoaFisica != 1){
				algumErrado = true;
			}
			
			//Insert na tabela CLIENTE
			pstmt = conn.prepareStatement(SQL_CRIAR_CLIENTE);
			pstmt.setInt(1, 0);
			pstmt.setLong(2, idPessoa);
			int icliente = pstmt.executeUpdate();
			if ( icliente != 1 ){
				algumErrado = true;
			}
			
			//Se tiver algum erro, faço rollback em tudo
			if ( algumErrado ){
				conn.rollback();
			}else{
				conn.commit();
			}
			
			Conexao.fecharTudo(null, pstmt, conn);
			
			return true;
		}catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	/**
	 * Methodo que excluir um cliente pelo idPessoa, visto a heranca 
	 *  que existe entre as entidades
	 * @param idPessoa
	 * @return
	 * @throws SQLException
	 */
	public boolean excluirClientePorPessoa(Long idPessoa){
		Connection conn;
		boolean commit = false;
		
		try{
			conn = Conexao.obterConexao();
			conn.setAutoCommit(false);
			
			PreparedStatement pstmt = conn.prepareStatement(SQL_DELETA_CLIENTE);
			pstmt.setLong(1, idPessoa);
			int qtd01  = pstmt.executeUpdate();
			
			pstmt = conn.prepareStatement(SQL_DELETA_PESSOA_FISICA);
			pstmt.setLong(1, idPessoa);
			int qtd02 = pstmt.executeUpdate();
			
			pstmt = conn.prepareStatement(SQL_DELETA_PESSOA);
			pstmt.setLong(1, idPessoa);
			int qtd03 = pstmt.executeUpdate();
			
			if ( qtd01 > 0  && qtd02 > 0 && qtd03 > 0){
				conn.commit();
				commit = true;;
			}else{
				conn.rollback();
			}
			Conexao.fecharTudo(null, pstmt, conn);
		}catch(SQLException ex){
			ex.printStackTrace();
			return false;
		}catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
		return commit;
	}
	
	/**
	 * Metodos que busca os cliente na base de dados de acordo como os dados
	 * setados no bean cliente. Metodos faz a critica de campos para adicionar
	 * ou nao no select no banco de dados.
	 * @param cliente
	 * @return
	 */
	public Collection getClientes(Cliente cliente) {
		
		StringBuffer SQL = new StringBuffer(SQL_CONSULTAR_CLIENTES_BASE);
		
		Collection listaClientes = new ArrayList();
		
		if ( !cliente.getNome().equals("")){
			SQL.append(" AND PESS.NOME = ? ");
		}
		if ( !cliente.getEmail().equals("")){
			SQL.append(" AND PESS.EMAIL = ? ");
		}
		if ( !cliente.getTelefone().equals("")){
			SQL.append(" AND PESS.TELEFONE = ? ");
		}
		if ( !cliente.getCPF().equals("")){
			SQL.append(" AND PESF.CPF = ? ");
		}
		if ( !cliente.getRG().equals("")){
			SQL.append(" AND PESF.RG = ? " );
		}
		
		SQL.append( " ORDER BY PESS.NOME " );
		
		try{
			int cont=1;
			Connection conn = Conexao.obterConexao();
			PreparedStatement pstmt = conn.prepareStatement(SQL.toString());
			
			if ( ! cliente.getNome().equals("") ){
				pstmt.setString(cont, cliente.getNome());
				cont++;
			}
			if ( !cliente.getEmail().equals("")){
				pstmt.setString(cont, cliente.getEmail());
				cont++;
			}
			if ( !cliente.getTelefone().equals("")){
				pstmt.setString(cont, cliente.getTelefone());
				cont++;
			}
			if ( !cliente.getCPF().equals("")){
				pstmt.setString(cont, cliente.getCPF());
				cont++;
			}
			if ( !cliente.getRG().equals("")){
				pstmt.setString(cont, cliente.getRG());
				cont++;
			}
			
			
			ResultSet rs = pstmt.executeQuery();
			
			while (rs.next()){
				cliente = new Cliente();
				cliente.setIdCliente(rs.getLong("ID_CLIENTE"));
				cliente.setNome(rs.getString("NOME"));
				cliente.setRG(rs.getString("RG"));
				cliente.setCPF(rs.getString("CPF"));
				cliente.setEmail(rs.getString("EMAIL"));
				cliente.setTelefone(rs.getString("TELEFONE"));
				cliente.setPontos(rs.getInt("PONTOS"));
				cliente.setIdPessoa(rs.getLong("ID_PESSOA"));
				listaClientes.add(cliente);
			}
			Conexao.fecharTudo(rs, pstmt, conn);
			return listaClientes;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
		
	}

	public boolean atualizaCliente(Cliente cliente) {
		
		boolean existeErro = false;
		
		try{
			Connection conn = Conexao.obterConexao();
			PreparedStatement pstmt = conn.prepareStatement(SQL_UPDATE_PESSOA);
			
			conn.setAutoCommit(false);
	
			pstmt.setString(1, cliente.getNome());
			pstmt.setString(2, cliente.getTelefone());
			pstmt.setString(3, cliente.getEmail());
			pstmt.setLong(4, cliente.getIdPessoa());
			
			int resultPessoa = pstmt.executeUpdate();
			
			if ( resultPessoa == 0){
				existeErro = true;
			}
			
			pstmt = conn.prepareStatement(SQL_UPDATE_PESSOA_FISICA);
			pstmt.setString(1, cliente.getCPF());
			pstmt.setString(2, cliente.getRG());
			pstmt.setLong(3, cliente.getIdPessoa());
			
			int resultPessoaFisica = pstmt.executeUpdate();
			
			if ( resultPessoaFisica == 0){
				existeErro = true;
			}else{
				conn.commit();
			}
			Conexao.fecharTudo(null, pstmt, conn);
			
			if ( existeErro ){
				return false;
			}else{
				return true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return false;
	}
	
	
	/**
	 * Metodos main para testes paralelos.
	 * @param args
	 */
	public static void main(String[] args){
		ClienteDao dao = new ClienteDao();
		/*
		Cliente cliente = dao.consultarCliente("02250601176");
		
		if ( cliente == null ){
			cliente = new Cliente();
		}
		
		cliente.setCPF("151529281");
		cliente.setRG("44341");
		cliente.setEmail("aaaaaa@csc.com");
		cliente.setNome("Jorge Vercilo");
		cliente.setPontos(0);
		cliente.setTelefone("116731121");
		
		try {
			dao.criarCliente(cliente);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
	}

}
