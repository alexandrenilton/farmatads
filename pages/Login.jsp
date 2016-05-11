<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>

<link rel="stylesheet" href="css/geral.css" />
<link rel="stylesheet" href="copy/css/internet.css" />


<html:html>
<body>

<BR><BR><BR>
 
<div align="center" class="titre"></div>
<BR>
<div align="center"><i></i></div>
<BR><BR><BR><BR>
<div align="center">
	

<html:form action="/Login.do" method="post" >
<html:hidden property="acao" value="run"/>
	
	<table width="30%" border=1  cellspacing=0 cellpadding=2 class="admintable">
  	<tr>
    	<td bgColor=#ffffff>
          <table width="100%" border=0  cellspacing=1 cellpadding=2 >
            <tr>
              <td align="center" bgColor=#ffffff colSpan="2"><br><B></B><br>&nbsp;</td>
            </tr>
            <tr >
              <td align="right" width="15%"><bean:message key="loginForm.email"/></td>
              <td width="50%">
              	<html:text property="email" maxlength="20" size="20"/>
              </td>
              	<html:messages id="err_email" property="email" >
					<td class="erroValidacao">
						<bean:write name="err_email" />
					</td>
            	</html:messages>
			</tr>
            <tr>
    	        <td align="right" width="15%">
        	     	<bean:message key="loginForm.senha"/>
	             </td>
            	<td width="50%">
            		<html:password property="senha" maxlength="20" size="20"/>
            	</td>
				<html:messages id="err_senha" property="senha">
					<td class="erroValidacao">
						<bean:write name="err_senha" />
					</td>
				</html:messages>
			</tr>
            <tr>
            	<td align="right" width="15%">
            	 	<bean:message key="loginForm.tipo"/>
            	</td>
				<td width="50%">
					<html:radio property="tipoAcesso" value="A">Administrador</html:radio>
					<html:radio property="tipoAcesso" value="F">Funcionário</html:radio>
				</td>
				<html:messages id="err_tipoAcesso" property="tipoAcesso">
					<td>
						<bean:write name="err_tipoAcesso" />
					</td>
				</html:messages>
			</tr>
            
            <tr>
              <td bgColor=#ffffff align="middle" colSpan=3>
                <div align="center">
                 	<html:submit value="Logar" />
                  	<html:reset value="Limpar"></html:reset>
                  <br>&nbsp;
                </div>
              </td>
            </tr>
          </table>
        </td>
       </tr>
	</table>
	
	<html:messages id="err_acesso" property="acesso">
		<font class="erroTopoPagina" ><bean:write name="err_acesso" /></font>
	</html:messages>
	
</html:form>
</body>	
</html:html>

