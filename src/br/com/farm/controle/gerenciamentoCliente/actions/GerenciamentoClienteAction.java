package br.com.farm.controle.gerenciamentoCliente.actions;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.DynaActionForm;

import br.com.farm.Facade;
import br.com.farm.base.BaseAction;
import br.com.farm.seguranca.ControleAcesso;

public class GerenciamentoClienteAction extends BaseAction{
	
	private static final String SHOW_GERENCIAMENTO_CLIENTE = "showGerenciamentoCliente";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm cadastraClienteForm = (DynaActionForm)form;
		String acao = (String)cadastraClienteForm.get("acao");
		String url = mapping.getPath()+"?acao="+acao;
		String forward = "input";
		boolean permiteAcesso = ControleAcesso.getInstance().permiteAcesso(
				(String)request.getSession().getAttribute("X-CODIGO_PERFIL"), url);
		
		if ( ! permiteAcesso ){
			forward = FORWARD_NO_ACCESS;
			return mapping.findForward(forward);
		}
		
		/**FIM DECLARACAO PADRAO**/
	
		if ( acao.equals(SHOW)){
			forward = SHOW_GERENCIAMENTO_CLIENTE;
		}
		return mapping.findForward(forward);
	}
}