package br.com.farm;

import java.util.Collection;

import br.com.farm.controle.gerenciamentoCliente.CtrlCliente;
import br.com.farm.controle.gerenciamentoProduto.CtrlProduto;
import br.com.farm.controle.login.CtrlLogin;
import br.com.farm.entidades.Cliente;
import br.com.farm.entidades.Funcionario;
import br.com.farm.entidades.Produto;

/**
 * Classe Fachada para acesso a camada de negócio.
 */
public class Facade {
	private static Facade singleton;
	
	private Facade() { 
	}

	public synchronized static Facade getInstance() throws Exception {
		if (singleton == null) {
			singleton = new Facade();
		}
		return singleton;
	}
	
	public Funcionario consultaFuncionario(String email, String senha, String tipo) throws Exception{
		CtrlLogin loginCtrl = new CtrlLogin();
		return loginCtrl.consultaFuncionario(email, senha, tipo); 
	}
	
	public boolean cadastraCliente(Cliente cliente) throws Exception{
		CtrlCliente clienteCtrl = new CtrlCliente();
		return clienteCtrl.cadastraCliente(cliente);
	}

	public Collection getClientes(Cliente cliente) {
		CtrlCliente clienteCtrl = new CtrlCliente();
		return clienteCtrl.getClientes(cliente);
	}

	public Cliente consultaClientePorPessoa(Long idPessoa) {
		CtrlCliente clienteCtrl = new CtrlCliente();
		return clienteCtrl.consultaClientePorPessoa(idPessoa);
	}

	public boolean atualizaCliente(Cliente cliente) {
		CtrlCliente clienteCtrl = new CtrlCliente();
		return clienteCtrl.atualizaCliente(cliente);
	}

	public boolean excluirClientePorIdPessoa(Long idPessoa) {
		CtrlCliente clienteCtrl = new CtrlCliente();
		return clienteCtrl.excluirClientePorIdPessoa(idPessoa);
	}

	public boolean cadastraProduto(Produto produto) {
		CtrlProduto produtoCtrl = new CtrlProduto();
		return produtoCtrl.cadastraProduto(produto);
	}

	public Collection getProdutos(Produto produto) {
		CtrlProduto produtoCtrl = new CtrlProduto();
		return produtoCtrl.getProdutos(produto);
	}

	public Produto consultaProduto(Long idProduto) {
		CtrlProduto produtoCtrl = new CtrlProduto();
		return produtoCtrl.consultaProduto(idProduto);
	}

	public boolean atualizaProduto(Produto produto) {
		CtrlProduto produtoCtrl = new CtrlProduto();
		return produtoCtrl.atualizaProduto(produto);
	}

	public boolean excluirProduto(Long idProduto) {
		CtrlProduto produtoCtrl = new CtrlProduto();
		return produtoCtrl.excluirProduto(idProduto);
	}
}
