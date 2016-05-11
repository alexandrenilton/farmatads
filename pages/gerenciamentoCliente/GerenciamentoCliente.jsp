<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<table background="copy/img/bg.png" width="70%" height="50%" class="tableBg" border="0">
	<tr height="30%" valign="baseline" >
		<td width="5%">
		</td>
		<td>
			<a href="<%=contexto%>/ConsultarCliente.do?acao=show" >
				<img src="copy/img/icones/Contacts1.png" title="Consultar Cliente" alt="Consultar Cliente" border="0"/>
				<br />
				<font class="estilo1">Consultar Cliente</font>
			</a>
		</td>
		<%--
		<td>
			<img src="copy/img/icones/Add Card1.png" title="Inserir Cliente" alt="Inserir Cliente"/>
			<br />
			<a href="<%=contexto%>/CadastraCliente.do?acao=show" >
			<font class="estilo1">Inserir Novo Cliente</font>
			</a>
		</td>
		--%>
	</tr>
	
	<%--
	<tr height="5%">
		<td>
			<a href="<%=contexto%>/AtualizaCliente.do?acao=show" >
				<font class="estilo1">Atualizar Dados do Cliente</font>
			</a>
		</td>
	</tr>	
	<tr height="5%">
		<td>
			<a href="<%=contexto%>/ExcluirCliente.do?acao=show" >
				<font class="estilo1">Excluir Cliente</font>	
			</a>
		</td>
	</tr>
	--%>
	
</table>
<%@include file="/pages/layout/rodape.jsp" %>
 