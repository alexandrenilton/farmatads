<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<script language="javascript">
	function editCliente(){
		document.forms[0].idNome.disabled = "";
		document.forms[0].idTelefone.disabled = "";
		document.forms[0].idEmail.disabled = "";
		document.forms[0].idCpf.disabled = "";
		document.forms[0].idRg.disabled = "";

		
		document.getElementById('idUpdate').style.display = "block";  
		document.getElementById('idEdit').style.display = "none";  
		document.getElementById('idAcao').value = "update";
	}

	function excluir(){
		if (confirm("Deseja realmente excluir? ") ){
			document.forms[0].acao.value = 'delete';
			document.forms[0].submit();
		}
	}

</script>

<html:form action="/AlterarCliente" method="post" >
<html:hidden property="acao" value="search" styleId="idAcao"/>
<input type="hidden" name="id" value="<bean:write name="cadastraClienteForm" property="id" />" >

<div id="idEdit" >
<table background="copy/img/bg.png" width="100%" height="50%" class="tableBg" border="0" >
<tr valign="baseline">
	<td width="10%" ></td>
	<td align="left" width="30%">
		<table>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.nome"/></font>
				</td>
				<td>
					<html:text property="nome" maxlength="20" size="20" styleClass="formItens" disabled="true" styleId="idNome"/>
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
					<html:text property="telefone" maxlength="20" size="20" styleClass="formItens" 
						onkeypress="return MascaraFone(this);" disabled="true" styleId="idTelefone" />
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
					<html:text property="email" maxlength="40" size="20" styleClass="formItens" disabled="true" styleId="idEmail"/>
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
					<html:text property="cpf" maxlength="16" size="20" styleClass="formItens" onkeypress="return MascaraCPF(this);" 
						disabled="true" styleId="idCpf"/>
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
					<font class="estilo1"><html:text property="rg" maxlength="10" size="20" styleClass="formItens" disabled="true" styleId="idRg"/></font>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_rg" property="rg" >
						<bean:write name="err_rg" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td colspan="3">
					<input type="button" value="<bean:message key="cliente.alterar"/>"    onclick="javascript:editCliente();"/>
					<input type="button" value="<bean:message key="cliente.cancelar"/>"   onclick="history.back();" />
					<input type="button" value="<bean:message key="cliente.excluir"/>"    onclick="excluir();" />
				</td>
			</tr>
		</table>	
	</td>
</tr>
</table>
</div>

<div id="idUpdate" style="display: none;">
<table background="copy/img/bg.png" width="100%" height="50%" class="tableBg" border="0" >
<tr valign="baseline">
	<td width="10%" ></td>
	<td align="left" width="30%">
		<table>
			<tr>
				<td align="right">
					<font class="estilo1"><bean:message key="cliente.nome"/></font>
				</td>
				<td>
					<html:text property="nome" maxlength="20" size="20" styleClass="formItens" styleId="idNome"/>
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
					<html:text property="telefone" maxlength="20" size="20" styleClass="formItens" 
						onkeypress="return MascaraFone(this);" styleId="idTelefone" />
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
					<html:text property="email" maxlength="40" size="20" styleClass="formItens" styleId="idEmail"/>
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
					<html:text property="cpf" maxlength="16" size="20" styleClass="formItens" onkeypress="return MascaraCPF(this);" 
						styleId="idCpf"/>
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
					<font class="estilo1"><html:text property="rg" maxlength="10" size="20" styleClass="formItens" styleId="idRg"/></font>
				</td>
				<td class="erroValidacao">
					<html:messages id="err_rg" property="rg" >
						<bean:write name="err_rg" />
					</html:messages>
				</td>
			</tr>
			<tr>
				<td colspan="3">
					<input type="submit" value="<bean:message key="cliente.alterar.confirmar"/>" />
					<input type="button" value="<bean:message key="cliente.cancelar"/>"    onclick="history.back();" />
					<input type="button" value="<bean:message key="cliente.excluir"/>" onclick="excluir();" />
				</td>
			</tr>
		</table>	
	</td>
</tr>
</table>
</div>

</html:form>

<%@include file="/pages/layout/rodape.jsp" %>
 

