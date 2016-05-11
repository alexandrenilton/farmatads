// FUNCAO : ALTERA VALOR CHECKBOX
// MODO DE USAR:
//     onclick="atualizaCheckbox(checkbox);"

function escondeSelects() {
    var num = 6; 
    for (i=0;i<num ;i++) {
        e = document.forms[0].elements[i];
        if (e) {
            t = e.type;
            if ((t == 'select-one') || (t == 'select-multiple')) {
                e.style.visibility = 'hidden';
                e.style.display = 'none';
            }
        }
    }
}

function mostraSelects() {
    var num = 6; 
    for (i=0;i<num ;i++){
        e = document.forms[0].elements[i];
        if (e) {
		    t = e.type;
            if ((t == 'select-one') || (t == 'select-multiple')) {
                e.style.visibility = 'visible';
                e.style.display = 'block';
            }
        }
    } 
}  
function atualizaCheckbox(checkbox) {
  checkbox.checked = ! checkbox.checked;
  if(checkbox.value = "on") checkbox.value="off";
  else if(checkbox.value = "off") checkbox.value="on";
}

function mask(str, textbox, loc, delim) {
  
  var locs = loc.split(','); 
  
  for (var i = 0; i <= locs.length; i++) {
    for (var k = 0; k <= str.length; k++) {
      if (k == locs[i]) {
        if (str.substring(k, k+1) != delim) {
          str = str.substring(0,k) + delim + str.substring(k,str.length)
        }

      }
    }
  }
  
  textbox.value = str
}

function validaIntervaloData(dt_inicio,dt_fim){

    if (dt_inicio.value == null || dt_inicio.value == "") {
        alert("Por favor, informe a data inicial para a pesquisa.");
        dt_inicio.focus();
        return false;
    }
    if (dt_fim.value == null || dt_fim.value == "") {
        alert("Por favor, informe a data final para a pesquisa.");
        dt_fim.focus();
        return false;
    }
    if (!validardata(dt_inicio)) {
        dt_inicio.focus();
        return false;
    }
    if (!validardata(dt_fim)) {
        dt_fim.focus();
        return false;
    }

    dia_inicio=dt_inicio.value.substr(0,2);
    mes_inicio=dt_inicio.value.substr(3,2);
    ano_inicio=dt_inicio.value.substr(6,4);

    dia_final=dt_fim.value.substr(0,2);
    mes_final=dt_fim.value.substr(3,2);
    ano_final=dt_fim.value.substr(6,4);

    mydate = new Date();
    myday = mydate.getDate();
    mymonth = mydate.getMonth();
    myyear= mydate.getYear();

    mymonth = mymonth + 1;

    if(myday < 10)
      myday = '0' + myday;

    if(mymonth < 10)
      mymonth = '0' + mymonth;

    if (ano_inicio > ano_final) {
        alert("A data de inicio deve ser anterior à data fim.");
        dt_inicio.focus();
        return false;
    }
    if ((ano_inicio == ano_final) && (mes_inicio > mes_final)){
        alert("A data de inicio deve ser anterior à data fim.");
        dt_inicio.focus();
        return false;
    }
    if ((ano_inicio == ano_final) && (mes_inicio == mes_final) && (dia_inicio > dia_final)){
        alert("A data de inicio deve ser anterior à data fim.");
        dt_inicio.focus();
        return false;
    }
    if (ano_final > myyear) {
        alert("A data final deve ser anterior à data atual.");
        dt_fim.focus();
        return false;
    }
    if ((ano_final == myyear) && (mes_final > mymonth)){
        alert("A data final deve ser anterior à data atual.");
        dt_fim.focus();
        return false;
    }
    if ((ano_final == myyear) && (mes_final == mymonth) && (dia_final > myday)){
        alert("A data final deve ser anterior à data atual.");
        dt_fim.focus();
        return false;
    }
    if (ano_inicio == '0000') {
        alert("Data inválida.");
        dt_inicio.focus();
        return false;
    }
    
    if (ano_final == '0000') {
        alert("Data inválida.");
        dt_fim.focus();
        return false;
    }
    return true;
}
    
/*
*  Funcao para validar a data, verificando mes dia e ano.
*  Utilizar da seguiinte forma: validaData(campo_date)
*/
function validardata(Wparam) {
    if ( trim( Wparam.value ) != "" ){
        barra = Wparam.value.indexOf("/");
        dia = Wparam.value.substring(0,barra);
        string1 = Wparam.value.substring(barra+1);
        barra = string1.indexOf("/");
        mes = string1.substring(0,barra);
        ano = string1.substring(barra+1);
        data = dia + mes + ano;
        
        if (!isNumber(data) || data.length < 8) {
            alert("O formato correto da data é dd/mm/aaaa");
            Wparam.focus();
            return false;
        }
        if (dia > 31 || dia < 1){
            alert("Data inválida.");
            Wparam.focus();
            return false;
        }
        if (mes > 12 || mes < 1){
            alert("Data inválida.");
            Wparam.focus();
            return false;
        }
        if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
            if (dia > 30){
                alert("O mês "+mes+" possui 30 dias");
                Wparam.focus();
                return false;
            }
        }
        if (mes == 02){
            bis = (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0));
            if (dia>29 || (dia==29 && !bis)){
                hoje = new Date()
                anoh = hoje.getYear()
                mesh = hoje.getMonth()
                if (anoh > ano) {
                  t = "teve";
                }
                else {
                    if(anoh < ano) {
                      t = "terá";
                    }
                    else {
                      if(mesh > 2) {
                        t = "teve";
                      }
                      else {
                        if(mesh < 2) {
                          t = "terá";
                        }
                        else {
                          t = "tem";
                        }
                 }
                 }
             }
            alert("Fevereiro do ano "+ano+" não "+t+" "+dia+" dias");
            Wparam.focus();
            return false;
        }
     }
    }
    
    return true;
}

/*
*  Funcao para fazer formatacao de datas : dd/mm/aaaa
*  Utilizar da seguinte forma: formataData(this,event).
*  onkeypress="return formataData(this,event)" usar tb o onkeypress="return soNumeros(event);"
*/
function formataData( campo, e ) {
    car = (navigator.appName == "Netscape" ) ? e.which : e.keyCode;
    
    if ( ( car < 48 || car > 57 ) && ( car > 31 ) ) return false;
    if ( ( campo.value.length==2 ) || ( campo.value.length == 5 ) ){
        campo.value+='/';
    }

    return true;
}

/**
*   Funcao que permite d? numeros.
*/
function soNumeros(e){
    car = ( navigator.appName == "Netscape" ) ? e.which : e.keyCode;

    if ( car > 31 && ( car < 48 || car > 57 ) )
        return false;
    else
        return true;
}

/**
*   Funcao que retira os espa?os em branco a direita e a esquerda, retornando uma nova string sem espa?os em branco.
*/
function trim(s) {
    
      while (s.substring(0,1) == ' ') {
        s = s.substring(1,s.length);
      }
      while (s.substring(s.length-1,s.length) == ' ') {
        s = s.substring(0,s.length-1);
      }
      return s;
}

/*
* Funcao que verifica se um valor ? num?rico.
* Utilizar da seguinte forma: isNumber(document.forms[#].elements[#].value)
*/
function isNumber(inputVal)
{
    oneDecimal = false;
    inputStr = inputVal.toString();
    for(var i = 0;i < inputStr.length; i++)
    {
        var oneChar = inputStr.charAt(i);
        if(oneChar == "." && !oneDecimal)
        {
            oneDecimal = true;
            continue;
        }
        if(oneChar < "0" || oneChar > "9")
        {
            return false;
        }
    }
    return true;
}


/***********************************************
* FUNCAO PARA HABILITAR E DESABILITAR UMA DETERMINADA AREA
* Contractible Headers script- ? Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use. Last updated Oct 21st, 2003.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var enablepersist="on" //Enable saving state of content structure using session cookies? (on/off)
var collapseprevious="yes" //Collapse previously open content when opening present? (yes/no)

if (document.getElementById){
document.write('<style type="text/css">')
document.write('.switchcontent{display:none;}')
document.write('</style>')
}

function getElementbyClass(classname){
ccollect=new Array()
var inc=0
var alltags=document.all? document.all : document.getElementsByTagName("*")
for (i=0; i<alltags.length; i++){
if (alltags[i].className==classname)
ccollect[inc++]=alltags[i]
}
}

function contractcontent(omit){
var inc=0
while (ccollect[inc]){
if (ccollect[inc].id!=omit)
ccollect[inc].style.display="none"
inc++
}
}

function expandcontent(cid){
if (typeof ccollect!="undefined"){
if (collapseprevious=="yes")
contractcontent(cid)
document.getElementById(cid).style.display=(document.getElementById(cid).style.display!="block")? "block" : "none"
}
}

function revivecontent(){
contractcontent("omitnothing")
selectedItem=getselectedItem()
selectedComponents=selectedItem.split("|")
for (i=0; i<selectedComponents.length-1; i++)
document.getElementById(selectedComponents[i]).style.display="block"
}

function get_cookie(Name) { 
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { 
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function getselectedItem(){
if (get_cookie(window.location.pathname) != ""){
selectedItem=get_cookie(window.location.pathname)
return selectedItem
}
else
return ""
}

function saveswitchstate(){
var inc=0, selectedItem=""
while (ccollect[inc]){
if (ccollect[inc].style.display=="block")
selectedItem+=ccollect[inc].id+"|"
inc++
}

document.cookie=window.location.pathname+"="+selectedItem
}

function do_onload(){
getElementbyClass("switchcontent")
if (enablepersist=="on" && typeof ccollect!="undefined")
revivecontent()
}


if (window.addEventListener)
window.addEventListener("load", do_onload, false)
else if (window.attachEvent)
window.attachEvent("onload", do_onload)
else if (document.getElementById)
window.onload=do_onload

if (enablepersist=="on" && document.getElementById)
window.onunload=saveswitchstate

/*
function mostra(nr) {

  if (document.layers) {
    document.layers[nr].visibility = 'show';
    document.layers[nr].display = 'block';

  } else if (document.all) {
    document.all[nr].style.visibility = 'visible';
    document.all[nr].style.display = 'block';

  } else if (document.getElementById) {
    document.getElementById(nr).style.visibility = 'visible';
    document.getElementById(nr).style.display = 'block';
  }
}

function esconde(nr) {

  if (document.layers) {
    document.layers[nr].visibility = 'hide';
    document.layers[nr].display = 'none';

  } else if (document.all) {
    document.all[nr].style.visibility = 'hidden';
    document.all[nr].style.display = 'none';

  } else if (document.getElementById) {
    document.getElementById(nr).style.visibility = 'hidden';
    document.getElementById(nr).style.display = 'none';
  }
}
*/


function mostra(nr) {

  if (document.layers && document.layers[nr]) {
    document.layers[nr].visibility = 'show';
    document.layers[nr].display = 'block';

  } else if (document.all && document.all[nr]) {
    document.all[nr].style.visibility = 'visible';
    document.all[nr].style.display = 'block';

  } else if (document.getElementById(nr)) {
    document.getElementById(nr).style.visibility = 'visible';
    document.getElementById(nr).style.display = 'block';
  }
}

function esconde(nr) {

  if (document.layers && document.layers[nr]) {
    document.layers[nr].visibility = 'hide';
    document.layers[nr].display = 'none';

  } else if (document.all && document.all[nr]) {
    document.all[nr].style.visibility = 'hidden';
    document.all[nr].style.display = 'none';

  } else if (document.getElementById(nr)) {
    document.getElementById(nr).style.visibility = 'hidden';
    document.getElementById(nr).style.display = 'none';
  }
}

function enviar() {
  //if(validaForm(document.formulario))
    document.formulario.submit();
}