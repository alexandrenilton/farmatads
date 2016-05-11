 function getTarget(e) {
  // IE5
   if (e.srcElement) {
    return e.srcElement;
   }
    if (e.target) {
    return e.target;
   }
 }

  function getKeyCode(e) {
 //IE5
 if (e.srcElement) {
  return e.keyCode
 }
  // NC5
  if (e.target) {
   return e.which
  }
 }

  function dateMask(event) {
    var sMask = "0123456789";
    var KeyTyped = String.fromCharCode(getKeyCode(event));
    // IE only version var KeyTyped = String.fromCharCode(window.event.keyCode);
    // ** IE only var srcObject = window.event.srcElement;
    var targ = getTarget(event);
    //alert(window.event.keyCode);
    keyCount = targ.value.length;
    keyCode = getKeyCode(event);
    if (keyCode < 15) /* del, backspace and other movement characters are okay */ {
       return true;
    } else if (sMask.indexOf(KeyTyped.toString()) == -1) {
       return false;
    }

    keyEntered = KeyTyped;
    keyCount++;
    switch (keyCount) {
    case 2:
      targ.value += keyEntered + "/";
      break;
    case 5:
      targ.value += keyEntered + "/";
      break;
    default:
      return true;
    }
    return false;
 }
 function cepMask(event) {
    var sMask = "0123456789";
    var KeyTyped = String.fromCharCode(getKeyCode(event));
    // IE only version var KeyTyped = String.fromCharCode(window.event.keyCode);
    // ** IE only var srcObject = window.event.srcElement;
    var targ = getTarget(event);
    //alert(window.event.keyCode);
    keyCount = targ.value.length;
    keyCode = getKeyCode(event);
    if (keyCode < 15) /* del, backspace and other movement characters are okay */ {
       return true;
    } else if (sMask.indexOf(KeyTyped.toString()) == -1) {
       return false;
    }

    keyEntered = KeyTyped;
    keyCount++;
    switch (keyCount) {
    case 2:
      targ.value += keyEntered + ".";
      break;
    case 6:
      targ.value += keyEntered + "-";
      break;
    default:
      return true;
    }
    return false;
 }

  function CurrencyFieldOnKeyPress(evt) {
		if (!NumericFieldOnKeyPress(evt))
		  return false;
    evt = (evt) ? evt : ((window.event) ? window.event : "")
    if (evt) {
        var elem = (evt.target) ? evt.target : evt.srcElement
        if (evt.type == "keypress") {
          FormataValor(elem, 13, evt);
        }
    }
  }

 function FormataValor(campo,tammax,teclapres) {
         var tecla = teclapres.keyCode;
         vr = campo.value;
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
                          campo.value = vr ; }
                  if ( (tam > 2) && (tam <= 5) ){
                          campo.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
                  if ( (tam >= 6) && (tam <= 8) ){
                          campo.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
                  if ( (tam >= 9) && (tam <= 11) ){
                          campo.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
                  if ( (tam >= 12) && (tam <= 14) ){
                          campo.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
                  if ( (tam >= 15) && (tam <= 17) ){
                          campo.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
         }

 }

 function NumericFieldOnKeyPress(evt) {
   evt = (evt) ? evt : ((window.event) ? window.event : "")
   if (evt) {
       var elem = (evt.target) ? evt.target : evt.srcElement
       if (evt.type == "keypress") {
         return e_Num(evt);
       }
   }
	 return true;
 }

 function e_Num(event){
     var sMask = "0123456789.,";
     var KeyTyped = String.fromCharCode(getKeyCode(event));
     // IE only version var KeyTyped = String.fromCharCode(window.event.keyCode);
     // ** IE only var srcObject = window.event.srcElement;
     var targ = getTarget(event);
     //alert(window.event.keyCode);
     keyCount = targ.value.length;
     keyCode = getKeyCode(event);
     if (keyCode < 15) /* del, backspace and other movement characters are okay */ {
        return true;
     } else if (sMask.indexOf(KeyTyped.toString()) == -1) {
        return false;
     }

     return true;
  }

 function e_Int(event){
     var sMask = "0123456789.";
     var KeyTyped = String.fromCharCode(getKeyCode(event));
     // IE only version var KeyTyped = String.fromCharCode(window.event.keyCode);
     // ** IE only var srcObject = window.event.srcElement;
     var targ = getTarget(event);
     //alert(window.event.keyCode);
     keyCount = targ.value.length;
     keyCode = getKeyCode(event);
     if (keyCode < 15) /* del, backspace and other movement characters are okay */ {
        return true;
     } else if (sMask.indexOf(KeyTyped.toString()) == -1) {
        return false;
     }
     return true;
  }

  function so_Num(event){
     var sMask = "0123456789";
     var KeyTyped = String.fromCharCode(getKeyCode(event));
     // IE only version var KeyTyped = String.fromCharCode(window.event.keyCode);
     // ** IE only var srcObject = window.event.srcElement;
     var targ = getTarget(event);
     //alert(window.event.keyCode);
     keyCount = targ.value.length;
     keyCode = getKeyCode(event);
     if (keyCode < 15) /* del, backspace and other movement characters are okay */ {
        return true;
     } else if (sMask.indexOf(KeyTyped.toString()) == -1) {
        return false;
     }

     return true;
  }

  function mascaraCep(evt) {
    var objeto = (evt.target) ? evt.target : evt.srcElement
    if (objeto.value.indexOf("-") == -1 && objeto.value.length > 5) {
      objeto.value = "";
    }
    if (objeto.value.length == 5){
      objeto.value += "-";
    }
  }
  
  
  
  function MascaraCPF (objeto) {
		formato='CPF';
		
		campo = eval (objeto);
		
		if (formato=='CPF'){
		  	caracteres = '01234567890';
		  	separacoes = 3;
		  	separacao1 = '.';
		  	separacao2 = '-';
		  	conjuntos = 4;
		  	conjunto1 = 3;
		  	conjunto2 = 7;
		  	conjunto3 = 11;
		  	conjunto4 = 14;
		  	if ((caracteres.search(String.fromCharCode (window.event.keyCode))!=-1) && campo.value.length < (conjunto4))
		  	{
		  		if (campo.value.length == conjunto1) 
		      		campo.value = campo.value + separacao1;
		  		else if (campo.value.length == conjunto2) 
		      		campo.value = campo.value + separacao1;
		  		else if (campo.value.length == conjunto3) 
		      		campo.value = campo.value + separacao2;
		  	}else 
		  		event.returnValue = false;
		}
	}
	
	
	/*Função Pai de Mascaras*/
	function mascara(o,f){
	    v_obj=o;v_fun=f;
	    setTimeout("execmascara()",1);
	}
	function execmascara(){v_obj.value=v_fun(v_obj.value);}

	//onkeyup="mascara(this,sonumero);"
	function sonumero(valor){return valor.replace(/\D/g,"");}

	//onkeyup="mascara(this,data);"
	function data(valor){
		valor=valor.replace(/\D/g,"");
		valor=valor.replace(/(\d{2})(\d)/,"$1/$2");
		valor=valor.replace(/(\d{2})(\d)/,"$1/$2");
	    return valor;
	}
	//onkeyup="mascara(this,hora);"
	function hora(valor){
		valor=valor.replace(/\D/g,"");
		valor=valor.replace(/(\d{2})(\d)/,"$1:$2");
		valor=valor.replace(/(\d{2})(\d)/,"$1:$2");
		valor=valor.replace(/(\d{2})(\d)/,"$1:$2");
	    return valor;
	}
	//onkeyup="mascara(this,cpf);"
	function cpf(valor){
		valor=valor.replace(/\D/g,"");
		valor=valor.replace(/(\d{3})(\d)/,"$1.$2");
		valor=valor.replace(/(\d{3})(\d)/,"$1.$2");
		valor=valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
	    return valor;
	}

	//onkeyup="mascara(this,cnpj);"
	function cnpj(valor){
		valor=valor.replace(/\D/g,"");
		valor=valor.replace(/^(\d{2})(\d)/,"$1.$2");
		valor=valor.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
		valor=valor.replace(/\.(\d{3})(\d)/,".$1/$2");
		valor=valor.replace(/(\d{4})(\d)/,"$1-$2");
	    return valor;
	}

	function MascaraFone(objeto){ 
		   if(objeto.value.length == 0)
		     objeto.value = '(' + objeto.value;

		   if(objeto.value.length == 3)
		      objeto.value = objeto.value + ')';

		 if(objeto.value.length == 8)
		     objeto.value = objeto.value + '-';
		}

	//Funcao: MascaraMoeda
	//Sinopse: Mascara de preenchimento de moeda
	//Parametro:
	//   objTextBox : Objeto (TextBox)
	//   SeparadorMilesimo : Caracter separador de mil??simos
	//   SeparadorDecimal : Caracter separador de decimais
	//   e : Evento
	//Retorno: Booleano
	//Data Cria????o: 15/02/2005
	//Ex.:Valor R$: <input type="text" name="valor"  onKeyPress="return(MascaraMoeda(this,'.',',',event))">
	//-----------------------------------------------------
	function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){
		
	    var sep = 0;
	    var key = '';
	    var i = j = 0;
	    var len = len2 = 0;
	    var strCheck = '0123456789';
	    var aux = aux2 = '';
	    //var whichCode = (window.Event) ? e.which : e.keyCode;
	   	var xe = new qEvent(e);
		var whichCode = xe.keyCode;
		if(window.navigator.appName == 'Netscape'){
		    //whichCode = e.which;    
			var xe = new qEvent(e);
			whichCode = xe.keyCode;
		}else{
			whichCode = e.keyCode;
		}
	    if (whichCode == 13 || whichCode == 8 || whichCode == 0) return true;
	    key = String.fromCharCode(whichCode); // Valor para o c??digo da Chave
	    if (strCheck.indexOf(key) == -1) return false; // Chave inv??lida
	    len = objTextBox.value.length;
	    if (len == objTextBox.maxLength + 1) return false; //Ajuste para atender a uma m??scara do tipo 99,99

	    for(i = 0; i < len; i++)
	        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
	    aux = '';
	    for(; i < len; i++)
	        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
	    aux += key;
	    len = aux.length;
	    if (len == 0) objTextBox.value = '';
	    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
	    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;
	    if (len > 2) {
	        aux2 = '';
	        for (j = 0, i = len - 3; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }
	        objTextBox.value = '';
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--)
	        objTextBox.value += aux2.charAt(i);
	        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
	    }
	    return false;
	}

	//Funcao: MascaraNumerica
	//Sinopse: Mascara de preenchimento de numero com separador de milhar (.) e separador de decimais (,)
	//Parametro:
	//   objTextBox : Objeto (TextBox)
	//   SeparadorMilesimo : Caracter separador de mil??simos
	//   SeparadorDecimal : Caracter separador de decimais
	//   e : Evento
	//Retorno: Booleano
	//Data Cria????o: 16/04/2007
	//Ex.:Valor R$: <input type="text" name="valor"  onKeyPress="return(MascaraNumerica(this,'.',',',event))">
	//-----------------------------------------------------
	function MascaraNumerica(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){
		
	    var sep = 0;
	    var key = '';
	    var i = j = 0;
	    var len = len2 = posDecimal = 0;
	    var strCheck = '0123456789';
	    var aux = aux2 = sinal = '';
	    //var whichCode = (window.Event) ? e.which : e.keyCode;
		//var xe = new qEvent(e);
		//var whichCode = xe.keyCode;
		var whichCode = '';
	    if(window.navigator.appName == 'Netscape'){
		    whichCode = e.which;    
			var xe = new qEvent(e);
			whichCode = xe.keyCode;
		}else{
			whichCode = e.keyCode;
		}
		
	    var encontrouDecimal = false;
	    var encontrouSinal = false;
	    //if (whichCode == 13) return true;
	    if (whichCode == 13 || whichCode == 8 || whichCode == 0) return true;
	    key = String.fromCharCode(whichCode); // Valor para o c??digo da Chave
	    if ((strCheck.indexOf(key) == -1) && (key != SeparadorDecimal) && (key != '-')) return false; // Chave inv??lida
	    len = objTextBox.value.length;
	    if (len == objTextBox.maxLength + 1) return false; //Ajuste para atender a uma m??scara do tipo 99,99
	    aux = '';
	    for(i=0; i < len; i++) {
	        if ((strCheck.indexOf(objTextBox.value.charAt(i))!=-1) || 
	            ((objTextBox.value.charAt(i)==SeparadorDecimal) && (!encontrouDecimal)))
	            aux += objTextBox.value.charAt(i);
	        if (objTextBox.value.charAt(i)=='-') {
	        	sinal = '-';
	        	encontrouSinal = true;
	       	}
	        if (objTextBox.value.charAt(i)==SeparadorDecimal) encontrouDecimal = true;
	    }

	    if (key == SeparadorDecimal && encontrouDecimal) key = '';
	    if (key == '-' && encontrouSinal) key = '';

	    len = aux.length;
	    aux2 = '';
	    for (i=0; i < len; i++) {
	        if (aux.charAt(i) != '0') break;
	    }
	    for (; i < len; i++) {
	        aux2 += aux.charAt(i);
	    }
	    aux = aux2;

	    aux += key;
	    len = aux.length;
	    if (len == 0) objTextBox.value = '';

	    posDecimal = aux.indexOf(SeparadorDecimal);

	    if (posDecimal == -1) {
	        aux2 = '';
	        for (j = 0, i = len-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--)
	        objTextBox.value += aux2.charAt(i);
	    } else {
	        aux2 = '';
	        for (j = 0, i = posDecimal-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--)
	        objTextBox.value += aux2.charAt(i);
	        objTextBox.value += SeparadorDecimal + aux.substr(posDecimal+1);
	    }


	    return false;
	}

	//Funcao: MascaraNumerica
	//Sinopse: Mascara de preenchimento de numero com separador de milhar (.) e separador de decimais (,)
//			   que limita o n?mero de decimais
	//Parametro:
	//   objTextBox : Objeto (TextBox)
	//   SeparadorMilesimo : Caracter separador de mil??simos
	//   SeparadorDecimal : Caracter separador de decimais
//		 maximoDecimais : N?mero m?ximo de separadores decimais
//		 flagPositivo : Se true s? aceita n?meros positivos
	//   e : Evento
	//Retorno: Booleano
	//Data Cria????o: 24/10/2007
	//Ex.:Valor R$: <input type="text" name="valor"  onKeyPress="return(MascaraNumerica(this,'.',',',5,true,event))">
	//-----------------------------------------------------
	function MascaraNumericaLimitada(objTextBox, SeparadorMilesimo, SeparadorDecimal, maximoDecimais, flagPositivo, e){
		
	    var sep = 0;
	    var key = '';
	    var i = j = 0;
	    var len = len2 = posDecimal = 0;
	    var strCheck = '0123456789';
	    var aux = aux2 = sinal = '';
	    var whichCode = '';

	    if(window.navigator.appName == 'Netscape'){
	        whichCode = e.which;    
			var xe = new qEvent(e);
			whichCode = xe.keyCode;
		}else{
			whichCode = e.keyCode;
		}
	   
	    var encontrouDecimal = false;
	    var encontrouSinal = false;

	    //if (whichCode == 13) return true;
	    if (whichCode == 13 || whichCode == 8 || whichCode == 0) return true;
	    key = String.fromCharCode(whichCode); // Valor para o c??digo da Chave
	    // Caso n?o seja um d?gito v?lido retorna
	    if (flagPositivo) {
	    	if ((strCheck.indexOf(key) == -1) && (key != SeparadorDecimal)) return false;
	    } else {
		    if ((strCheck.indexOf(key) == -1) && (key != SeparadorDecimal) && (key != '-')) return false;
	    }
	    len = objTextBox.value.length;
	    if (len == objTextBox.maxLength + 1) return false; //Ajuste para atender a uma m??scara do tipo 99,99

	    aux = '';
	    for(i=0; i < len; i++) {
	        if ((strCheck.indexOf(objTextBox.value.charAt(i))!=-1) || 
	            ((objTextBox.value.charAt(i)==SeparadorDecimal) && (!encontrouDecimal)))
	            aux += objTextBox.value.charAt(i);
	        if (objTextBox.value.charAt(i)=='-') {
	        	sinal = '-';
	        	encontrouSinal = true;
	       	}
	        if (objTextBox.value.charAt(i)==SeparadorDecimal) encontrouDecimal = true;
	    }

	    if (key == SeparadorDecimal && encontrouDecimal) key = '';
	    if (key == '-' && encontrouSinal) key = '';

	    len = aux.length;
	    aux2 = '';
	    for (i=0; i < len; i++) {
	        if (aux.charAt(i) != '0') break;
	    }
	    for (; i < len; i++) {
	        aux2 += aux.charAt(i);
	    }
	    aux = aux2;

	    aux += key;
	    len = aux.length;
	    if (len == 0) objTextBox.value = '';

	    posDecimal = aux.indexOf(SeparadorDecimal);

	    if (posDecimal == -1) {
	        aux2 = '';
	        //limite de numerais é de 35 no banco de dados (sem a máscara)
	        if (aux.length>35) {
	        	aux = aux.substr(0, 35);
	        }
	        for (j = 0, i = len-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--)
	        objTextBox.value += aux2.charAt(i);
	    } else {
	        aux2 = '';
	        for (j = 0, i = posDecimal-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--) {
	        	objTextBox.value += aux2.charAt(i);
	        }
	        objTextBox.value += SeparadorDecimal + aux.substr(posDecimal+1,maximoDecimais);
	    }
			var coll = document.getElementsByTagName(objTextBox.tagName);
			for(i = 0; i < coll.length; i++){
			   if(coll[i].name == objTextBox.name){
			   		if( window.navigator.appName == 'Netscape' ){ 

					}else{
						var count = coll[i].createTextRange();
			   			count.collapse(false);
			   			count.select();
					}
			   	}
			}
	    return false;
	}

	//
	// Versao de MascaraNumericaLimitada para tratar o caso da tecla Backspace.
	// Uso:
//		<input type="text" id="vlrUnitario" name="vlrUnitario"
//			maxlength="15" size="20" 
//			onKeyPress="return(MascaraNumericaLimitada(this,'.',',','6',true,event));"
//	      onKeyUp="return(MascaraNumericaLimitadaBackspace(this,'.',',','6',true,event));"
//			value="" />	
	//
	function MascaraNumericaLimitadaBackspace(objTextBox, SeparadorMilesimo, SeparadorDecimal, maximoDecimais, flagPositivo, e){
	    var sep = 0;
	    var key = '';
	    var i = j = 0;
	    var len = len2 = posDecimal = 0;
	    var strCheck = '0123456789';
	    var aux = aux2 = sinal = '';
	    var whichCode = '';

	    if(window.navigator.appName == 'Netscape'){
		    whichCode = e.which;    
			var xe = new qEvent(e);
			whichCode = xe.keyCode;
		}else{
			whichCode = e.keyCode;
		}

	    var encontrouDecimal = false;
	    var encontrouSinal = false;
	    
		if (whichCode == 8) {
		    for(i=0; i < len; i++) {
		        if ((strCheck.indexOf(objTextBox.value.charAt(i))!=-1) || 
		            ((objTextBox.value.charAt(i)==SeparadorDecimal) && (!encontrouDecimal)))
		            aux += objTextBox.value.charAt(i);
		        if (objTextBox.value.charAt(i)=='-') {
		        	sinal = '-';
		        	encontrouSinal = true;
		       	}
		        if (objTextBox.value.charAt(i)==SeparadorDecimal) encontrouDecimal = true;
		    }	
		    key = '';
		    len = objTextBox.value.length;
		    if (len == objTextBox.maxLength + 1) return false; //Ajuste para atender a uma m??scara do tipo 99,99
		
		    aux = '';
		    for(i=0; i < len; i++) {
		        if ((strCheck.indexOf(objTextBox.value.charAt(i))!=-1) || 
		            ((objTextBox.value.charAt(i)==SeparadorDecimal) && (!encontrouDecimal)))
		            aux += objTextBox.value.charAt(i);
		        if (objTextBox.value.charAt(i)=='-') {
		        	sinal = '-';
		        	encontrouSinal = true;
		       	}
		        if (objTextBox.value.charAt(i)==SeparadorDecimal) encontrouDecimal = true;
		    }
		
		    len = aux.length;
		    aux2 = '';
		    for (i=0; i < len; i++) {
		        if (aux.charAt(i) != '0') break;
		    }
		    for (; i < len; i++) {
		        aux2 += aux.charAt(i);
		    }
		    aux = aux2;
		
		    aux += key;
		    len = aux.length;
		    if (len == 0) objTextBox.value = '';
		
		    posDecimal = aux.indexOf(SeparadorDecimal);
		
		    if (posDecimal == -1) {
		        aux2 = '';
		        for (j = 0, i = len-1; i >= 0; i--) {
		            if (j == 3) {
		                aux2 += SeparadorMilesimo;
		                j = 0;
		            }
		            aux2 += aux.charAt(i);
		            j++;
		        }
		
		        //if (aux2 == '') aux2 = '0';
		
		        objTextBox.value = sinal;
		        len2 = aux2.length;
		        for (i = len2 - 1; i >= 0; i--)
		        objTextBox.value += aux2.charAt(i);
		    } else {
		        aux2 = '';
		        for (j = 0, i = posDecimal-1; i >= 0; i--) {
		            if (j == 3) {
		                aux2 += SeparadorMilesimo;
		                j = 0;
		            }
		            aux2 += aux.charAt(i);
		            j++;
		        }
		
		        if (aux2 == '') aux2 = '0';
		
		        objTextBox.value = sinal;
		        len2 = aux2.length;
		        for (i = len2 - 1; i >= 0; i--) {
		        	objTextBox.value += aux2.charAt(i);
		        }
		        objTextBox.value += SeparadorDecimal + aux.substr(posDecimal+1,maximoDecimais);
		    }
				var coll = document.getElementsByTagName(objTextBox.tagName);
				for(i = 0; i < coll.length; i++){
				   if(coll[i].name == objTextBox.name){
				   		if( window.navigator.appName == 'Netscape' ){ 
		
						}else{
							var count = coll[i].createTextRange();
				   			count.collapse(false);
				   			count.select();
						}
				   	}
				}
		    return false;
		  }
	}

	function MascaraNumericaLimitadaMilharEDicimal(objTextBox, SeparadorMilesimo, SeparadorDecimal, maximoDecimais, flagPositivo, e){
		
		var sep = 0;
	    var key = '';
	    var i = j = 0;
	    var len = len2 = posDecimal = 0;
	    var strCheck = '0123456789';
	    var aux = aux2 = sinal = '';
	    var whichCode = '';

	    if(window.navigator.appName == 'Netscape'){
	        whichCode = e.which;    
			var xe = new qEvent(e);
			whichCode = xe.keyCode;
		}else{
			whichCode = e.keyCode;
		}
	   
	    var encontrouDecimal = false;
	    var encontrouSinal = false;

	    //if (whichCode == 13) return true;
	    if (whichCode == 13 || whichCode == 8 || whichCode == 0) return true;
	    key = String.fromCharCode(whichCode); // Valor para o c??digo da Chave
	    // Caso n?o seja um d?gito v?lido retorna
	    if (flagPositivo) {
	    	if ((strCheck.indexOf(key) == -1) && (key != SeparadorDecimal)) return false;
	    } else {
		    if ((strCheck.indexOf(key) == -1) && (key != SeparadorDecimal) && (key != '-')) return false;
	    }
	    
	    
	    len = objTextBox.value.length;
	    if (len == objTextBox.maxLength + 1) return false; //Ajuste para atender a uma m??scara do tipo 99,99

	    aux = '';
	    for(i=0; i < len; i++) {
	        if ((strCheck.indexOf(objTextBox.value.charAt(i))!=-1) || 
	            ((objTextBox.value.charAt(i)==SeparadorDecimal) && (!encontrouDecimal)))
	            aux += objTextBox.value.charAt(i);
	        if (objTextBox.value.charAt(i)=='-') {
	        	sinal = '-';
	        	encontrouSinal = true;
	       	}
	        if (objTextBox.value.charAt(i)==SeparadorDecimal) encontrouDecimal = true;
	    }

	    if (key == SeparadorDecimal && encontrouDecimal) key = '';
	    if (key == '-' && encontrouSinal) key = '';
	    
	    len = aux.length;
	    aux2 = '';
	    for (i=0; i < len; i++) {
	        if (aux.charAt(i) != '0') break;
	    }
	    for (; i < len; i++) {
	        aux2 += aux.charAt(i);
	    }
	    aux = aux2;

	    aux += key;
	    len = aux.length;
	    if (len == 0) objTextBox.value = '';

	    posDecimal = aux.indexOf(SeparadorDecimal);

	    if (posDecimal == -1) {
	    	//limite de numerais é de 35 no banco de dados (sem a máscara)
	        if (aux.length>35) {
	        	aux = aux.substr(0, 35);
	        }
	        aux2 = '';
	        for (j = 0, i = len-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--)
	        objTextBox.value += aux2.charAt(i);
	        
	    } else {
	        aux2 = '';
	        for (j = 0, i = posDecimal-1; i >= 0; i--) {
	            if (j == 3) {
	                aux2 += SeparadorMilesimo;
	                j = 0;
	            }
	            aux2 += aux.charAt(i);
	            j++;
	        }

	        if (aux2 == '') aux2 = '0';

	        objTextBox.value = sinal;
	        len2 = aux2.length;
	        for (i = len2 - 1; i >= 0; i--) {
	        	objTextBox.value += aux2.charAt(i);
	        }
	        objTextBox.value += SeparadorDecimal + aux.substr(posDecimal+1,maximoDecimais);
	    }
			var coll = document.getElementsByTagName(objTextBox.tagName);
			for(i = 0; i < coll.length; i++){
			   if(coll[i].name == objTextBox.name){
			   		if( window.navigator.appName == 'Netscape' ){ 

					}else{
						var count = coll[i].createTextRange();
			   			count.collapse(false);
			   			count.select();
					}
			   	}
			}
	    return false;
	    
	}

		/**
		* Funcao que recebe uma string com formato de numero.
		* Ex.: 1289,4586
		* E retorna o valor formatado como moeda e TRUNCADO na segunda
		* casa decimal.
		* Resultado : 1.289,45
		**/
		function string2Moeda(valor){
			var valorFormatado = "";
			var array = valor.split(".");
			var parteInteira = array[0];
			var qtdParteInteira = (array[0]).length;
			var separadorMilhar = 1;
			var cloneTam = parteInteira;
			for(i = 0 ; i < qtdParteInteira ; qtdParteInteira--){
				valorFormatado = cloneTam.substring(cloneTam.length - 1) + "" + valorFormatado;
				cloneTam = cloneTam.substring(0, cloneTam.length - 1);
				if(separadorMilhar == 3 && cloneTam.length > 0){
					valorFormatado = "." + valorFormatado;
					separadorMilhar = 0;
					
				}
				separadorMilhar++;
			}
			var centavos = "";
			if(array.length > 1 ){
				if((array[1]).length < 2){
					return valorFormatado+= "," + array[1]+"0";
				}else {
					centavos = (array[1]).substring(0,2);
					valorFormatado+="," +centavos;
					return valorFormatado;			
				}
			}else {
				if(array.length == 1 ){
					valorFormatado+=",00";
					return valorFormatado;
				}else{
					return "0,00";
				}
			}
		}
	   /**
	   * Mascara Monetaria
	   * Digitacao da esquerda
	   * autor: internet
	   */
	   function mascaraDinheiro(cur,len){
	      n='__0123456789';
	      d=cur.value;
	      l=d.length;
	      r='';
	      if (l > 0){
	       z=d.substr(0,l-1);
	       s='';
	       a=2;
	       for (i=0; i < l; i++){
	           c=d.charAt(i);
	           if (n.indexOf(c) > a){
	               a=1;
	               s+=c;
	           };
	       };
	       l=s.length;
	       t=len-1;
	       if (l > t){
	           l=t;
	           s=s.substr(0,t);
	       };
	       if (l > 2){
	           r=s.substr(0,l-2)+','+s.substr(l-2,2);
	       }else{
	           if (l == 2){
	               r='0,'+s;
	           }else{
	               if (l == 1){
	                   r='0,0'+s;
	               };
	           };
	       };
	       if (r == ''){
	           r='0,00';
	       }else{
	           l=r.length;
	           if (l > 6){
	               j=l%3;
	               w=r.substr(0,j);
	               wa=r.substr(j,l-j-6);
	               wb=r.substr(l-6,6);
	               if (j > 0){
	                   w+='.';
	               };
	               k=(l-j)/3-2;
	               for (i=0; i < k; i++){
	                   w+=wa.substr(i*3,3)+'.';
	               };
	               r=w+wb;
	           };
	       };
	      };
	      if (r.length <= len){
	         cur.value=r;
	      }else{
	       cur.value=z;
	      };
	      return 'ok';
	   };
	   
	   function mascaraDinheiro3casas(cur,len){
		      n='__0123456789';
		      d=cur.value;
		      l=d.length;
		      r='';
		      if (l > 0){
		       z=d.substr(0,l-1);
		       s='';
		       a=2;
		       for (i=0; i < l; i++){
		           c=d.charAt(i);
		           if (n.indexOf(c) > a){
		               a=1;
		               s+=c;
		           };
		       };
		       l=s.length;
		       t=len-1;
		       if (l > t){
		           l=t;
		           s=s.substr(0,t);
		       };
		       if (l > 3){
		           r=s.substr(0,l-3)+','+s.substr(l-3,3);
		       }else{
		           if (l == 2){
		               r='0,0'+s;
		           }else{
		               if (l == 1){
		                   r='0,00'+s;
		               } else if (l == 3) {
		            	   r='0,'+s;
		               }
		           };
		       };
		       if (r == ''){
		           r='0,000';
		       }else{
		           l=r.length;
		           if (l > 7){
		               j=l%3;
		               w=r.substr(0,j);
		               wa=r.substr(j,l-j-6);
		               wb=r.substr(l-6,6);
		               if (j > 0){
		                   w+='.';
		               };
		               k=(l-j)/3-2;
		               for (i=0; i < k; i++){
		                   w+=wa.substr(i*3,3)+'.';
		               };
		               r=w+wb;
		           };
		       };
		      };
		      if (r.length <= len){
		         cur.value=r;
		      }else{
		       cur.value=z;
		      };
		      return 'ok';
		   };
	   
