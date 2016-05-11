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
		<h2><bean:message key="cliente.sucesso.salvar" /></h2>
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
		<h2><bean:message key="cliente.erro.salvar" /></h2>
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
		<h2><bean:message key="cliente.sucesso.update" /></h2>
	</div>
	<br />
</logic:equal>

<logic:equal parameter="acao" value="failureUpdate">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="cliente.falha.update" /></h2>
	</div>
	<br />
</logic:equal>



<logic:equal parameter="acao" value="successDelete">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="cliente.sucesso.delete" /></h2>
	</div>
	<br />
</logic:equal>

<logic:equal parameter="acao" value="failureDelete">
	<br />
	<br />
	<br />
	<br />
	
	<div align="center" style="50%:50%">
		<h2><bean:message key="cliente.falha.delete" /></h2>
	</div>
	<br />
</logic:equal>





<%@include file="../layout/rodape.jsp" %>

