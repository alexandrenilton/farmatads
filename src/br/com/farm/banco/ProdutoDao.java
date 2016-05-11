package br.com.farm.banco;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import br.com.farm.entidades.Cliente;
import br.com.farm.entidades.Produto;

public class ProdutoDao extends Conexao{
	
	private final static String SQL_CRIAR_PRODUTO = 
				"INSERT INTO PRODUTO  "+
                " VALUES(null, ? , ? , ? , ? , ? )";
	
	private final static String SQL_BASE_CONSULTA_PRODUTOS = 
								" SELECT * " +
								" FROM   PRODUTO "+ 
								" WHERE  1=1 " ;

	private final static String SQL_CONSULTA_PRODUTO = 
								 " SELECT * "+
								 "  FROM PRODUTO "+
								 " WHERE IDPRODUTO = ? ";
	
	private final static String SQL_UPDATE_PRODUTO = 
								 " UPDATE PRODUTO "+
								 "   SET   NOME = ? , "+
								 "  DESCRICAO = ?, LABORATORIO = ?, "+
								 "  QUANTIDADE = ?, VALOR_VENDA = ? "+
								 " WHERE  IDPRODUTO = ? ";
	
	private final static String SQL_DELETE_PRODUTO = 
								" DELETE FROM PRODUTO " +
								" WHERE  IDPRODUTO = ? ";
	
	/**
	 * Metodos que cadastra um produto no banco de dados	
	 * @param produto
	 * @return
	 */
	public boolean cadastraProduto(Produto produto) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		
		try{
			conn = obterConexao();
			
			//Insert na tabela Produto.
			pstmt = conn.prepareStatement(SQL_CRIAR_PRODUTO, 
						Statement.RETURN_GENERATED_KEYS);
				
			pstmt.setString(1, produto.getNome());
			pstmt.setString(2, produto.getDescricao());
			pstmt.setString(3, produto.getLab());
			pstmt.setInt(4, produto.getQtdEstoque());
			pstmt.setDouble(5, produto.getPreco());
			
			int execucaoProduto = pstmt.executeUpdate();
			
			if ( execucaoProduto != 1 ) {
				return false;
			}
			return true;
		}catch (Exception e) {
			e.printStackTrace();
		}finally{
			fecharTudo(null, pstmt, conn);
		}
		return false;
	}
	/**
	 * Consulta todos os produtos na base de dados de acordo com os 
	 * paramentros fornecidos no objeto produto. Obs: a colecao vem
	 * ordernada pelo nome do produto.
	 * @param produto
	 * @return
	 */
	public Collection getProdutos(Produto produto) {
		StringBuffer SQL = new StringBuffer(SQL_BASE_CONSULTA_PRODUTOS);
		Collection listaProdutos = new ArrayList();
		int count = 1;
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		if ( !produto.getNome().equals("")){
			SQL.append(" AND NOME = ? ");
		}
		if ( !produto.getDescricao().equals("")){
			SQL.append(" AND DESCRICAO = ? ");
		}
		if ( !produto.getLab().equals("")){
			SQL.append(" AND LABORATORIO = ? ");
		}
		if ( produto.getQtdEstoque() != 0 ){
			SQL.append(" AND QUANTIDADE = ? ");
		}
		if ( produto.getPreco() != 0 ){
			SQL.append(" AND VALOR_VENDA = ? " );
		}
		
		SQL.append( " ORDER BY NOME " );
		
		try{
			int cont=1;
			conn = obterConexao();
			pstmt = conn.prepareStatement(SQL.toString());
			
			if ( !produto.getNome().equals("")){
				pstmt.setString(cont, produto.getNome());
				cont++;
			}
			if ( !produto.getDescricao().equals("")){
				pstmt.setString(cont, produto.getDescricao());
				cont++;
			}
			if ( !produto.getLab().equals("")){
				pstmt.setString(cont, produto.getLab());
				cont++;
			}
			if ( produto.getQtdEstoque() != 0 ){
				pstmt.setInt(cont, produto.getQtdEstoque());
				cont++;
			}
			if ( produto.getPreco() != 0 ){
				pstmt.setDouble(cont, produto.getPreco());
				cont++;
			}
		
			rs = pstmt.executeQuery();
			
			while (rs.next()){
				Produto p = new Produto();
				p.setIdProduto(rs.getLong("IDPRODUTO"));
				p.setNome(rs.getString("NOME"));
				p.setDescricao(rs.getString("DESCRICAO"));
				p.setLab(rs.getString("LABORATORIO"));
				p.setQtdEstoque(rs.getInt("QUANTIDADE"));
				p.setPreco(rs.getDouble("VALOR_VENDA"));
				listaProdutos.add(p);
			}
			
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(Exception ex){
			ex.printStackTrace();
		}finally{
			fecharTudo(rs, pstmt, conn);
		}
		return listaProdutos;
	}
	/**
	 * Busca um produto pelo seu id.
	 * @param idProduto
	 * @return
	 */
	public Produto getProduto(Long idProduto) {
		Connection conn=null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		Produto p = new Produto();
		
		try{
			conn = obterConexao();
			pstmt = conn.prepareStatement(SQL_CONSULTA_PRODUTO);
			pstmt.setLong(1, idProduto);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				p.setIdProduto(idProduto);
				p.setNome(rs.getString("NOME"));
				p.setLab(rs.getString("LABORATORIO"));
				p.setDescricao(rs.getString("DESCRICAO"));
				p.setPreco(rs.getDouble("VALOR_VENDA"));
				p.setQtdEstoque(rs.getInt("QUANTIDADE"));
			}
			
		}catch(Exception ex){
			ex.printStackTrace();
		}finally{
			fecharTudo(rs, pstmt, conn);
		}
		
		return p;
	}
	
	/**
	 * Atualiza dados do produto na base de dados
	 * @param produto
	 * @return
	 */
	public boolean atualizaProduto(Produto produto) {
		try{
			conn = obterConexao();
			pstmt = conn.prepareStatement(SQL_UPDATE_PRODUTO);
			pstmt.setString(1, produto.getNome());
			pstmt.setString(2, produto.getDescricao());
			pstmt.setString(3, produto.getLab());
			pstmt.setInt(4, produto.getQtdEstoque());
			pstmt.setDouble(5, produto.getPreco());
			pstmt.setLong(6, produto.getIdProduto());
			
			int retorno = pstmt.executeUpdate();
			
			if ( retorno == 1){
				return true;
			}else{
				return false;
			}

		}catch(Exception ex){
			ex.printStackTrace();
		}finally{
			fecharTudo(rs, pstmt, conn);
		}
		return false;
	}
	/**
	 * Deleta um produto na base de dados pelo seu Id.
	 * @param idProduto
	 * @return
	 */
	public boolean excluirProduto(Long idProduto){
		try{
			conn = obterConexao();
			pstmt = conn.prepareStatement(SQL_DELETE_PRODUTO);
			pstmt.setLong(1, idProduto);
			
			int retorno = pstmt.executeUpdate();
			
			if ( retorno == 1){
				return true;
			}else{
				return false;
			}
		}catch(Exception ex){
			ex.printStackTrace();
		}finally{
			fecharTudo(rs, pstmt, conn);
		}
		return false;
	}
	
}
