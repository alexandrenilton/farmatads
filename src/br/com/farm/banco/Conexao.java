package br.com.farm.banco;

import java.sql.*;
import java.lang.*;

/**
 *
 * @author alexandre
 */
public class Conexao {

    private static final int BANCO_FARMATADS = 1;
    private static boolean Depuracao = false;
   

    public static Connection obterConexao() throws Exception {
        return obterConexao(BANCO_FARMATADS);
    }

    public static boolean testaConexao() throws Exception{
        if ( obterConexao(BANCO_FARMATADS) == null ) {
            return false;
        }else{
            return true;
        }
    }
    
    protected Connection conn = null;
    protected PreparedStatement pstmt = null;
    protected ResultSet rs = null;
    
    /**
     * Methodo respons�vel por abrir uma conexao com o banco de dados.
     * @param codBanco
     * @return
     * @throws ClassNotFoundException
     */
    public static Connection obterConexao(int codBanco) throws ClassNotFoundException{
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String pass = "eaducon";

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(url,user,pass);
            return con;
        } catch (ClassNotFoundException e){
            System.out.println("Classe não encontrada");
        }
        catch (SQLException e){
            System.out.println("Problemas com o BD"+e);
        }
        return null;
    }
    
    public static void fecharTudo(ResultSet rs, Statement stmt, Connection conn){
    	if ( rs != null)
    		fecharResultSet(rs);
    	
    	if ( stmt != null )
    		fecharStatement(stmt);
    	
    	if ( conn != null)
    		fecharConexao(conn);
    	
    	
    }
    
    /**
    * Fecha um objeto ResultSet do banco
    * @param rs ResultSet : result set a fechar
    */
    public static void fecharResultSet(ResultSet rs) {
        if (Depuracao) {
            System.out.println("*** Entrou em fechar fecharResultSet ***");
        }
        try {
            // só fecha o result set se ele não for null
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) { // Exceção raríssima
            e.printStackTrace(System.err);
        }
    }

    /**
     * Fecha um objeto Statement
     * @param stmt Statement : statement a fechar
     */
    public static void fecharStatement(Statement stmt) {
        if (Depuracao) {
            System.out.println("*** Entrou em fechar statement ***");
        }
        try {
            // só fecha o statement se ele não for null
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException e) { // Exceção raríssima
            e.printStackTrace(System.err);
        }
    }

    /**
     * Fecha uma conexão com o banco
     * @param conexao Connection : conexão a fechar
     */
    public static void fecharConexao(Connection conexao) {
        if (Depuracao) {
            System.out.println("*** Entrou em fechar conexao ***");
        }
        try {
            // só fecha a conexao se ela não for null
            if (conexao != null) {
                conexao.close();
            }
        } catch (SQLException e) { // Exceção raríssima
            e.printStackTrace(System.err);
        }
    }
    
    /**
     * Metodo que retorna o valor maximo de uma coluna para uma dada tabela.
     * @param tabela
     * @param coluna
     * @return
     */
	public static Long getLastIdInsert(String tabela, String coluna) {
		Long id = null;
		
		String SQL = "SELECT MAX("+coluna+") as ID FROM "+tabela;
		
		try {
			Connection conn = Conexao.obterConexao();
			Statement stmt  = conn.createStatement();
			
			ResultSet rs = stmt.executeQuery(SQL);
			while (rs.next()){
				id = rs.getLong("ID");
			}
			
			fecharTudo(rs, stmt, conn);
			
			return id;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new Long(0);
	}
}