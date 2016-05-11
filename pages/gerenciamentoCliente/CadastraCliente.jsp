<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<html:form action="/CadastraCliente" method="post" >
<html:hidden property="acao" value="save" />

<table background="copy/img/bg.png" width="70%" height="50%" class="tableBg" border="0">
<tr>
	<td colspan="2">
	</td>
</tr>

<tr valign="baseline">
	<td width="20%" ></td>
	<td align="left" width="60%">
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
					<html:text property="cpf" maxlength="14" size="20" styleClass="formItens" onkeypress="return MascaraCPF(this);"></html:text>
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
					<font class="estilo1"><html:text property="rg" maxlength="8" size="20" styleClass="formItens" /></font>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_rg" property="rg" >
						<bean:write name="err_rg" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<html:submit value="Cadastrar"></html:submit>
					<input type="reset" value="Limpar">
					<input type="button" onclick="history.back();" value="Cancelar" />
				</td>
			</tr>
			
		</table>	
	</td>
</tr>
</table>

</html:form>

<%@include file="/pages/layout/rodape.jsp" %>
 

