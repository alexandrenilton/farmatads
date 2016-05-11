<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<table background="copy/img/bg.png" width="70%" height="50%" class="tableBg" border="0">
	<tr height="5%">
		<td>
			<a href="<%=contexto%>/ConsultarProduto.do?acao=show" >
				<font class="estilo1">
					<bean:message key="produto.label.consultar" />
				</font>
			</a>
		</td>
	</tr>
	
	<tr height="5%">
		<td>
			<a href="<%=contexto%>/CadastraProduto.do?acao=show" >
				<font class="estilo1">
					<bean:message key="produto.label.inserir" />
				</font>
			</a>
		</td>
	</tr>
	
</table>
<%@include file="/pages/layout/rodape.jsp" %>
 