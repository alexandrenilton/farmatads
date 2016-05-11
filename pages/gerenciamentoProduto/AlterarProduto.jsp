<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<script language="javascript">
	function editProduto(){
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

<html:form action="/AlterarProduto" method="post" >
<html:hidden property="acao" value="search" styleId="idAcao"/>
<input type="hidden" name="id" value="<bean:write name="produtoForm" property="id" />" >
<div id="idEdit" >
<table background="copy/img/bg.png" width="100%" height="50%" class="tableBg" border="0" >
<tr valign="baseline">
<td width="10%" ></td>
<td align="left" width="30%">
<table>
	<tr>
		<td align="right">
			<font class="estilo1">	
				<bean:message key="produto.label.nome"/>
			</font>
		</td>
		<td>
			<html:text property="nome" maxlength="20" size="20" styleClass="formItens" disabled="true"/>
		</td>
	</tr>
			
	<tr>
		<td align="right">
			<font class="estilo1">
				<bean:message key="produto.label.descricao"/>
			</font>
		</td>
		<td>
			<html:text property="descricao" maxlength="45" size="20" styleClass="formItens" disabled="true"/>
		</td>
	</tr>
			
		<tr>
			<td align="right">
				<font class="estilo1">
					<bean:message key="produto.label.laboratorio"/>
				</font>
			</td>
			<td>
				<html:text property="laboratorio" maxlength="45" size="20" styleClass="formItens" disabled="true"/>
			</td>
		</tr>
			
		<tr>
			<td align="right">
				<label class="estilo1">
					<bean:message key="produto.label.quantidade"/>
				</label>
			</td>
			<td>
				<html:text property="quantidade" maxlength="10" size="20" styleClass="formItens" disabled="true"/>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				<label class="estilo1">
					<bean:message key="produto.label.valorVenda"/>
				</label>
			</td>
			<td>
				<html:text property="valorVenda" maxlength="15" size="20" styleClass="formItens" disabled="true"/>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="button" value="<bean:message key="produto.alterar"/>"    onclick="javascript:editProduto();"/>
				<input type="button" value="<bean:message key="produto.cancelar"/>"   onclick="history.back();" />
				<input type="button" value="<bean:message key="produto.excluir"/>"    onclick="excluir();" />
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
			<font class="estilo1">	
				<bean:message key="produto.label.nome"/>
			</font>
		</td>
		<td>
			<html:text property="nome" maxlength="20" size="20" styleClass="formItens" />
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
		</tr>
		<tr>
			<td colspan="2">
				<input type="submit" value="<bean:message key="produto.alterar.confirmar"/>" />
				<input type="button" value="<bean:message key="produto.cancelar"/>"   onclick="history.back();" />
				<input type="button" value="<bean:message key="produto.excluir"/>"    onclick="excluir();" />
			</td>
			</tr>
		</table>	
	</td>
</tr>
</table>
</div>


</html:form>

<%@include file="/pages/layout/rodape.jsp" %>
 

