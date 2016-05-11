package br.com.farm.controle.gerenciamentoCliente;

import java.sql.SQLException;
import java.util.Collection;

import br.com.farm.banco.ClienteDao;
import br.com.farm.entidades.Cliente;

public class CtrlCliente {
	
	private ClienteDao dao = null;
	
	public boolean cadastraCliente(Cliente cliente) throws Exception{
		dao = new ClienteDao();
		return dao.cadastraCliente(cliente);
	}

	public Collection getClientes(Cliente cliente) {
		dao = new ClienteDao();
		return dao.getClientes(cliente);
	}

	public Cliente consultaClientePorPessoa(Long idPessoa) {
		dao = new ClienteDao();
		return dao.consultarCliente(idPessoa);
	}

	public boolean atualizaCliente(Cliente cliente) {
		dao = new ClienteDao();
		return dao.atualizaCliente(cliente);
	}

	public boolean excluirClientePorIdPessoa(Long idPessoa) {
		dao = new ClienteDao();
		return dao.excluirClientePorPessoa(idPessoa);
	}
}
