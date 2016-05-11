// Title: Tigra Calendar
// URL: http://www.softcomplex.com/products/tigra_calendar/
// Version: 3.2 (European date format)
// Date: 10/14/2002 (mm/dd/yyyy)
// Note: Permission given to use this script in ANY kind of applications if
//    header lines are left unchanged.
// Note: Script consists of two files: calendar?.js and calendar.html

// if two digit year input dates after this year considered 20 century.
var NUM_CENTYEAR = 30;
// is time input control required by default
var BUL_TIMECOMPONENT = false;
// are year scrolling buttons required by default
var BUL_YEARSCROLL = true;

var calendars = [];
var RE_NUM = /^\-?\d+$/;

function calendar1(obj_target) {

	// assigning methods
	this.gen_date = cal_gen_date1;
	this.gen_time = cal_gen_time1;
	this.gen_tsmp = cal_gen_tsmp1;
	this.prs_date = cal_prs_date1;
	this.prs_time = cal_prs_time1;
	this.prs_tsmp = cal_prs_tsmp1;
	this.popup    = cal_popup1;

	// validate input parameters
	if (!obj_target)
		return cal_error("Error calling the calendar: no target control specified");
	if (obj_target.value == null)
		return cal_error("Error calling the calendar: parameter specified is not valid target control");
	this.target = obj_target;
	this.time_comp = BUL_TIMECOMPONENT;
	this.year_scroll = BUL_YEARSCROLL;
	
	// register in global collections
	this.id = calendars.length;
	calendars[this.id] = this;
}

function cal_popup1 (str_datetime) {
	this.dt_current = this.prs_tsmp(str_datetime ? str_datetime : this.target.value);
	if (!this.dt_current) return;

	var obj_calwindow = window.open(
		'calendar.html?datetime=' + this.dt_current.valueOf()+ '&id=' + this.id,
		'Calendar', 'width=197,height='+(this.time_comp ? 215 : 175)+
		',status=no,resizable=no,top=270,left=575,dependent=yes,alwaysRaised=yes'
	);
	obj_calwindow.opener = window;
	obj_calwindow.focus();
}

// timestamp generating function
function cal_gen_tsmp1 (dt_datetime) {
	return(this.gen_date(dt_datetime) + ' ' + this.gen_time(dt_datetime));
}

// date generating function
function cal_gen_date1 (dt_datetime) {
	return (
		(dt_datetime.getDate() < 10 ? '0' : '') + dt_datetime.getDate() + "/"
		+ (dt_datetime.getMonth() < 9 ? '0' : '') + (dt_datetime.getMonth() + 1) + "/"
		+ dt_datetime.getFullYear()
	);
}
// time generating function
function cal_gen_time1 (dt_datetime) {
	return (
		(dt_datetime.getHours() < 10 ? '0' : '') + dt_datetime.getHours() + ":"
		+ (dt_datetime.getMinutes() < 10 ? '0' : '') + (dt_datetime.getMinutes()) + ":"
		+ (dt_datetime.getSeconds() < 10 ? '0' : '') + (dt_datetime.getSeconds())
	);
}

// timestamp parsing function
function cal_prs_tsmp1 (str_datetime) {
	// if no parameter specified return current timestamp
	if (!str_datetime)
		return (new Date());

	// if positive integer treat as milliseconds from epoch
	if (RE_NUM.exec(str_datetime))
		return new Date(str_datetime);
		
	// else treat as date in string format
	var arr_datetime = str_datetime.split(' ');
	return this.prs_time(arr_datetime[1], this.prs_date(arr_datetime[0]));
}

// date parsing function
function cal_prs_date1 (str_date) {
  
	var arr_date = str_date.split('/');

	if (arr_date.length != 3) return cal_error ("Formato da data é inválido: '" + str_date + "'.\nO formato aceito é dd/mm/aaaa.");
	if (!arr_date[0]) return cal_error ("Formato da data é inválido: '" + str_date + "'.\nO valor do dia não foi encontrado.");
	if (!RE_NUM.exec(arr_date[0])) return cal_error ("Valor para o dia do mês é inválido: '" + arr_date[0] + "'.\nOs valores permitidos são somente inteiros positivos.");
	if (!arr_date[1]) return cal_error ("Formato da data é inválido: '" + str_date + "'.\nO valor do mês não foi encontrado.");
	if (!RE_NUM.exec(arr_date[1])) return cal_error ("Valor para o mês é inválido: '" + arr_date[1] + "'.\nOs valores permitidos são somente inteiros positivos.");
	if (!arr_date[2]) return cal_error ("Formato da data é inválido: '" + str_date + "'.\nO valor do ano não foi encontrado.");
	if (!RE_NUM.exec(arr_date[2])) return cal_error ("Valor para o ano é inválido: '" + arr_date[2] + "'.\nOs valores permitidos são somente inteiros positivos.");

	var dt_date = new Date();
	dt_date.setDate(1);

	if (arr_date[1] < 1 || arr_date[1] > 12) return cal_error ("Valor para o mês é inválido: '" + arr_date[1] + "'.\nO valor do mês deve estar entre 01-12.");
	dt_date.setMonth(arr_date[1]-1);
	 
	if (arr_date[2] < 100) arr_date[2] = Number(arr_date[2]) + (arr_date[2] < NUM_CENTYEAR ? 2000 : 1900);
	dt_date.setFullYear(arr_date[2]);

	var dt_numdays = new Date(arr_date[2], arr_date[1], 0);
	dt_date.setDate(arr_date[0]);
	if (dt_date.getMonth() != (arr_date[1]-1)) return cal_error ("Valor para o dia do mês é inválido: '" + arr_date[0] + "'.\nO valor do dia do mês deve estar entre 01-"+dt_numdays.getDate()+".");

	return (dt_date)
}

// time parsing function
function cal_prs_time1 (str_time, dt_date) {

	if (!dt_date) return null;
	var arr_time = String(str_time ? str_time : '').split(':');

	if (!arr_time[0]) dt_date.setHours(0);
	else if (RE_NUM.exec(arr_time[0]))
		if (arr_time[0] < 24) dt_date.setHours(arr_time[0]);
		else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed range is 00-23.");
	else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed values are unsigned integers.");
	
	if (!arr_time[1]) dt_date.setMinutes(0);
	else if (RE_NUM.exec(arr_time[1]))
		if (arr_time[1] < 60) dt_date.setMinutes(arr_time[1]);
		else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed values are unsigned integers.");

	if (!arr_time[2]) dt_date.setSeconds(0);
	else if (RE_NUM.exec(arr_time[2]))
		if (arr_time[2] < 60) dt_date.setSeconds(arr_time[2]);
		else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed values are unsigned integers.");

	dt_date.setMilliseconds(0);
	return dt_date;
}

function cal_error (str_message) {
	alert (str_message);
	return null;
}


// Fun?ao utilizada para a fotmata?ao da Data no formato dd/mm/yyyy
// Fun?ao deve ser chamada no onblur dos campos
function formataData(campo, descricao){

  var valor = campo.value;
  var retorno = "";
  valor = replaceAll(valor,"/","");
  
  if(valor.length>0 && valor.length < 8){
      alert('Campo '+descricao+' inv?lido.');
      campo.focus();
      return;
  }else{
      for(var i=0; i<valor.length; i++){
          retorno = retorno+valor.charAt(i);
          if(i==1 || i==3 ){
              retorno = retorno+"/";
          }
      }
  }
  
  campo.value = retorno;
}
 
function mascara_datai(data){
	var mydata = '';
	mydata = mydata + data.value;
	if (mydata.length == 2){
		mydata = mydata + '/';
		data.value = mydata;
	}
	if (mydata.length == 5){
		mydata = mydata + '/';
		data.value = mydata;
	}

}

function validaFormatoData (str_date,campo) {
  if(str_date.length > 0) {
      var arr_date = str_date.split('/');
      if (arr_date.length != 3) {
        alert ("Formato da data é inválido: '" + str_date + "'.\nO formato aceito é dd/mm/aaaa.");
        campo.focus();
        return;
      }  
      if (!arr_date[0]) {
        alert("Formato da data é inválido: '" + str_date + "'.\nO valor do dia não foi encontrado.");
        campo.focus();
        return;
      }
      if (!RE_NUM.exec(arr_date[0])) {
        alert ("Valor para o dia do mês é inválido: '" + arr_date[0] + "'.\nOs valores permitidos são somente inteiros positivos.");
        campo.focus();
        return;
      }
      if (!arr_date[1]) {
        alert ("Formato da data é inválido: '" + str_date + "'.\nO valor do mês não foi encontrado.");
        campo.focus();
        return;
      }
      if (!RE_NUM.exec(arr_date[1])) {
        alert ("Valor para o mês é inválido: '" + arr_date[1] + "'.\nOs valores permitidos são somente inteiros positivos.");
        campo.focus();
        return;
      }
      if (!arr_date[2]) {
        alert ("Formato da data é inválido: '" + str_date + "'.\nO valor do ano não foi encontrado.");
        campo.focus();
        return;
      }
      if (!RE_NUM.exec(arr_date[2])) {
        alert ("Valor para o ano é inválido: '" + arr_date[2] + "'.\nOs valores permitidos são somente inteiros positivos.");
        campo.focus();
        return;
      }
    
      var dt_date = new Date();
      dt_date.setDate(1);
      if (arr_date[1] < 1 || arr_date[1] > 12) {
        alert ("Valor para o mês é inválido: '" + arr_date[1] + "'.\nO valor do mês deve estar entre 01-12.");
        dt_date.setMonth(arr_date[1]-1);
        campo.focus();
        return;
      } 
	} 
	
}


function replaceAll( str, from, to ) {
    var idx = str.indexOf( from );
    while ( idx > -1 ) {
        str = str.replace( from, to ); 
        idx = str.indexOf( from );
    }
    return str;
}


function somenteNumerosData(areaTexto, evento) { 
	    var key; 
	    var keychar;
	       if (window.event){ 
		 key = window.event.keyCode; 
		}
	          else if(evento){ 
			   key = evento.which; 
			}
		          else {
			     return true; 
			  }	
			//recebendo o caracter da tecla
			keychar = String.fromCharCode(key); 
			// control keys 
			if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){ 		    
		  		return true; 
			}
		       // verificando números 
		        else 
			  if ((("0123456789/").indexOf(keychar) > -1)){ 
			     return true;
			  } 
			     else 
		   		return false; 
	}


function somenteNumerosHora(areaTexto, evento) { 
	    var key; 
	    var keychar;
	       if (window.event){ 
		 key = window.event.keyCode; 
		}
	          else if(evento){ 
			   key = evento.which; 
			}
		          else {
			     return true; 
			  }	
			//recebendo o caracter da tecla
			keychar = String.fromCharCode(key); 
			// control keys 
			if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){ 		    
		  		return true; 
			}
		       // verificando números 
		        else 
			  if ((("0123456789:").indexOf(keychar) > -1)){ 
			     return true;
			  } 
			     else 
		   		return false; 
	}
  
  
  function MascaraHora(obj, evento){
  var hora;
  
  var key;
	var keychar;
	if (window.event){ 
		 key = window.event.keyCode; 
	}else if(evento){ 
		 key = evento.which; 
	}	    
  
      if      (obj.value.length == 2 && key != 8){obj.value = obj.value + ':';}
      else if ( obj.value.length > 5 && key != 8){
          hora = obj.value.substring(0,5);          
          obj.value = hora; 
      }
}


function somenteNumeros(areaTexto, evento) { 
	    var key; 
	    var keychar;
	       if (window.event){ 
		 key = window.event.keyCode; 
		}
	          else if(evento){ 
			   key = evento.which; 
			}
		          else {
			     return true; 
			  }	
			//recebendo o caracter da tecla
			keychar = String.fromCharCode(key); 
			// control keys 
			if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){ 		    
		  		return true; 
			}
		       // verificando números 
		        else 
			  if ((("0123456789").indexOf(keychar) > -1)){ 
			     return true;
			  } 
			     else 
		   		return false; 
	}
	
	
function formatarDataHora(evento, objeto){
	var keypress=(window.event)?event.keyCode:evento.which;
	campo = eval (objeto);
	if (campo.value == '00/00/0000 00:00:00')
	{
		campo.value=""
	}

	caracteres = '0123456789';
	separacao1 = '/';
	separacao2 = ' ';
	separacao3 = ':';
	conjunto1 = 2;
	conjunto2 = 5;
	conjunto3 = 10;
	conjunto4 = 13;
	conjunto5 = 16;
	if ((caracteres.search(String.fromCharCode (keypress))!=-1) && campo.value.length < (10))
	{
		if (campo.value.length == conjunto1 )
		campo.value = campo.value + separacao1;
		else if (campo.value.length == conjunto2)
		campo.value = campo.value + separacao1;
		else if (campo.value.length == conjunto3)
		campo.value = campo.value + separacao2;
		else if (campo.value.length == conjunto4)
		campo.value = campo.value + separacao3;
		else if (campo.value.length == conjunto5)
		campo.value = campo.value + separacao3;
	}
	else
		event.returnValue = false;
}


function FormataData(fld, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
		
   if (whichCode < 13) return true;
	
    if( fld.value.length >= 10 )
        return false;
      
    key = String.fromCharCode(whichCode);  // Valor para o c?digo da Chave
          
   	if (strCheck.indexOf(key) == -1)
    	return false;  // Chave inv?lida
		
   	len = fld.value.length;
    
   	aux = '';
      
	for(; i < len; i++)
    	if (strCheck.indexOf(fld.value.charAt(i))!=-1)
        	aux += fld.value.charAt(i);
        
	len = aux.length;
	
	if( len > 9 )
		aux = aux.substring(0,10) + ':' + aux.substring(10);
	
	if( len > 7 )
		aux = aux.substring(0,8) + ' ' + aux.substring(8);
	
	if( len > 3 )
		aux = aux.substring(0,4) + '/' + aux.substring(4);

	if( len > 1 )
		aux = aux.substring(0,2) + '/' + aux.substring(2);
   
   	aux += key;
	fld.value = aux;

   	return false;
}
