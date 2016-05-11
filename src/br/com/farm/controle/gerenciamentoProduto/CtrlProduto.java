package br.com.farm.controle.gerenciamentoProduto;

import java.util.Collection;

import br.com.farm.banco.ProdutoDao;
import br.com.farm.entidades.Produto;

public class CtrlProduto {

	private ProdutoDao dao;
	
	public boolean cadastraProduto(Produto produto) {
		dao = new ProdutoDao();
		return dao.cadastraProduto(produto);
	}

	public Collection getProdutos(Produto produto) {
		dao = new ProdutoDao();
		return dao.getProdutos(produto);
	}

	public Produto consultaProduto(Long idProduto) {
		dao = new ProdutoDao();
		return dao.getProduto(idProduto);
	}

	public boolean atualizaProduto(Produto produto) {
		dao = new ProdutoDao();
		return dao.atualizaProduto(produto);
	}

	public boolean excluirProduto(Long idProduto) {
		dao = new ProdutoDao();
		return dao.excluirProduto(idProduto);
	}

}
