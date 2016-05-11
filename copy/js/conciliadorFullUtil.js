	function checkedAllElements(grupoId) {
		for (i=0;i<document.forms[0].elements.length; i++ ){
			if ( document.forms[0].elements[i].type == "checkbox" && 
			     document.forms[0].elements[i].id == grupoId ) {
				
				document.forms[0].elements[i].checked = true;
			}
		}
	}
	
	function uncheckedAllElements(grupoId) {
		for (i=0;i<document.forms[0].elements.length; i++ ){
			if ( document.forms[0].elements[i].type == "checkbox" && 
			     document.forms[0].elements[i].id == grupoId ) {
				
				document.forms[0].elements[i].checked = false;
			}
		}
	}
	
	function checkedAllElementsDias(){
		for (i=0;i<document.forms[0].elements.length; i++ ){
			if ( document.forms[0].elements[i].type == "checkbox" && 
			     document.forms[0].elements[i].id == "dias" ) {
				
				document.forms[0].elements[i].checked = true;
			}
		}
	}
	
	function uncheckedAllElementsDias() {
		for (i=0;i<document.forms[0].elements.length; i++ ){
			if ( document.forms[0].elements[i].type == "checkbox" && 
			     document.forms[0].elements[i].id == "dias" ) {
				
				document.forms[0].elements[i].checked = false;
			}
		}
	}
	
		
	function desabilitarElements(grupoId, checkbox){
		if (checkbox.checked == true ) {
			for (i=0;i<document.forms[0].elements.length; i++ ){
				if ( document.forms[0].elements[i].type == "checkbox" && 
					 document.forms[0].elements[i].id == grupoId ) {
					
					document.forms[0].elements[i].disabled = true;
				}
			}
		}else{
			for (i=0;i<document.forms[0].elements.length; i++ ){
				if ( document.forms[0].elements[i].type == "checkbox" && 
					 document.forms[0].elements[i].id == grupoId ) {
					
					document.forms[0].elements[i].disabled = false;
				}
			}
		}
	}
	
	
	function habilitarElements(grupoId){
		for (i=0;i<document.forms[0].elements.length; i++ ){
			if ( document.forms[0].elements[i].type == "checkbox" && 
			     document.forms[0].elements[i].id == grupoId ) {
				 
				document.forms[0].elements[i].disabled = false;
			}
		}
	}
	
	function mudaDias(){
		mes = document.getElementById('mesBilhetagemId').options[document.getElementById('mesBilhetagemId').selectedIndex].value ;
		ano = document.getElementById('anoBilhetagemId').options[document.getElementById('anoBilhetagemId').selectedIndex].value ;
		openDias(mes, ano);
	}


	function gravar() {
		document.forms[0].action='agendarExtracao.do'	
		document.forms[0].submit();
	}


	function gotoFiltro(idTab){
		
		var aba1 = document.getElementById('td1');
		var aba2 = document.getElementById('td2');
		var aba3 = document.getElementById('td3');
		var aba4 = document.getElementById('td4');
		var aba5 = document.getElementById('td5');
		var aba6 = document.getElementById('td6');
		var aba7 = document.getElementById('td7');
		var aba8 = document.getElementById('td8');
		var aba9 = document.getElementById('td9');
		var aba10 = document.getElementById('td10');
		
		var div1 = document.getElementById('div1');
		var div2 = document.getElementById('div2');
		var div3 = document.getElementById('div3');
		var div4 = document.getElementById('div4');
		var div5 = document.getElementById('div5');
		var div6 = document.getElementById('div6');
		var div7 = document.getElementById('div7');
		var div8 = document.getElementById('div8');
		var div9 = document.getElementById('div9');
		var div10 = document.getElementById('div10');
		
		div1.style.display = 'none';
		div2.style.display = 'none';
		div3.style.display = 'none';
		div4.style.display = 'none';
		div5.style.display = 'none';
		div6.style.display = 'none';
		div7.style.display = 'none';
		div8.style.display = 'none';
		div9.style.display = 'none';
		div10.style.display = 'none';
		
		aba1.className = 'menu';
		aba2.className = 'menu';
		aba3.className = 'menu';
		aba4.className = 'menu';
		aba5.className = 'menu';
		aba6.className = 'menu';
		aba7.className = 'menu';
		aba8.className = 'menu';
		aba9.className = 'menu';
		aba10.className = 'menu';
		
		if ( idTab == 'td1' ){
			div1.style.display = 'block';
			aba1.className = 'menu-sel';
		}
		if ( idTab == 'td2' ){
			div2.style.display = 'block';
			aba2.className = 'menu-sel';
		}
		if ( idTab == 'td3' ){
			div3.style.display = 'block';
			aba3.className = 'menu-sel';
			
			var count = 0;
			var filial;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length;qtd++){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa2" ) {
						if ( document.forms[0].elements[qtd].checked == true){
							filial = document.forms[0].elements[qtd].value;
							count++;
						}
					}
				}
			}
			
			if ( count == 1 ){
				gridCentrais(filial);
				
				var centralTodos = document.getElementById('centralTodos');
				var centralNaoFiltrar = document.getElementById('centralNaoFiltrar');
				var centralNenhuma = document.getElementById('centralNenhuma');
				
				centralTodos.checked = false;
				centralNaoFiltrar.disabled = false;
				centralNenhuma.disabled = false;
			}
			
			if ( count > 1 ){
				cleanAddRows("tbodyGridCentrais");
				var centralTodos = document.getElementById('filialOrigemTodos');
				var centralNaoFiltrar = document.getElementById('filialOrigemNaoFiltrar');
				var centralNenhuma = document.getElementById('filailOrigemNenhuma');
				
				centralTodos.checked = true;
				centralNaoFiltrar.disabled = true;
				centralNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridCentrais");
				alert('Pelo menos uma HOLDING FONTE DA INFORMAÇÃO deve ser especificada.\nSelecione uma na Etapa 2');
			}
		
		}
		if ( idTab == 'td4' ){
			div4.style.display = 'block';
			aba4.className = 'menu-sel';
		}
		if ( idTab == 'td5' ){
			div5.style.display = 'block';
			aba5.className = 'menu-sel';
			
			var count = 0;
			var holdingOrigem;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length; qtd++ ){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa4" ) {
						if (document.forms[0].elements[qtd].checked == true){
							holdingOrigem = document.forms[0].elements[qtd].value;
							count++;
						}	
					}
				}
			}
			
			if ( count == 1 ){
				gridFiliaisOrigem(holdingOrigem);
				
				var filialOrigemTodos = document.getElementById('filialOrigemTodos');
				var filialOrigemNaoFiltrar = document.getElementById('filialOrigemNaoFiltrar');
				var filailOrigemNenhuma = document.getElementById('filailOrigemNenhuma');
				
				filialOrigemTodos.checked = false;
				filialOrigemNaoFiltrar.disabled = false;
				filailOrigemNenhuma.disabled = false;
				
			}
			
			if ( count > 1 ) {
				cleanAddRows("tbodyGridFiliaisOrigem");
				var filialOrigemTodos = document.getElementById('filialOrigemTodos');
				var filialOrigemNaoFiltrar = document.getElementById('filialOrigemNaoFiltrar');
				var filailOrigemNenhuma = document.getElementById('filailOrigemNenhuma');
				
				filialOrigemTodos.checked = true;
				filialOrigemNaoFiltrar.disabled = true;
				filailOrigemNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridFiliaisOrigem");
				alert('Pelo menos uma HOLDING ORIGEM deve ser especificada.\nSelecione uma na Etapa 5');
			}
		}
		if ( idTab == 'td6' ){
			div6.style.display = 'block';
			aba6.className = 'menu-sel';
		}
		
		
		if ( idTab == 'td7' ){
			div7.style.display = 'block';
			aba7.className = 'menu-sel';
			
			var count = 0;
			var holdingDestino;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length; qtd++ ){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa6" ) {
					    if (document.forms[0].elements[qtd].checked == true){
							holdingDestino = document.forms[0].elements[qtd].value;
							count++;
						}	
					}
				}
			}
			
			if ( count == 1 ){
				gridFiliaisDestino(holdingDestino);
				
				var filialDestinoTodos = document.getElementById('filialDestinoTodos');
				var filialDestinoNaoFiltrar = document.getElementById('filialDestinoNaoFiltrar');
				var filialDestinoNenhuma = document.getElementById('filialDestinoNenhuma');
				
				filialDestinoTodos.checked = false;
				filialDestinoNaoFiltrar.disabled = false;
				filialDestinoNenhuma.disabled = false;
			}
			
			if ( count > 1 ) {
				cleanAddRows("tbodyGridFiliaisDestino");
				var filialDestinoTodos = document.getElementById('filialDestinoTodos');
				var filialDestinoNaoFiltrar = document.getElementById('filialDestinoNaoFiltrar');
				var filialDestinoNenhuma = document.getElementById('filialDestinoNenhuma');
				
				filialDestinoTodos.checked = true;
				filialDestinoNaoFiltrar.disabled = true;
				filialDestinoNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridFiliaisDestino");
				alert('Pelo menos uma HOLDING DESTINO deve ser especificada.\nSelecione uma na Etapa 6');
			}
		}
		
		
		if ( idTab == 'td8' ){
			div8.style.display = 'block';
			aba8.className = 'menu-sel';
		}
		if ( idTab == 'td9' ){
			div9.style.display = 'block';
			aba9.className = 'menu-sel';
		}
		if ( idTab == 'td10' ){
			div10.style.display = 'block';
			aba10.className = 'menu-sel';
		}
	}
	function submeterEtapa(numeroAba){
		
		var aba1 = document.getElementById('td1');
		var aba2 = document.getElementById('td2');
		var aba3 = document.getElementById('td3');
		var aba4 = document.getElementById('td4');
		var aba5 = document.getElementById('td5');
		var aba6 = document.getElementById('td6');
		var aba7 = document.getElementById('td7');
		var aba8 = document.getElementById('td8');
		var aba9 = document.getElementById('td9');
		var aba10 = document.getElementById('td10');
		
		var div1 = document.getElementById('div1');
		var div2 = document.getElementById('div2');
		var div3 = document.getElementById('div3');
		var div4 = document.getElementById('div4');
		var div5 = document.getElementById('div5');
		var div6 = document.getElementById('div6');
		var div7 = document.getElementById('div7');
		var div8 = document.getElementById('div8');
		var div9 = document.getElementById('div9');
		var div10 = document.getElementById('div10');
		
		div1.style.display = 'none';
		div2.style.display = 'none';
		div3.style.display = 'none';
		div4.style.display = 'none';
		div5.style.display = 'none';
		div6.style.display = 'none';
		div7.style.display = 'none';
		div8.style.display = 'none';
		div9.style.display = 'none';
		div10.style.display = 'none';
		
		aba1.className = 'menu';
		aba2.className = 'menu';
		aba3.className = 'menu';
		aba4.className = 'menu';
		aba5.className = 'menu';
		aba6.className = 'menu';
		aba7.className = 'menu';
		aba8.className = 'menu';
		aba9.className = 'menu';
		aba10.className = 'menu';
		
		numeroAba.className = 'menu-sel';
		
		if(numeroAba.id == 'td1'){
			div1.style.display = 'block';
		}
		if(numeroAba.id == 'td2'){
			div2.style.display = 'block';
		}
		if(numeroAba.id == 'td3'){
			div3.style.display = 'block';
			 
			var count = 0;
			var filial;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length;qtd++){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa2" ){
						if ( document.forms[0].elements[qtd].checked == true){
							filial = document.forms[0].elements[qtd].value;
							count++;
						}
					}
				}
			}
			
			if ( count == 1 ){
				gridCentrais(filial);
				
				var centralTodos = document.getElementById('centralTodos');
				var centralNaoFiltrar = document.getElementById('centralNaoFiltrar');
				var centralNenhuma = document.getElementById('centralNenhuma');
				
				centralTodos.checked = false;
				centralNaoFiltrar.disabled = false;
				centralNenhuma.disabled = false;
			}
			
			if ( count > 1 ){
				cleanAddRows("tbodyGridCentrais");
				var centralTodos = document.getElementById('centralTodos');
				var centralNaoFiltrar = document.getElementById('centralNaoFiltrar');
				var centralNenhuma = document.getElementById('centralNenhuma');
				
				centralTodos.checked = true;
				centralNaoFiltrar.disabled = true;
				centralNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridCentrais");
				alert('Pelo menos uma HOLDING FONTE DA INFORMAÇÃO deve ser especificada.\nSelecione uma na Etapa 2');
			}
			
			//alert(count);
			//alert(filial);
			
			
		}
		
		if(numeroAba.id == 'td4'){
			div4.style.display = 'block';
		}
		
		if(numeroAba.id == 'td5'){
			div5.style.display = 'block';
			
			var count = 0;
			var holdingOrigem;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length; qtd++ ){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa4" ) {
						if (document.forms[0].elements[qtd].checked == true){
							holdingOrigem = document.forms[0].elements[qtd].value;
							count++;
						}	
					}
				}
			}
			
			if ( count == 1 ){
				gridFiliaisOrigem(holdingOrigem);
				
				var filialOrigemTodos = document.getElementById('filialOrigemTodos');
				var filialOrigemNaoFiltrar = document.getElementById('filialOrigemNaoFiltrar');
				var filailOrigemNenhuma = document.getElementById('filailOrigemNenhuma');
				
				filialOrigemTodos.checked = false;
				filialOrigemNaoFiltrar.disabled = false;
				filailOrigemNenhuma.disabled = false;
				
			}
			
			if ( count > 1 ) {
				cleanAddRows("tbodyGridFiliaisOrigem");
				var filialOrigemTodos = document.getElementById('filialOrigemTodos');
				var filialOrigemNaoFiltrar = document.getElementById('filialOrigemNaoFiltrar');
				var filailOrigemNenhuma = document.getElementById('filailOrigemNenhuma');
				
				filialOrigemTodos.checked = true;
				filialOrigemNaoFiltrar.disabled = true;
				filailOrigemNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridFiliaisOrigem");
				alert('Pelo menos uma HOLDING ORIGEM deve ser especificada.\nSelecione uma na Etapa 5');
			}
		}
		if(numeroAba.id == 'td6'){
			div6.style.display = 'block';
		}
		
		if(numeroAba.id == 'td7'){
			div7.style.display = 'block';
			
			var count = 0;
			var holdingDestino;
			var qtd = 0;
			
			for (qtd=0;qtd<document.forms[0].elements.length; qtd++ ){
				if ( document.forms[0].elements[qtd].type == "checkbox"){
					if ( document.forms[0].elements[qtd].id == "etapa6" ) {
					    if (document.forms[0].elements[qtd].checked == true){
							holdingDestino = document.forms[0].elements[qtd].value;
							count++;
						}	
					}
				}
			}
			
			if ( count == 1 ){
				gridFiliaisDestino(holdingDestino);
				
				var filialDestinoTodos = document.getElementById('filialDestinoTodos');
				var filialDestinoNaoFiltrar = document.getElementById('filialDestinoNaoFiltrar');
				var filialDestinoNenhuma = document.getElementById('filialDestinoNenhuma');
				
				filialDestinoTodos.checked = false;
				filialDestinoNaoFiltrar.disabled = false;
				filialDestinoNenhuma.disabled = false;
			}
			
			if ( count > 1 ) {
				cleanAddRows("tbodyGridFiliaisDestino");
				var filialDestinoTodos = document.getElementById('filialDestinoTodos');
				var filialDestinoNaoFiltrar = document.getElementById('filialDestinoNaoFiltrar');
				var filialDestinoNenhuma = document.getElementById('filialDestinoNenhuma');
				
				filialDestinoTodos.checked = true;
				filialDestinoNaoFiltrar.disabled = true;
				filialDestinoNenhuma.disabled = true;
			}
			
			if ( count == 0 ){
				cleanAddRows("tbodyGridFiliaisDestino");
				alert('Pelo menos uma HOLDING DESTINO deve ser especificada.\nSelecione uma na Etapa 6');
			}
		}
		
		if(numeroAba.id == 'td8'){
			div8.style.display = 'block';
		}
		if(numeroAba.id == 'td9'){
			div9.style.display = 'block';
		}
		if(numeroAba.id == 'td10' ){
			div10.style.display = 'block';
		}
	}
	
	function carregaDivsIniciais() {
		var aba1 = document.getElementById('td1');
		var aba2 = document.getElementById('td2');
		var aba3 = document.getElementById('td3');
		var aba4 = document.getElementById('td4');
		var aba5 = document.getElementById('td5');
		var aba6 = document.getElementById('td6');
		var aba7 = document.getElementById('td7');
		var aba8 = document.getElementById('td8');
		var aba9 = document.getElementById('td9');
		var aba10 = document.getElementById('td10');
	
		var div1 = document.getElementById('div1');
		var div2 = document.getElementById('div2');
		var div3 = document.getElementById('div3');
		var div4 = document.getElementById('div4');
		var div5 = document.getElementById('div5');
		var div6 = document.getElementById('div6');
		var div7 = document.getElementById('div7');
		var div8 = document.getElementById('div8');
		var div9 = document.getElementById('div9');
		var div10 = document.getElementById('div10');
		
		div2.style.display = 'none';
		div3.style.display = 'none';
		div4.style.display = 'none';
		div5.style.display = 'none';
		div6.style.display = 'none';
		div7.style.display = 'none';
		div8.style.display = 'none';
		div9.style.display = 'none';
		div10.style.display = 'none'; 
		
		aba2.className = 'menu';
		aba3.className = 'menu';
		aba4.className = 'menu';
		aba5.className = 'menu';
		aba6.className = 'menu';
		aba7.className = 'menu';
		aba8.className = 'menu';
		aba9.className = 'menu'; 
		aba10.className = 'menu';
	}