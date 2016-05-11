<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>


<%@include file="../layout/topo.jsp" %>

<!-- SUCCESS INSERIR -->
<logic:equal parameter="acao" value="success">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.sucesso.salvar" /></h2>
	</div>
	<br />
</logic:equal>


<!-- FAILURE INSERIR -->
<logic:equal parameter="acao" value="failure">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.erro.salvar" /></h2>
	</div>
	<br />
</logic:equal>


<!-- SUCCESS UPDATE -->
<logic:equal parameter="acao" value="successUpdate">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.sucesso.update" /></h2>
	</div>
	<br />
</logic:equal>

<logic:equal parameter="acao" value="failureUpdate">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.falha.update" /></h2>
	</div>
	<br />
</logic:equal>



<logic:equal parameter="acao" value="successDelete">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.sucesso.delete" /></h2>
	</div>
	<br />
</logic:equal>

<logic:equal parameter="acao" value="failureDelete">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="produto.falha.delete" /></h2>
	</div>
	<br />
</logic:equal>





<%@include file="../layout/rodape.jsp" %>

