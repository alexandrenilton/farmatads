<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<%@include file="/pages/layout/topo.jsp" %>

<table background="copy/img/bg.png" width="70%" height="50%" class="tableBg" border="0">
	<tr valign="top" >
		<td width="5%">
		</td>
		<td width="20%">
			<a href="<%=contexto%>/ConsultarCliente.do?acao=show" >
				<img src="copy/img/icones/Contacts1.png" title="Consultar Cliente" alt="Consultar Cliente" border="0"/>
				<br />
				<font class="estilo1">Consultar Cliente</font>
			</a>
		</td>
		<td width="20%"> 
			<a href="<%=contexto%>/ConsultarProduto.do?acao=show" >
				<img src="copy/img/icones/Estoque1.png" title="Consultar Produto" alt="Consultar Produto" border="0"/>
				<br />
				<font class="estilo1">Consultar Produto</font>
			</a>
		</td>
		
		<td width="60%"> 
			<a href="<%=contexto%>/ConsultarFuncionario.do?acao=show" >
				<img src="copy/img/icones/Clients15.png" title="Consultar Funcionario" alt="Consultar Funcionario" border="0"/>
				<br />
				<font class="estilo1">Consultar Funcionario</font>
			</a>
		</td>
		
		
</table>

<%@include file="/pages/layout/rodape.jsp" %>
 