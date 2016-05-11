function limparFormulario(form, arrayNaoLimpar){
	if(arrayNaoLimpar==undefined){
		arrayNaoLimpar = [''];
	}
	var podeLimpar = true;
	for(var edu=0; edu<form.elements.length; edu++){
		podeLimpar = true;
		if(form.elements[edu].type=='select-one'){
			for(var i=0; i<arrayNaoLimpar.length; i++){
				if(arrayNaoLimpar[i]==form.elements[edu].name){
					podeLimpar = false;
					break;
				}
			}
			if(podeLimpar==true){form.elements[edu].selectedIndex = 0;}
		}
		if(form.elements[edu].type=='text'){
			for(var i=0; i<arrayNaoLimpar.length; i++){
				if(arrayNaoLimpar[i]==form.elements[edu].name){
					podeLimpar = false;
					break;
				}
			}
			if(podeLimpar==true){form.elements[edu].value = '';}
		}
	}
}

function deleteOptions(obj, option){
	for(var i=obj.length; i>=option; i--){
		obj.options[i] = null;
	}
}

function validaCampo(campo, tipo, label){
	for(var edu=0; edu<campo.length; edu++){
		if(tipo[edu]=='combo'){
			if(campo[edu].selectedIndex==0){
				alert('O campo '+label[edu]+' é obrigatório.');
				campo[edu].focus();
				return false;
			}
		}else if(tipo[edu]='text'){
			if(trim(campo[edu].value).length==0){
				alert('O campo '+label[edu]+' é obrigatório.');
				campo[edu].focus();
				return false;
			}
		}
	}
	return true;
}

function eDataValida(Str) {
    vlraux = trim(Str);
    if ((vlraux == "") || (vlraux.length != 10) ||
       (vlraux.charAt(2) != "/") || (vlraux.charAt(5)!= "/")){
       return false;
    }

    dia = parseInt(vlraux.substring(0,2),10);
    mes = parseInt(vlraux.substring(3,5),10);
    ano = parseInt(vlraux.substring(6,10),10);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano) || (mes < 1) || (mes > 12) || (dia < 1)) {
      return false;
    }

    tabmes = "312831303130313130313031";

    if ((dia == 29) && (mes == 2)){
      if ((ano == 0) || ((ano % 4) != 0)){
        return false;
      }
      else { return true; }
    }

    k = (mes * 2 - 2);

    if (dia > tabmes.substring(k,k + 2)) {
      return false;
    }
    else { return true;}

   return false;
}

function mascaraDinheiro(valor){
	mascara = '[###.]###,##';
	var mascara_utilizar;
	var mascara_limpa;
	var temp;
	var i;
	var j;
	var caracter;
	var separador;
	var dif;
	var validar;
	var mult;
	var ret;
	var tam;
	var tvalor;
	var valorm;
	var masct;
	tvalor = "";
	ret = "";
	caracter = "#";
	separador = "|";
	mascara_utilizar = "";
	valor = trim(valor);
	if (valor == "")return valor;
	temp = mascara.split(separador);
	dif = 1000;
	
	valorm = valor;
	//tirando mascara do valor já existente
	for (i=0;i<valor.length;i++){
		if (!isNaN(valor.substr(i,1))){
			tvalor = tvalor + valor.substr(i,1);
		}
	}
	valor = tvalor;

	//formatar mascara dinamica
	for (i = 0; i<temp.length;i++){
		mult = "";
		validar = 0;
		for (j=0;j<temp[i].length;j++){
			if (temp[i].substr(j,1) == "]"){
				temp[i] = temp[i].substr(j+1);
				break;
			}
			if (validar == 1)mult = mult + temp[i].substr(j,1);
			if (temp[i].substr(j,1) == "[")validar = 1;
		}
		for (j=0;j<valor.length;j++){
			temp[i] = mult + temp[i];
		}
	}
	
	//verificar qual mascara utilizar
	if (temp.length == 1){
		mascara_utilizar = temp[0];
		mascara_limpa = "";
		for (j=0;j<mascara_utilizar.length;j++){
			if (mascara_utilizar.substr(j,1) == caracter){
				mascara_limpa = mascara_limpa + caracter;
			}
		}
		tam = mascara_limpa.length;
	}else{
		//limpar caracteres diferente do caracter da máscara
		for (i=0;i<temp.length;i++){
			mascara_limpa = "";
			for (j=0;j<temp[i].length;j++){
				if (temp[i].substr(j,1) == caracter){
					mascara_limpa = mascara_limpa + caracter;
				}
			}
			
			if (valor.length > mascara_limpa.length){
				if (dif > (valor.length - mascara_limpa.length)){
					dif = valor.length - mascara_limpa.length;
					mascara_utilizar = temp[i];
					tam = mascara_limpa.length;
				}
			}else if (valor.length < mascara_limpa.length){
				if (dif > (mascara_limpa.length - valor.length)){
					dif = mascara_limpa.length - valor.length;
					mascara_utilizar = temp[i];
					tam = mascara_limpa.length;
				}
			}else{
				mascara_utilizar = temp[i];
				tam = mascara_limpa.length;
				break;
			}
		}
	}
	
	//validar tamanho da mascara de acordo com o tamanho do valor
	if (valor.length > tam){
		valor = valor.substr(0,tam);
	}else if (valor.length < tam){
		masct = "";
		j = valor.length;
		for (i = mascara_utilizar.length-1;i>=0;i--){
			if (j == 0) break;
			if (mascara_utilizar.substr(i,1) == caracter){
				j--;
			}
			masct = mascara_utilizar.substr(i,1) + masct;
		}
		mascara_utilizar = masct;
	}
	
	//mascarar
	j = mascara_utilizar.length -1;
	for (i = valor.length - 1;i>=0;i--){
		if (mascara_utilizar.substr(j,1) != caracter){
			ret = mascara_utilizar.substr(j,1) + ret;
			j--;
		}
		ret = valor.substr(i,1) + ret;
		j--;
	}

	return ret;
}

function bloqueia_nao_numerico() {
	if(event.keyCode==13){return;}
	if(event.keyCode < 48 || event.keyCode > 57){
		event.keyCode = 0;
		return false;
	}else{
		return true;
	}
}

function trim(Str) {
      inicio = 0;
      fim =  Str.length - 1;
	emBranco = true;

      for (i = 0; i < Str.length; i++) {
        if (Str.charAt(i) != " ") {
          inicio = i;
	    emBranco = false;
          break;
        }
      }

      for(j = fim; j > -1; j--){
        if (Str.charAt(j) != " ") {
          fim = j;
	    emBranco = false;
          break;
        }
      }

     if(emBranco)return "";

     if(inicio == 0 && 
	fim == (Str.length - 1) && 
	inicio != fim &&
	Str.substring(inicio, fim+1).length != Str.length){

  	return "";
     }

      return Str.substring(inicio, fim+1);
}