<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<html:form action="/CadastraProduto" method="post" >
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
 

