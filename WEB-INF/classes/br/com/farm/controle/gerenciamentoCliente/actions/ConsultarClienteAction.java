package br.com.farm.controle.gerenciamentoCliente.actions;

import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionMessage;
import org.apache.struts.action.ActionMessages;
import org.apache.struts.action.DynaActionForm;

import br.com.farm.Facade;
import br.com.farm.base.BaseAction;
import br.com.farm.entidades.Cliente;
import br.com.farm.seguranca.ControleAcesso;
import br.com.farm.util.MetodosEstaticosUtilitarios;

public class ConsultarClienteAction extends BaseAction{
	
	private static final String SHOW_CONSULTAR_CLIENTE_FORM = "showConsultarClienteForm";
	private static final String SHOW_ALTERAR_CLIENTE_FORM = "showAlterarClienteForm";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm clienteForm = (DynaActionForm)form;
		
		String acao = (String)clienteForm.get("acao");
		String forward = "input";
		String url = mapping.getPath()+"?acao="+acao;
		boolean permiteAcesso = ControleAcesso.getInstance().permiteAcesso(
				(String)request.getSession().getAttribute("X-CODIGO_PERFIL"), url);
	
		String idPessoa = null;
		
		Collection collectionClientes = new ArrayList();
		
		if ( ! permiteAcesso ){
			forward = FORWARD_NO_ACCESS;
			return mapping.findForward(forward);
		}
		
		Facade facade;
		boolean existeErroValidacao = false;
		facade = Facade.getInstance();
		/**FIM DECLARACAO PADRAO**/
		
		if (acao.equals(SHOW)){
			forward = SHOW_CONSULTAR_CLIENTE_FORM;
		}else if (acao.equals(SEARCH) ){
			existeErroValidacao = validate(form, request);
			if ( existeErroValidacao ){
				return mapping.findForward(FORWARD_INVALID);
			}
			
			Cliente cliente = getDadosForm(form);
			collectionClientes = facade.getClientes(cliente);
			
			clienteForm.set("clientes", collectionClientes);
			clienteForm.set("mostraResultado", true);
			forward = FORWARD_SHOW_RESULT;
		}else if ( acao.equals(DETAIL)){
			idPessoa = clienteForm.getString("id");
			if ( ! idPessoa.trim().equals("") ){
				Cliente cliente = facade.consultaClientePorPessoa(new Long(idPessoa));
				clienteForm.set("nome", cliente.getNome());
				clienteForm.set("telefone", cliente.getTelefone());
				clienteForm.set("cpf", cliente.getCPF());
				clienteForm.set("rg", cliente.getRG() );
				clienteForm.set("email", cliente.getEmail());
				clienteForm.set("id", String.valueOf(cliente.getIdPessoa()));
				clienteForm.set("idCliente", String.valueOf(cliente.getIdCliente()));
				clienteForm.set("mostraResultado", true);
				clienteForm.set("detail", true);
				
				forward = SHOW_ALTERAR_CLIENTE_FORM;
			}
			
		}
		return mapping.findForward(forward);
	}
	
	
	private boolean validate(ActionForm form, HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		DynaActionForm cadastraClienteForm = (DynaActionForm)form;
		
		String telefone = MetodosEstaticosUtilitarios.escapeTelefone(((String)cadastraClienteForm.get("telefone")));
		if ( ! telefone.equals("") ) {
			if ( ! MetodosEstaticosUtilitarios.isSomenteNumeros(telefone) ){
				errors.add("telefone", new ActionMessage("cliente.telefone.somentenumeros"));
			}
		}
		
		String cpf = MetodosEstaticosUtilitarios.escapeCpfCnpj(((String)cadastraClienteForm.get("cpf")));
		if ( ! cpf.equals("") ) {
			if ( !MetodosEstaticosUtilitarios.isSomenteNumeros(cpf) ){
				errors.add("cpf", new ActionMessage("cliente.cpf.somentenumeros"));
			}
		}
		
		String rg = (String)cadastraClienteForm.get("rg");
		if ( ! rg.equals("") ) {
			if ( !MetodosEstaticosUtilitarios.isNumberInteger(rg) ){
				errors.add("rg", new ActionMessage("cliente.rg.somentenumeros"));
			}
		}
		
		saveErrors(request,errors);
		if ( errors.isEmpty()){
			return false;
		}else{
			return true;
		}
	}
	
	public Cliente getDadosForm(ActionForm form){
		DynaActionForm cadastraClienteForm = (DynaActionForm)form;
		String nome = (String)cadastraClienteForm.get("nome");
		String telefone = (String)cadastraClienteForm.get("telefone");
		String cpf = (String)cadastraClienteForm.get("cpf");
		String rg = (String)cadastraClienteForm.get("rg");
		String email = (String)cadastraClienteForm.get("email");
		
		Cliente cliente = new Cliente();
		cliente.setNome(nome);
		cliente.setCPF(MetodosEstaticosUtilitarios.escapeCpfCnpj(cpf));
		cliente.setRG(rg);
		cliente.setTelefone(MetodosEstaticosUtilitarios.escapeTelefone(telefone));
		cliente.setEmail(email);
		
		return cliente;
	}
		
	
}
