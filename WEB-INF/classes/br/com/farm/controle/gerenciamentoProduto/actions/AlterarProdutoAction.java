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
import br.com.farm.entidades.Cliente;
import br.com.farm.entidades.Produto;
import br.com.farm.seguranca.ControleAcesso;
import br.com.farm.util.MetodosEstaticosUtilitarios;

public class AlterarProdutoAction extends BaseAction{
	
	private static final String SUCCESS_UPDATE_PRODUTO = "successUpdateProduto";
	private static final String FAILURE_UPDATE_PRODUTO = "failureUpdateProduto";
	private static final String SUCCESS_DELETE_PRODUTO = "successDeleteProduto";
	private static final String FAILURE_DELETE_PRODUTO = "failureDeleteProduto";
	
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
		
		if ( acao.equals(UPDATE)){
			String idProduto = (String)produtoForm.get("id");
			
			existeErroValidacao = validate(form, request);
			
			Produto p = getDadosForm(produtoForm);
			p.setIdProduto(new Long(idProduto));
			
			boolean update = facade.atualizaProduto(p);
			
			if ( update){
				forward = SUCCESS_UPDATE_PRODUTO;
			}else{
				forward = FAILURE_UPDATE_PRODUTO; 
			}
		}else if ( acao.equals(DELETE)){
			String idProduto = (String)produtoForm.get("id");
			
			boolean exclusaoOk = facade.excluirProduto(new Long(idProduto));
			
			if ( exclusaoOk ){
				forward = SUCCESS_DELETE_PRODUTO;
			}else{
				forward = FAILURE_DELETE_PRODUTO;
			}
			System.out.println("DELETE ID_PRODUTO: "+idProduto);
			
		}
		
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