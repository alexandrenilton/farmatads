<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>


<html:form action="/ConsultarProduto" method="post" >
<html:hidden property="acao" value="search" />

<table background="copy/img/bg.png" width="80%" height="50%" class="tableBg" border="0">
<tr valign="top" class="tr_cor_detalhe">
	<td colspan="2" class="tituloFluxo">
		<bean:message key="produto.tituloFluxoCdu.consulta" />
	</td>
</tr>
<tr valign="top">
	<td width="20%" ></td>
	<td align="left" width="25%">
		<table>
			<tr>
				<td align="right">
					<font class="estilo1">
						<bean:message key="produto.label.nome"/>
					</font>
				</td>
				<td>
					<html:text property="nome" maxlength="20" size="20" styleClass="formItens"/>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_nome" property="nome" >
						<bean:write name="err_nome" />
					</html:messages>
				</td>
			</tr>
			
			<tr>
				<td align="right">
					<font class="estilo1">
						<bean:message key="produto.label.descricao"/>
					</font>
				</td>
				<td>
					<html:text property="descricao" maxlength="45" size="20" styleClass="formItens" />
				</td>
				<td class="erroValidacao">
					<html:messages id="err_descricao" property="descricao" >
						<bean:write name="err_descricao" />
					</html:messages>
				</td>
			</tr>
			
			<tr>
				<td align="right">
					<font class="estilo1">
						<bean:message key="produto.label.laboratorio"/>
					</font>
				</td>
				<td>
					<html:text property="laboratorio" maxlength="45" size="20" styleClass="formItens" />
				</td>
				<td class="erroValidacao">
					<html:messages id="err_laboratorio" property="laboratorio" >
						<bean:write name="err_laboratorio" />
					</html:messages>
				</td>
			</tr>
			
			<tr>
				<td align="right">
					<label class="estilo1">
						<bean:message key="produto.label.quantidade"/>
					</label>
				</td>
				<td>
					<html:text property="quantidade" maxlength="10" size="20" styleClass="formItens" />
				</td>
				<td class="erroValidacao">
					<html:messages id="err_quantidade" property="quantidade" >
						<bean:write name="err_quantidade" />
					</html:messages>
				</td>
			</tr>
			
			<tr>
				<td align="right">
					<label class="estilo1">
						<bean:message key="produto.label.valorVenda"/>
					</label>
				</td>
				<td>
					<html:text property="valorVenda" maxlength="15" size="20" styleClass="formItens" />
				</td>
				<td class="erroValidacao">
					<html:messages id="err_valorVenda" property="valorVenda" >
						<bean:write name="err_valorVenda" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<html:submit value="Consultar"></html:submit>
					<input type="reset" value="Limpar">
					<input type="button" onclick="history.back();" value="Cancelar" />
				</td>
			</tr>
			
		</table>	
	</td>
	
	<logic:equal value="true" name="produtoForm" property="mostraResultado" >
		<td valign="top">
			<logic:empty name="produtoForm" property="produtos">
				<font class="estilo01">Nenhum produto foi encontrado!</font>
				<br />
				<a href="<%= request.getContextPath() %>/CadastraProduto.do?acao=show" >
					<font size="3" color="blue" face="Calibri"><b>
					<bean:message key="produto.cadastrar.novo" />
					</b>
					</font>
					<br />
					<div style="center">
					<img src="copy/img/icones/Write4.png" border="0"/>
					</div>
				</a>
				<br />
				
				
			</logic:empty>
			<logic:notEmpty name="produtoForm" property="produtos">
				
				<table id="rounded-corner" width="100%">
					<thead>
						<tr class="tr_resultado_titulo" bgcolor="#D1EEEE">
							 <th scope="col" class="rounded-inicio"><bean:message key="produto.nome" /> </th>
							 <th scope="col" class="rounded-meio"><bean:message key="produto.descricao" /> </th>
							 <th scope="col" class="rounded-meio"><bean:message key="produto.laboratorio" /></th>
							 <th scope="col" class="rounded-meio"><bean:message key="produto.quantidade" /></th>
							 <th scope="col" class="rounded-fim"><bean:message key="produto.valor_venda" /></th>
						</tr>
					</thead>
					
					<tbody>
						<logic:iterate id="produto" name="produtoForm" property="produtos" indexId="linha" >
							<% if ( (linha%2) == 0 ) {%>
								<tr bgcolor="#FFFFFF" >
							<%}else{ %>
								<tr bgcolor="#E3E7E9" > 
							<%} %>	
								<td class="td_01" width="20%">
									<a href="<%=request.getContextPath() %>/ConsultarProduto.do?acao=detail&id=<bean:write name="produto" property="idProduto"/>" >
										<bean:write name="produto" property="nome" />
									</a>
								</td>
								<td class="td_01" width="30%"><bean:write name="produto" property="descricao" /></td>
								<td class="td_01" width="20%"><bean:write name="produto" property="lab" /></td>
								<td class="td_01" width="15%"><bean:write name="produto" property="qtdEstoque" /></td>
								<td class="td_01_fim" width="15%">R$ <bean:write name="produto" property="preco" /></td>
							</tr>
						</logic:iterate>
					</tbody>
					<tfoot>
      					<tr>
        					<td colspan="4" class="rounded-foot-left">
          						Selecione um produto.
         					</td>
         					<td class="rounded-foot-right">&nbsp;
         					</td>
       					</tr>
    				</tfoot>
										
				</table>
			</logic:notEmpty>
				
			
		</td>
	</logic:equal>
	
	
</tr>
</table>

</html:form>

<%@include file="/pages/layout/rodape.jsp" %>
 

