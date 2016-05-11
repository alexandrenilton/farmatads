/*
 * Função para validar os campos de um formulário
 */	

 function validarCampos(form, array){
 	var campo;
 	for(i=0; i < array.length; i++){
 		campo = form[array[i]];
 		if(campo.length > 1){
 			var control = 0;
 			var elemens = campo.length;
 			for(z=0;z<elemens;z++){
 				if(!campo[z].checked){
 					control ++;
 				}
 			}
 			if(control == elemens){
 				alert("O campo " + campo[0].title + " é obrigatório!");
 				return false;
 			}
 		} else if(campo.value == null || campo.value == ""){
 			alert("O campo " + campo.title + " é obrigatório!");
 			campo.focus();
 			return false;
 		}
 	}
 	return true;
 }
 
 
function formatarData(campo,teclapres) {
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
}

function formatarHora(campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.forms[0][campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( ":", "" );
	vr = vr.replace( ":", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.forms[0][campo].value = vr.substr( 0, tam - 2  ) + ':' + vr.substr( tam - 2, tam );
	}
}

function somenteNumero(e) {
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

function checkAll(obj){
	var elementos = document.forms[0].elements;
	for(i=0; i < elementos.length; i++){
		var elem = elementos[i];
		if(elem.type == "checkbox"){
			if(obj.checked)
				elem.checked = true;
			else 
				elem.checked = false;
		}
	}
}
