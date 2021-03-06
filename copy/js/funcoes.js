
function dynamicRowBkgOut(element)
{
   element.style.backgroundColor = white;
}
 
function dynamicRowBkgOver(element)
{
   oldBck = element.style.backgroundColor;
   element.style.backgroundColor = "#c0c0c0";
}


/*
 Padawan's JavaScript-Mega-Validator 3000+
 Todos os direitos reservados para Diego Pires Plentz
 Voc� pode usar esse c�digo nas suas p�ginas desde que mantenha os cr�ditos ;-)
 */
 
 //Verifica qual o browser do visitante e armazena na vari�vel p�bica clientNavigator,
 //Caso Internet Explorer(IE) outros (Other)
 if (navigator.appName.indexOf('Microsoft') != -1){
 	clientNavigator = "IE";
 }else{
 	clientNavigator = "Other";
 }
 
 function Verifica_Data(data, obrigatorio){
	
	var data = document.getElementById(data);
 	var strdata = data.value;
	
	//Verifica m�scara da data
 	if ("/" != strdata.substr(2,1) || "/" != strdata.substr(5,1)){
 			alert("Formato da data n�o � v�lido.  Formato correto:  - dd/mm/aaaa.");
 			data.focus();
 			return false
 		}
 		dia = strdata.substr(0,2)
 		mes = strdata.substr(3,2);
 		ano = strdata.substr(6,4);
 		//Verifica o dia
 		if (isNaN(dia) || dia > 31 || dia < 1){
 			alert("Formato do dia n�o � v�lido.");
 			data.focus();
 			return false
 		}
 		if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
 			if (dia == "31"){
 				alert("O m�s informado n�o possui 31 dias.");
 				data.focus();
 				return false
 			}
 		}
 		if (mes == "02"){
 			bissexto = ano % 4;
 			if (bissexto == 0){
 				if (dia > 29){
 					alert("O m�s informado possui somente 29 dias.");
 					data.focus();
 					return false
 				}
 			}else{
 				if (dia > 28){
 					alert("O m�s informado possui somente 28 dias.");
 					data.focus();
 					return false
 				}
 			}
 		}
 	  //Verifica o m�s
 		if (isNaN(mes) || mes > 12 || mes < 1){
 			alert("Formato do m�s n�o � v�lido.");
 			data.focus();
 			return false
 		}
 		//Verifica o ano
 		if (isNaN(ano)){
 			alert("Formato do ano n�o � v�lido.");
 			data.focus();
 			return false
 		}
 }
 
 function Compara_Datas(data_inicial, data_final){
 	//Verifica se a data inicial � maior que a data final
 	var data_inicial = document.getElementById(data_inicial);
 	var data_final   = document.getElementById(data_final);
 	str_data_inicial = data_inicial.value;
 	str_data_final   = data_final.value;
 	dia_inicial      = data_inicial.value.substr(0,2);
 	dia_final        = data_final.value.substr(0,2);
 	mes_inicial      = data_inicial.value.substr(3,2);
 	mes_final        = data_final.value.substr(3,2);
 	ano_inicial      = data_inicial.value.substr(6,4);
 	ano_final        = data_final.value.substr(6,4);
 	if(ano_inicial > ano_final){
 		alert("A data inicial deve ser menor que a data final."); 
 		data_inicial.focus();
 		return false
 	}else{
  	if(ano_inicial == ano_final){
   	if(mes_inicial > mes_final){
    	alert("A data inicial deve ser menor que a data final.");
 				data_final.focus();
 				return false
 			}else{
 				if(mes_inicial == mes_final){
 					if(dia_inicial > dia_final){
 						alert("A data inicial deve ser menor que a data final.");
 						data_final.focus();
 						return false
 					}
 				}
 			}
 		}
 	}
 }
 
 function Verifica_Hora(hora, obrigatorio){
 //Se o par�metro obrigat�rio for igual � zero, significa que elepode estar vazio, caso contr�rio, n�o
 	var hora = document.getElementById(hora);
 	if((obrigatorio == 1) || (obrigatorio == 0 && hora.value != "")){
 		if(hora.value.length < 5){
 			alert("Formato da hora inv�lido.  Por favor, informe a hora no formato correto: hh:mm");
 			hora.focus();
 			return false
 		}
 		if(hora.value.substr(0,2) > 23 || isNaN(hora.value.substr(0,2))){
 			alert("Formato da hora inv�lido.");
 			hora.focus();
 			return false
 		}
 		if(hora.value.substr(3,2) > 59 || isNaN(hora.value.substr(3,2))){
 			alert("Formato do minuto inv�lido.");
 			hora.focus();
 			return false
 		}
 	}
 }
 
 function Verifica_Email(email, obrigatorio){
 //Se o par�metro obrigat�rio for igual � zero, significa que elepode estar vazio, caso contr�rio, n�o
 	var email = document.getElementById(email);
 	if((obrigatorio == 1) || (obrigatorio == 0 && email.value != "")){
 		if(!email.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)/gi)){
 			alert("Informe um e-mail v�lido");
 			email.focus();
 			return false
 		}
 	}
 }
 
 function Verifica_Tamanho(campo, tamanho){
 //usado para campos textarea onde n�o se tem o atributo maxlenght
 	var campo = document.getElementById(campo);
 	if(campo.value.length > tamanho){
 		alert("O campo suporta no m�ximo " + tamanho + " caracteres.");
 		campo.focus();
 		return false
 	}
 }
 
 function Verifica_Cep(cep, obrigatorio){
 //Se o par�metro obrigat�rio for igual � zero, significa que elepode estar vazio, caso contr�rio, n�o
 	var cep    = document.getElementById(cep);
 	var strcep = cep.value;
 	if((obrigatorio == 1) || (obrigatorio == 0 && strcep != "")){
 		if (strcep.length != 9){
 			alert("CEP informado inv�lido.");
 			cep.focus();
 			return false
 		}else{
 			if (strcep.indexOf("-") != 5){
 				alert("Formato de CEP informado inv�lido.");
 				cep.focus();
 				return false
 			}else{
 				if (isNaN(strcep.replace("-","0"))){
 					alert("CEP informado inv�lido.");
 					cep.focus();
 					return false
 				}
 			}
 		}
 	}	  
 }
 
 function Bloqueia_Caracteres(evnt){
 //Fun��o permite digita��o de n�meros
 	if (clientNavigator == "IE"){
 		if (evnt.keyCode < 48 || evnt.keyCode > 57){
 			return false
 		}
 	}else{
 		if ((evnt.charCode < 48 || evnt.charCode > 57) && evnt.keyCode == 0){
 			return false
 		}
 	}
 }
 
 function Ajusta_Data(input, evnt){
 //Ajusta m�scara de Data e s� permite digita��o de n�meros
 	if (input.value.length == 2 || input.value.length == 5){
 		if(clientNavigator == "IE"){
 			input.value += "/";
 		}else{
 			if(evnt.keyCode == 0){
 				input.value += "/";
 			}
 		}
 	}
 //Chama a fun��o Bloqueia_Caracteres para s� permitir a digita��o de n�meros
 	return Bloqueia_Caracteres(evnt);
 }
 
 function Ajusta_Hora(input, evnt){
 //Ajusta m�scara de Hora e s� permite digita��o de n�meros
 	if (input.value.length == 2){
 		if(clientNavigator == "IE"){
 			input.value += ":";
 		}else{
 			if(evnt.keyCode == 0){
 				input.value += ":";
 			}
 		}
 	}
 //Chama a fun��o Bloqueia_Caracteres para s� permitir a digita��o de n�meros
 	return Bloqueia_Caracteres(evnt);
 }
 
 function Ajusta_Cep(input, evnt){
 //Ajusta m�scara de CEP e s� permite digita��o de n�meros
 	if (input.value.length == 5){
 		if(clientNavigator == "IE"){
 			input.value += "-";
 		}else{
 			if(evnt.keyCode == 0){
 				input.value += "-";
 			}
 		}
 	}
 //Chama a fun��o Bloqueia_Caracteres para s� permitir a digita��o de n�meros
 	return Bloqueia_Caracteres(evnt);
 }
 
 function Atualiza_Opener(){
 //Atualiza a p�gina opener da popup que chamar a fun��o
 	window.opener.location.reload();
 }
 
 
