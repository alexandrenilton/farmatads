package br.com.farm.controle.gerenciamentoProduto.actions;

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
import br.com.farm.entidades.Produto;
import br.com.farm.seguranca.ControleAcesso;
import br.com.farm.util.MetodosEstaticosUtilitarios;

public class ConsultarProdutoAction extends BaseAction{
	
	private static final String SHOW_CONSULTAR_PRODUTO_FORM = "showConsultarProdutoForm";
	private static final String SHOW_ALTERAR_PRODUTO_FORM = "showAlterarProdutoForm";
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		DynaActionForm produtoForm = (DynaActionForm)form;
		
		String acao = (String)produtoForm.get("acao");
		String forward = "input";
		String url = mapping.getPath()+"?acao="+acao;
		boolean permiteAcesso = ControleAcesso.getInstance().permiteAcesso(
				(String)request.getSession().getAttribute("X-CODIGO_PERFIL"), url);
	
		String idPessoa = null;
		
		Collection collectionProdutos = new ArrayList();
		
		if ( ! permiteAcesso ){
			forward = FORWARD_NO_ACCESS;
			return mapping.findForward(forward);
		}
		
		Facade facade;
		boolean existeErroValidacao = false;
		facade = Facade.getInstance();
		/**FIM DECLARACAO PADRAO**/
		
		if (acao.equals(SHOW)){
			forward = SHOW_CONSULTAR_PRODUTO_FORM;
		}else if (acao.equals(SEARCH) ){
			existeErroValidacao = validate(form, request);
			if ( existeErroValidacao ){
				return mapping.findForward(FORWARD_INVALID);
			}
			
			Produto produto = getDadosForm(form);
			collectionProdutos = facade.getProdutos(produto);
			
			produtoForm.set("produtos", collectionProdutos);
			produtoForm.set("mostraResultado", true);
			forward = FORWARD_SHOW_RESULT;
			
		}else if ( acao.equals(DETAIL)){
			String idProduto = produtoForm.getString("id");
			
			if ( ! idProduto.trim().equals("") ){
				Produto produto = facade.consultaProduto(new Long(idProduto));
				
				produtoForm.set("id", String.valueOf(produto.getIdProduto()));
				produtoForm.set("nome", produto.getNome());
				produtoForm.set("descricao", produto.getDescricao());
				produtoForm.set("laboratorio", produto.getLab());
				produtoForm.set("quantidade", String.valueOf(produto.getQtdEstoque()));
				produtoForm.set("valorVenda", MetodosEstaticosUtilitarios.formatNumber(produto.getPreco()));
				
				forward = SHOW_ALTERAR_PRODUTO_FORM;
			}
		}
		return mapping.findForward(forward);
	}
	
	
	private boolean validate(ActionForm form, HttpServletRequest request){
		ActionMessages errors  = new ActionMessages();
		
		DynaActionForm produtoForm = (DynaActionForm)form;
		
		String quantidade = MetodosEstaticosUtilitarios.escapeCpfCnpj(((String)produtoForm.get("quantidade")));
		if ( ! quantidade.equals("") ){
			if ( !MetodosEstaticosUtilitarios.isSomenteNumeros(quantidade) ){
				errors.add("quantidade", new ActionMessage("produto.quantidade.somentenumeros"));
			}
		}
		
		String valorVenda = (String)produtoForm.get("valorVenda");
		if (!valorVenda.equals("")){
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
		if ( !quantidade.equals("")){
			produto.setQtdEstoque(Integer.parseInt(quantidade));
		}
		return produto;
	}
		
	
}