package br.com.farm.controle.login.actions;

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
import br.com.farm.entidades.Funcionario;

public class LoginAction extends BaseAction{
	
	private static final String SHOW_LOGIN_FORM = "showLoginForm";
	private static final String SUCCESS = "success";
	
	private static final String ADMIN = "ADMIN";
	private static final String FUNC = "FUNC";
	
	private static final String ADMINITRADOR = "Administrador";
	private static final String FUNCIONARIO = "Funcionário";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm loginForm = (DynaActionForm)form;
		
		String urlAcao = mapping.getPath();
		String acao = (String)loginForm.get("acao");
		
		
		
		String forward = "input";
		Facade facade;
		boolean existeErroValidacao = false;
		/**FIM DECLARACAO PADRAO**/
		
		facade = Facade.getInstance();
		
		if ( acao.equals(SHOW)){
			forward = SHOW_LOGIN_FORM;
		}else if ( acao.equals(RUN)){
			//String nome = (String)loginForm.get("email");
			String email = (String)loginForm.get("email");
			String senha = (String)loginForm.get("senha");
			String tipoAcesso = (String)loginForm.get("tipoAcesso");
			
			existeErroValidacao = validate(form, request);
			
			if ( existeErroValidacao ){
				return mapping.findForward(FORWARD_INVALID);
			}
			
			Funcionario funcionario = facade.consultaFuncionario(email, senha, tipoAcesso);
			
			if ( funcionario == null ){
				forward = FORWARD_INVALID;
				salvaErroUsuarioInvalido(request);
			}else{
				request.getSession().setAttribute("X-ID_PESSOA", String.valueOf(
						funcionario.getIdFuncionario()) );
				request.getSession().setAttribute("X-NOME", funcionario.getNome());
				
				if ( tipoAcesso.equals("A") ){
					request.getSession().setAttribute("X-CODIGO_PERFIL", ADMIN);
					request.getSession().setAttribute("X-PERFIL", ADMINITRADOR);
					
				}else if ( tipoAcesso.equals("F")){
					request.getSession().setAttribute("X-CODIGO_PERFIL", FUNC);
					request.getSession().setAttribute("X-PERFIL", FUNCIONARIO);
				}
				forward = SUCCESS;
			}
			
		}else{
			forward = SHOW_LOGIN_FORM;
		}
		return mapping.findForward(forward);
	}
	
	private boolean validate(ActionForm form, HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		DynaActionForm loginForm = (DynaActionForm)form;
		
		if ( ((String)loginForm.get("email")).equals("")){
			errors.add("email", new ActionMessage("loginForm.email.obrigatorio"));
		}
		
		if ( ((String)loginForm.get("senha")).equals("") ){
			errors.add("senha", new ActionMessage("loginForm.senha.obrigatorio"));
		}
		
		if ( ((String)loginForm.get("tipoAcesso")).equals("") ){
			errors.add("tipoAcesso", new ActionMessage("loginForm.tipoAcesso.obrigatorio"));
		}
		
		saveErrors(request,errors);
		
		if ( errors.isEmpty()){
			return false;
		}else{
			return true;
		}
	}
	
	private void salvaErroUsuarioInvalido(HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		errors.add("acesso", new ActionMessage("loginForm.emailSenha.invalidos"));
		saveErrors(request, errors);
	}
}
