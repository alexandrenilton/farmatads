


function openDias(ano, mes){
	//DWRUtil.useLoadingImage("/sgta/public/img/bigrotation2.gif");
	DWRUtil.useLoadingMessage("Carregando dias");
	FacadeAjax.getQuantidadeDias(ano, mes, renderDias );
}

/**
 * Render do combo empresas
 *
 */
function renderDias(qtdDias){
	divSaida = document.getElementById('divDias');
	
	DWRUtil.useLoadingMessage("Carregando dias...");
	
	mes = document.getElementById('mesBilhetagemId').options[document.getElementById('mesBilhetagemId').selectedIndex].value ;
	ano = document.getElementById('anoBilhetagemId').options[document.getElementById('anoBilhetagemId').selectedIndex].value ;
	
	//alert(qtdDias);
	
	output = "<table id='tableDias' align='center'>" ;
	output+=" <tr nowrap class='labelForm'> " ;
	output+=" <td width='80px' align='left'> ";
	output+=" <input class='objFormText' onclick='javascript:checkedAllElementsDias();' type='radio' name='todos' title='Selecionar todos' checked/>Todas<br>";
	output+=" <input class='objFormText' onclick='javascript:uncheckedAllElementsDias();' type='radio' name='todos' title='Desmarcar' />Nenhuma" ;
	output+=" </td> ";
	output+=" <td colspan='2'>Selecionar dias ("+mes+"/"+ano+"): </td> "; 
	output+="</tr> "; 	
		
		for (i=1;i<=qtdDias;i++){
			if ( i%2 == 0 ) {
				output+="<tr bgcolor='#EFEFEF'> "; 
			}else{
				output+="<tr bgcolor='#F9F9F9'> ";
			}
			output+="<td> "; 
			output+="<input type='checkbox' value='"+i+"' name='dias' id='dias' CHECKED /> ";
			
			//output+="<html:checkbox name='extracaoForm' property='extracao.dias' value='"+i+"'/>"
			
			output+="</td> ";
			output+="<td>"+i+"</td> ";
			output+="</tr> ";
		}
		
	output += "</table>";
	
	//alert(output);
	divSaida.innerHTML = output;
	
	//DWRUtil.removeAllOptions("div1dias");
	//DWRUtil.addOptions("div1dias", qtdDias);
}


// Para as tabelas (grids) de filiais origem e filiais destino

function cleanAddRows(local){
    DWRUtil.removeAllRows(local);
}

function gridFiliaisOrigem(holdingOrigem){
	FacadeAjax.getFiliaisByHolding(holdingOrigem, loadFiliaisOrigem);
}

function loadFiliaisOrigem(listFiliaisOrigem){
	DWRUtil.useLoadingMessage("Carregando filais da holding selecionada...");
	cleanAddRows("tbodyGridFiliaisOrigem");
	
	var cellFuncs = [
					function (bean) {
						output = "<input type='checkbox' name='extracao.filiaisOrigem' id='etapa4' value='"+bean.codigoConcessionaria+"' class='objFormText'/>";
						return output;
					},
					function (bean) { return bean.codigoConcessionaria; },
					function (bean) { return bean.nomeConcessionaria; },
					function (bean) { return bean.nomeFantasiaConcessionaria;}
					];
	
	DWRUtil.addRows("tbodyGridFiliaisOrigem", listFiliaisOrigem, cellFuncs, {
		rowCreator:function(options) {
			var row = document.createElement("tr");
			var index = options.rowIndex;
			
			var mod = ( options.rowIndex % 2 );
			
			if ( mod == 0 ){
				row.style.background = "#EFEFEF";
			}else{
				row.style.background = "#F9F9F9";
			}
			return row;
		}
		});
}


function gridFiliaisDestino(holdingDestino){
    FacadeAjax.getFiliaisByHolding(holdingDestino, loadFiliaisDestino);
}

function loadFiliaisDestino(listFiliaisDestino){
	
	DWRUtil.useLoadingMessage("Carregando filais da holding selecionada...");
	cleanAddRows("tbodyGridFiliaisDestino");
	
	var cellFuncs = [
					function (bean) {
						output = "<input type='checkbox' name='extracao.filiaisDestino' id='etapa4' value='"+bean.codigoConcessionaria+"' class='objFormText'/>";
						return output;
					},
					function (bean) { return bean.codigoConcessionaria; },
					function (bean) { return bean.nomeConcessionaria; },
					function (bean) { return bean.nomeFantasiaConcessionaria;}
					];
	
	DWRUtil.addRows("tbodyGridFiliaisDestino", listFiliaisDestino, cellFuncs, {
		rowCreator:function(options) {
			var row = document.createElement("tr");
			var index = options.rowIndex;
			
			var mod = ( options.rowIndex % 2 );
			
			if ( mod == 0 ){
				row.style.background = "#EFEFEF";
			}else{
				row.style.background = "#F9F9F9";
			}
			return row;
		}
		});
}


function gridCentrais(filial){
    FacadeAjax.getCentrais(filial, loadCentrais);
}

function loadCentrais(listCentrais){
	
	DWRUtil.useLoadingMessage("Carregando centrais da filial selecionada...");
	cleanAddRows("tbodyGridCentrais");
	
	var cellFuncs = [
					function (bean) {
						output = "<input type='checkbox' name='extracao.centrais' id='etapa3' value='"+bean.codigo+"' class='objFormText'/>";
						return output;
					},
					function (bean) { return bean.codigo;},
					function (bean) { return bean.sigla; },
					function (bean) { return bean.pessId; },
					function (bean) { return bean.nome;}
					];
	
	DWRUtil.addRows("tbodyGridCentrais", listCentrais, cellFuncs, {
		rowCreator:function(options) {
			var row = document.createElement("tr");
			var index = options.rowIndex;
			
			var mod = ( options.rowIndex % 2 );
			
			if ( mod == 0 ){
				row.style.background = "#EFEFEF";
			}else{
				row.style.background = "#F9F9F9";
			}
			return row;
		}
		});
}

