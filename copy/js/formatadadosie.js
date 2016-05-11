<!--

//Bloco de c?digo para esconder e mostra form
var Ver4 = parseInt(navigator.appVersion) >= 4
var IE4 = ((navigator.userAgent.indexOf("MSIE") != -1) && Ver4)
var block = "formulario";
function esconde() {	document.form1.style.visibility = "hidden" }
function mostra() { document.form1.style.visibility = "visible" }
//Bloco de c?digo para esconder e mostra form


// C?digo para o teclado
function tecladown (digito){
	if (digito == ''){
		document.form1.senha.value = '';
		return;
	}
	var pass = document.form1.senha.value;
	if (pass.length >= 8){
		return;
	}
	document.form1.senha.value = document.form1.senha.value + digito;
}
function teclaclick(tecla){
	return false;
}
function teclaup(tecla){
	tecladown(tecla);
}
// --


// -- Contador para objeto TextArea.
function limita(campo){
	var tamanho = document.form1[campo].value.length;
	var tex=document.form1[campo].value;
	if (tamanho>=1539) {
		document.form1[campo].value=tex.substring(0,1539);
	}
	return true;
}

function contacampo(campo, tamtxt) {
document.form1[tamtxt].value =  1540-document.form1[campo].value.length;
}
// --



function SetHelp(txt) {
	var oHelp = document.getElementById('help');
	if (oHelp) oHelp.innerHTML = txt ;
}

function main(campofoco) {
	if ( campofoco == '' || document.form1.elements.length == 0 )
		return false;

	var num = parseInt(campofoco);

	if ( num || num == 0 )
	{
		if ( document.form1[num] )
			document.form1[num].focus();
	}
	else
	{
		if ( (campofoco == "senhaConta" || campofoco == "senhaAtual") && document.applets["tclJava"] )

			document.applets["tclJava"].setFocus();
		else if ( document.form1[campofoco] )
			document.form1[campofoco].focus();
	}
}

function Apaga(){
	if (document.form1.elements.length != 0)
		for (i = 0; i < document.form1.elements.length; i++)
		{
			if( document.form1[i].type != "hidden" )
				document.form1[i].value="";
		}
}


var da = (document.all) ? 1 : 0;
var pr = (window.print) ? 1 : 0;
var mac = (navigator.userAgent.indexOf("Mac") != -1);

function printPage()
{
  if (pr) // NS4, IE5
    window.print()
  else if (da && !mac) // IE4 (Windows)
    vbPrintPage()
  else // other browsers
    alert("Desculpe seu browser n?o suporta esta fun??o. Por favor utilize a barra de trabalho para imprimir a p?gina.");
  return false;
}

if (da && !pr && !mac) with (document) {
  writeln('<OBJECT ID="WB" WIDTH="0" HEIGHT="0" CLASSID="clsid:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');
  writeln('<' + 'SCRIPT LANGUAGE="VBScript">');
  writeln('Sub window_onunload');
  writeln('  On Error Resume Next');
  writeln('  Set WB = nothing');
  writeln('End Sub');
  writeln('Sub vbPrintPage');
  writeln('  OLECMDID_PRINT = 6');
  writeln('  OLECMDEXECOPT_DONTPROMPTUSER = 2');
  writeln('  OLECMDEXECOPT_PROMPTUSER = 1');
  writeln('  On Error Resume Next');
  writeln('  WB.ExecWB OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER');
  writeln('End Sub');
  writeln('<' + '/SCRIPT>');
}

function FormataDado(campo,tammax,pos,teclapres){
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "-", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length ;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){ tam = tam - 1 ; }

	if ( tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ;}
		if ( tam > pos && tam <= tammax ){
			document.form1[campo].value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );}
	}
	//alert("campo: " + document.form1[campo+1].name);
	if ( !teclapres.shiftKey && tecla == 9 && document.form1[campo+1].name == "senhaConta" && document.applets['tclJava'] ){
		//alert("aki 1");
			document.applets['tclJava'].setFocus();
	}
}

function FormataValor(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }

	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
	}

	for (var ct = 0; ct < document.form1.elements.length; ct++) {
		if (document.form1.elements[ct].name == document.form1.elements[campo].name) {
			if ( !teclapres.shiftKey && tecla == 9 && document.form1.elements[ct+1] && document.form1.elements[ct+1].name == "senhaConta" && document.applets['tclJava'] ){
				document.applets['tclJava'].setFocus();
			}
		}
	}
}

function SaltaCampo (campo,prox,tammax,teclapres){
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	if( tecla == 109 || tecla == 188 || tecla == 110 || tecla == 111 || tecla == 223 || tecla == 108 ){
		document.form1[campo].value = vr.substr( 0, vr.length - 1 ); }
	else{
	 	vr = vr.replace( "-", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( ",", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	tam = vr.length;

	 	if (tecla != 0 && tecla != 9 && tecla != 16 && tecla != 144 ){

			if ( tam == tammax ){
				if ( prox == "senhaConta" || (document.form1.elements[prox] && document.form1.elements[prox].name == "senhaConta"))
				{
					if ( document.applets['tclJava'] )
						document.applets['tclJava'].setFocus();
					else if ( document.form1.senhaConta )
						document.form1.senhaConta.focus();
				}
				else if ( document.form1[prox] )
					document.form1[prox].focus();
			}
		}
	}
}

function FormataData(campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.forms[0][campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.forms[0][campo].value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam <= 10 )
			document.forms[0][campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 );
	}
/*
	for (var ct = 0; ct < document.form1.elements.length; ct++) {
		if (document.form1.elements[ct].name == document.form1.elements[campo].name) {
			if ( !teclapres.shiftKey && tecla == 9 && document.form1[ct+1].name == "senhaConta" && document.applets['tclJava'] ){
				document.applets['tclJava'].setFocus();
			}
		}
	}
*/
}

function FormataHora(campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( ":", "" );
	vr = vr.replace( ":", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.form1[campo].value = vr.substr( 0, tam - 2  ) + ':' + vr.substr( tam - 2, tam );
	}
}

function FormataMesAno(Campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[Campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 7 )
			document.form1[Campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, tam ); }
}

function FormataPercentual(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }

	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 3 ){
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 3) && (tam <= 6) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 3 ) + ',' + vr.substr( tam - 3, tam ) ; }
	}

}


function VerificaJava()
 	{
	if (navigator.javaEnabled())
		document.form1.javas.value="sim"
	}

function FormataCpf(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }

	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}
}

function FormataCartaoCredito(campo, teclapres) {
    var tammax = 16;
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;

	if ( tecla == 8 || (tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) )
	{
		vr = vr.replace( "/", "" );
		vr = vr.replace( "/", "" );
		vr = vr.replace( ",", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		tam = vr.length;

		if (tam < tammax && tecla != 8)
		   {tam = vr.length + 1 ; }

		if (tecla == 8 ) {tam = tam - 1 ; }

		if ( tam < 5 )
		   { document.form1[campo].value = vr ; }
	 	if ( ( tam >  4 ) && ( tam < 9 ) )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, tam-4 ) ; }
	 	if ( ( tam >  8 ) && ( tam < 13 ) )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, 4 ) + '.' + vr.substr( 8, tam-4 ) ; }
	 	if ( tam > 12 )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, 4 ) + '.' + vr.substr( 8, 4 ) + '.' + vr.substr( 12, tam-4 ); }
	}
}

function FormataCgc(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }

	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 6) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 7) && (tam <= 9) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 6 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 10) && (tam <= 12) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 9 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 13) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 12 ) + '.' + vr.substr( tam - 12, 3 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}
}

function FormataTelefone(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }

	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 4) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 4 ) + '-' + vr.substr( tam - 4, tam ) ;
			}
	}
}

var confirmaAssinador = 0;
var linkJS = "";

function getSenha() {
	if ( document.getElementById('tclAssinadorContent') && document.getElementById('tclAssinadorContent').style.display == 'none' )
	{
		if(showApplet());
			return false;
	}

	if ( document.applets['tclJava'] ){
		var senha = document.applets['tclJava'].getSenha();
		document.form1.elements['senhaConta'].value = senha;
		if (document.form1.elements['numCod']) {
			document.form1.elements['numCod'].value = document.applets['tclJava'].getNumCod();
		}
	}
	else if ( document.applets['tclAssinador'] )
	{
		if(confirmaAssinador == 1)
		{
			confirmaAssinador = 0;
			if( document.applets['tclAssinador'].ok() )
			{
				loadData();
				return true;
			}
			else
			{
				document.applets['tclAssinador'].focus();
				return false;
			}
		}
		else
		{
			return document.applets['tclAssinador'].cancel();
		}
	}
}

function trocaBotaoAction(botao)
{
	if ( document.applets['tclAssinador'] )
	{
		pos = document.form1.action.indexOf("?");
		acao = document.form1.action;
		if(pos != -1)
		{
			acao = acao.substring(0, pos);
		}
		document.form1.action = acao + "?" + botao + ".x=1";
	}
}

// metodo chamado pela applet na finaliza??o do processo
function appletTerminated(ok)
{
	if (ok)
		loadData();
	if (linkJS == "")
		document.form1.submit();
	else if (linkJS == "retorna") {
		linkJS = "";
		window.history.back(1);
	}
	else {
		var linkJSTemp = linkJS;
		linkJS = "";
		window.navigate(linkJSTemp);
	}
}

function controleJS(link) {
	linkJS = link;
	if (document.applets['tclAssinador'])
		getSenha();
	else {
		if (linkJS == "retorna") {
			linkJS = "";
			window.history.back(1);
		}
		else {
			var linkJSTemp = linkJS;
			linkJS = "";
			window.navigate(linkJSTemp);
		}
	}
}

function enviaSub() {
	document.form1.submit();
	return false;
}


function mudaFoco(campo)
{
	if(campo == "98") {
		//var nb = document.form1.elements[document.form1.elements.length - 1].name;
		//if(nb.indexOf(".x"))
		//	nb = nb.substring(0,nb.length-2);
		//document.form1.elements[nb].focus();
		return;
	}
	if( (campo == "senhaConta" || (document.form1.elements[campo] && document.form1.elements[campo].name == "senhaConta")) && document.applets['tclJava'] )
		document.applets.tclJava.setFocus();
	else if (document.form1.elements[campo])
		document.form1.elements[campo].focus();
	else if (document.getElementById && document.getElementById(campo))
		document.getElementById(campo).focus();
	else if (document.all && document.all[campo])
		document.all[campo].focus();
}

function mostraBalao(mst) {
	if (mst) {
		document.all["balaoApplet"].style.visibility="visible";
	}
	else {
		document.all["balaoApplet"].style.visibility="hidden";
	}
}

function teclaTab(teclaPress) {
	if(teclaPress.keyCode == 9)
		focaApplet();
}

function focaApplet() {
	if (document.applets['tclJava'] ) {
		document.applets.tclJava.setFocus();
	}
}

function focaApplet2(nomeApplet) {
	if (document.applets[nomeApplet] ) {
		document.applets[nomeApplet].setFocus();
	}
}

function focaApplet3(prox,teclapres) {
	var tecla = teclapres.keyCode;
	if ( !teclapres.shiftKey && tecla == 9 && document.form1.elements[prox] && document.form1.elements[prox].name == "senhaConta" && document.applets['tclJava'] )
		document.applets['tclJava'].setFocus();
}

function setaCod(numCod) {
	if (document.form1.elements['numCod'])
		document.form1.elements['numCod'].value = numCod;
}

function setaContraste(contr) {
	if (document.form1.elements['valorContr'])
		document.form1.elements['valorContr'].value = contr;
}

function setaQW(strT) {
	if (document.form1.elements['texto'])
		document.form1.elements['texto'].value = strT;
}

function executarLogin() {
	getSenha();
	enviaSub();
}

var submeteuFormulario = 0;
function controleDoubleClick()
{
	if(submeteuFormulario=="1")
	{
		alert("O bot?o 'OK' ou 'Confirma' foi acionado mais de uma vez enquanto a transa??o estava em andamento. Aguarde... ");
		return false;
	}
	submeteuFormulario = "1";
	return true;
}

function formataCampoSoNumerico(e) {
	var isIE = (navigator.appVersion.indexOf("MSIE") > -1);
	var code = isIE ? e.keyCode : e.charCode
	var digitado = String.fromCharCode(code).toUpperCase();

	/* Este ? o c?digo que barra caracteres n?o num?ricos */
	e.keyCode = (/\d/.test(digitado)) ? digitado.charCodeAt(0) : 0;
	/* -------------------------------------------------- */
}

function currencyFormat(fld, milSep, decSep, e) {
var sep = 0;
var key = '';
var i = j = 0;
var len = len2 = 0;
var strCheck = '0123456789';
var aux = aux2 = '';
var whichCode = (window.Event) ? e.which : e.keyCode;
if (whichCode == 13) return true;  // Enter
if (whichCode == 8) return true;  // Delete (Bug fixed)
key = String.fromCharCode(whichCode);  // Get key value from key code
if (strCheck.indexOf(key) == -1) return false;  // Not a valid key
len = fld.value.length;
for(i = 0; i < len; i++)
if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
aux = '';
for(; i < len; i++)
if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
aux += key;
len = aux.length;
if (len == 0) fld.value = '';
if (len == 1) fld.value = '0'+ decSep + '0' + aux;
if (len == 2) fld.value = '0'+ decSep + aux;
if (len > 2) {
aux2 = '';
for (j = 0, i = len - 3; i >= 0; i--) {
if (j == 3) {
aux2 += milSep;
j = 0;
}
aux2 += aux.charAt(i);
j++;
}
fld.value = '';
len2 = aux2.length;
for (i = len2 - 1; i >= 0; i--)
fld.value += aux2.charAt(i);
fld.value += decSep + aux.substr(len - 2, len);
}
return false;
}


function somenteNumero(e)
{
	if (document.all) // Internet Explorer
		var tecla = event.keyCode;
	else if(document.layers) // Nestcape
		var tecla = e.which;
		if (tecla > 47 && tecla < 58) // numeros de 0 a 9
			return true;
		else
			{
				if (tecla != 8) // backspace
					event.keyCode = 0;
					//return false;
				else
					return true;
			}
	return false;
}
//-->
