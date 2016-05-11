<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<html:form action="/ConsultarCliente" method="post" >
<html:hidden property="acao" value="search" />

<table background="copy/img/bg.png" width="100%" height="50%" class="tableBg" border="0">

<tr valign="top" class="tr_cor_detalhe">
	<td colspan="2" class="tituloFluxo">
		<bean:message key="cliente.tituloFluxoCdu.consulta" />
	</td>
</tr>

<tr valign="top">
	<td width="10%" ></td>
	<td align="left" width="30%">
		<table>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.nome"/></font>
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
					<font class="estilo1"><bean:message key="cliente.telefone"/>
					</font>
				</td>
				<td>
					<html:text property="telefone" maxlength="20" size="20" styleClass="formItens" onkeypress="return MascaraFone(this);"></html:text>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_telefone" property="telefone" >
						<bean:write name="err_telefone" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.email"/></font>
				</td>
				<td>
					<html:text property="email" maxlength="40" size="20" styleClass="formItens"></html:text>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_email" property="email" >
						<bean:write name="err_email" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.cpf"/></font>
				</td>
				<td>
					<html:text property="cpf" maxlength="16" size="20" styleClass="formItens" onkeypress="return MascaraCPF(this);"></html:text>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_cpf" property="cpf" >
						<bean:write name="err_cpf" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.rg"/></font>
				</td>
				<td>
					<font class="estilo1"><html:text property="rg" maxlength="10" size="20" styleClass="formItens" /></font>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_rg" property="rg" >
						<bean:write name="err_rg" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<html:submit value="Pesquisar" />
					<input type="reset" value="Limpar">
					<input type="button" onclick="history.back();" value="Cancelar" />
				</td>
			</tr>
			
		</table>	
	</td>
		
	<logic:equal value="true" name="cadastraClienteForm" property="mostraResultado" >
		<td valign="top">
			<logic:empty name="cadastraClienteForm" property="clientes">
				<font class="estilo01">Nenhum cliente foi encontrado!</font>
				<br />
				<a href="<%= request.getContextPath() %>/CadastraCliente.do?acao=show" >
					<font size="3" color="blue" face="Calibri"><b>
					<bean:message key="cliente.cadastrar.novo" />
					</b>
					</font>
					<br />
					<div style="center">
					<img src="copy/img/icones/List4.png" border="0"/>
					</div>
				</a>
				<br />
				
				
			</logic:empty>
			<logic:notEmpty name="cadastraClienteForm" property="clientes">
				
				<table id="rounded-corner">
					<thead>
						<tr class="tr_resultado_titulo" bgcolor="#D1EEEE">
							 <th scope="col" class="rounded-inicio"><bean:message key="cliente.nome" /> </th>
							 <th scope="col" class="rounded-meio"><bean:message key="cliente.telefone" /> </th>
							 <th scope="col" class="rounded-meio"><bean:message key="cliente.email" /></th>
							 <th scope="col" class="rounded-meio"><bean:message key="cliente.cpf" /></th>
							 <th scope="col" class="rounded-fim"><bean:message key="cliente.rg" /></th>
						</tr>
					</thead>
					
					<tbody>
						<logic:iterate id="cliente" name="cadastraClienteForm" property="clientes" indexId="linha" >
							<% if ( (linha%2) == 0 ) {%>
								<tr bgcolor="#FFFFFF" >
							<%}else{ %>
								<tr bgcolor="#E3E7E9" >
							<%} %>	
								<td class="td_01">
									<a href="<%=request.getContextPath() %>/ConsultarCliente.do?acao=detail&id=<bean:write name="cliente" property="idPessoa"/>" >
										<bean:write name="cliente" property="nome" />
									</a>
								</td>
								<td class="td_01"><bean:write name="cliente" property="telefone" /></td>
								<td class="td_01"><bean:write name="cliente" property="email" /></td>
								<td class="td_01"><bean:write name="cliente" property="CPF" /></td>
								<td class="td_01_fim"><bean:write name="cliente" property="RG" /></td>
							</tr>
						</logic:iterate>
					</tbody>
					<tfoot>
      					<tr>
        					<td colspan="4" class="rounded-foot-left">
          						Selecione um cliente.
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
 

