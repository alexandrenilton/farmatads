package br.com.farm.controle.gerenciamentoCliente.actions;

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

public class AlterarClienteAction extends BaseAction{
	
	private static final String SUCCESS_UPDATE_CLIENTE = "successUpdateCliente";
	private static final String FAILURE_UPDATE_CLIENTE = "failureUpdateCliente";
	private static final String SUCCESS_DELETE_CLIENTE = "successDeleteCliente";
	private static final String FAILURE_DELETE_CLIENTE = "failureDeleteCliente";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm clienteForm = (DynaActionForm)form;
		
		String acao = (String)clienteForm.get("acao");
		String forward = "input";
		String url = mapping.getPath()+"?acao="+acao;
		boolean permiteAcesso = ControleAcesso.getInstance().permiteAcesso(
				(String)request.getSession().getAttribute("X-CODIGO_PERFIL"), url);
		/**FIM DECLARACAO PADRAO**/
		
		if ( ! permiteAcesso ){
			forward = FORWARD_NO_ACCESS;
			return mapping.findForward(forward);
		}
		
		Facade facade;
		boolean existeErroValidacao = false;
		facade = Facade.getInstance();
		
		if ( acao.equals(UPDATE)){
			String idPessoa = (String)clienteForm.get("id");
			
			existeErroValidacao = validate(form, request);
			
			Cliente cliente = getDadosForm(clienteForm);
			cliente.setIdPessoa(new Long(idPessoa));
			
			boolean update = facade.atualizaCliente(cliente);
			
			if ( update){
				forward = SUCCESS_UPDATE_CLIENTE;
			}else{
				forward = FAILURE_UPDATE_CLIENTE; 
			}
		}else if ( acao.equals(DELETE)){
			//String idCliente = (String)clienteForm.get("idCliente");
			String idPessoa = (String)clienteForm.get("id");
			
			boolean exclusaoOk = facade.excluirClientePorIdPessoa(new Long(idPessoa));
			
			if ( exclusaoOk ){
				forward = SUCCESS_DELETE_CLIENTE;
			}else{
				forward = FAILURE_DELETE_CLIENTE;
			}
			System.out.println("DELETE ID_PESSOA: "+idPessoa);
			
		}
		
		return mapping.findForward(forward);
	}
	
	private boolean validate(ActionForm form, HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		DynaActionForm cadastraClienteForm = (DynaActionForm)form;
		
		if ( ((String)cadastraClienteForm.get("nome")).equals("")){
			errors.add("nome", new ActionMessage("cliente.nome.obrigatorio"));
		}
		
		if ( ((String)cadastraClienteForm.get("telefone")).equals("") ){
			errors.add("telefone", new ActionMessage("cliente.telefone.obrigatorio"));
		}else{
			String telefone = MetodosEstaticosUtilitarios.escapeTelefone(((String)cadastraClienteForm.get("telefone")));
			if ( ! MetodosEstaticosUtilitarios.isSomenteNumeros(telefone) ){
				errors.add("telefone", new ActionMessage("cliente.telefone.somentenumeros"));
			}
		}
		
		if ( ((String)cadastraClienteForm.get("email")).equals("") ){
			errors.add("email", new ActionMessage("cliente.email.obrigatorio"));
		}
		
		if ( ((String)cadastraClienteForm.get("cpf")).equals("") ){
			errors.add("cpf", new ActionMessage("cliente.cpf.obrigatorio"));
		}else{
			String cpf = MetodosEstaticosUtilitarios.escapeCpfCnpj(((String)cadastraClienteForm.get("cpf")));
			if ( !MetodosEstaticosUtilitarios.isSomenteNumeros(cpf) ){
				errors.add("cpf", new ActionMessage("cliente.cpf.somentenumeros"));
			}
		}
		
		if ( ((String)cadastraClienteForm.get("rg")).equals("") ){
			errors.add("rg", new ActionMessage("cliente.rg.obrigatorio"));
		}else{
			String rg = (String)cadastraClienteForm.get("rg");
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
