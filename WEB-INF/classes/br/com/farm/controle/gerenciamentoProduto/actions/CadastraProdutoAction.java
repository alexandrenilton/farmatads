package br.com.farm.controle.gerenciamentoProduto.actions;

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
import br.com.farm.entidades.Produto;
import br.com.farm.seguranca.ControleAcesso;
import br.com.farm.util.MetodosEstaticosUtilitarios;

public class CadastraProdutoAction extends BaseAction{
	
	private static final String SHOW_CADASTRA_PRODUTO_FORM = "showCadastroProdutoForm";
	private static final String SUCCESS_CADASTRO_PRODUTO = "successCadastroProduto";
	private static final String FAILURE_CADASTRO_PRODUTO = "failureCadastroProduto";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm produtoForm = (DynaActionForm)form;
		
		String acao = (String)produtoForm.get("acao");
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
		
		if ( acao.equals(SHOW)){
			forward = SHOW_CADASTRA_PRODUTO_FORM;
		}else if ( acao.equals(SAVE)){
			existeErroValidacao = validate(form, request);
			
			if ( existeErroValidacao ){
				return mapping.findForward(FORWARD_INVALID);
			}
			Produto Produto = getDadosForm(form);
			
			facade = Facade.getInstance();
			
			if ( facade.cadastraProduto(Produto) ){
				forward = SUCCESS_CADASTRO_PRODUTO;
			}else{
				forward = FAILURE_CADASTRO_PRODUTO;
			}
			
		}
		
		System.out.println("FORWARD: "+forward);
		return mapping.findForward(forward);
	}
	
	private boolean validate(ActionForm form, HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		DynaActionForm produtoForm = (DynaActionForm)form;
		
		if ( ((String)produtoForm.get("nome")).equals("")){
			errors.add("nome", new ActionMessage("produto.nome.obrigatorio"));
		}
		
		if ( ((String)produtoForm.get("descricao")).equals("") ){
			errors.add("descricao", new ActionMessage("produto.descricao.obrigatorio"));
		}
		
		if ( ((String)produtoForm.get("laboratorio")).equals("") ){
			errors.add("laboratorio", new ActionMessage("produto.laboratorio.obrigatorio"));
		}
		
		if ( ((String)produtoForm.get("quantidade")).equals("") ){
			errors.add("quantidade", new ActionMessage("produto.quantidade.obrigatorio"));
		}else{
			String cpf = MetodosEstaticosUtilitarios.escapeCpfCnpj(((String)produtoForm.get("quantidade")));
			if ( !MetodosEstaticosUtilitarios.isSomenteNumeros(cpf) ){
				errors.add("quantidade", new ActionMessage("produto.quantidade.somentenumeros"));
			}
		}
		
		if ( ((String)produtoForm.get("valorVenda")).equals("") ){
			errors.add("valorVenda", new ActionMessage("produto.valor.obrigatorio"));
		}else{
			String valorVenda = (String)produtoForm.get("valorVenda");
			if ( !MetodosEstaticosUtilitarios.isNumeroDecimal(valorVenda) ){
				errors.add("valorVenda", new ActionMessage("produto.valorVenda.decimal"));
			}
		}
		saveErrors(request,errors);
		if ( errors.isEmpty()){
			return false;
		}else{
			return true;
		}
	}
	
	
	public Produto getDadosForm(ActionForm form){
		DynaActionForm produtoForm = (DynaActionForm)form;
		String nome = produtoForm.getString("nome");
		String descricao = produtoForm.getString("descricao");
		String laboratorio = produtoForm.getString("laboratorio");
		String quantidade = produtoForm.getString("quantidade");
		double valorVenda = MetodosEstaticosUtilitarios.getDouble(produtoForm.getString("valorVenda"));
		
		Produto produto = new Produto();
		produto.setNome(nome);
		produto.setDescricao(descricao);
		produto.setLab(laboratorio);
		produto.setPreco(valorVenda);
		produto.setQtdEstoque(Integer.parseInt(quantidade));
		
		return produto;
	}

}
