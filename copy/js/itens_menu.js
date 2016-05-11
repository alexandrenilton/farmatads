//----------DHTML Menu Created using AllWebMenus LITE ver 3.0-#414---------------
var awmMenuName='itens_menu';
var awmLibraryPath='jsp';
var awmImagesPath='img';

if (awmAltUrl!='' && !document.all) window.location.replace(awmAltUrl);

if (document.all && navigator.userAgent.indexOf('Opera')<0 && navigator.userAgent.indexOf('Mac')<0){
	mpi=document.all['awmMenuPathImg-itens_menu'].src;
	var awmMenuPath=mpi.substring(0,mpi.length-16);
	while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'", "&#39;");}
		document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib1.js'><\/SCRIPT>");
		var n=null;
		awmzindex=1000;
}

var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmTarget=0;

function awmBuildMenu()
{
	if (document.all && navigator.userAgent.indexOf('Opera')<0 && navigator.userAgent.indexOf('Mac')<0) 
	{
		awmCreateCSS(1,2,1,'#FFFFFF','#3A414E',n,'bold 14px sans-serif',n,'solid',1,'#3A414E',0,0)
		awmCreateCSS(0,1,0,n,n,n,n,n,'solid',1,n,0,0);
		awmCreateCSS(1,2,1,'#000040','#9DA6B6',n,'14px serif',n,'solid',1,'#ABB3C0',0,1)
		awmCreateCSS(0,2,1,'#800000','#DADAE7',n,'14px serif',n,'solid',1,'#BCC2CD',0,1)
		awmCreateCSS(0,2,1,'#800000','#DADAE7',n,'14px serif',n,'inset',2,'#BCC2CD',0,1)
		awmCreateCSS(1,2,1,'#FFFFFF',n,n,'4mm sans-serif',n,'solid',2,'#5B5B5B',0,0)
		
		var s0=awmCreateMenu(0,0,0,0,1,0,0,0,7,10,10,0,0,1,0,"Detraf - Sgtp","",n,1,0,1,0,n,n);
			it=s0.addItem(2,3,4,"&nbsp;&nbsp;Consulta Conciliação&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
			it=s0.addItem(2,3,4,"&nbsp;&nbsp;Consulta Ofensores&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
		var s1=it.addSubmenu(0,0,0,0,0,0,0,1,5,n,"",n,1,0,1,0,n,n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;Detraf&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;SGTP&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
			it=s0.addItem(2,3,4,"&nbsp;&nbsp;Consulta Ofensores Reincidentes&nbsp;&nbsp;",n,n,"","",n,n,n,n,n);
		var s1=it.addSubmenu(0,0,0,0,0,0,0,1,5,n,"",n,1,0,1,0,n,n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;Detraf&nbsp;&nbsp;",n,n,"","",n,n,n,n,n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;Sgtp&nbsp;&nbsp;",n,n,"","",n,n,n,n,n);
			it=s0.addItem(2,3,4,"&nbsp;&nbsp;Consulta Bilhetes&nbsp;&nbsp;",n,n,"","",n,n,n,n,n);
		var s1=it.addSubmenu(0,0,0,0,0,0,0,1,5,n,"",n,1,0,1,0,n,n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;Detraf&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
			it=s1.addItem(2,3,4,"&nbsp;&nbsp;Sgtp&nbsp;&nbsp;",n,n,"","",n,n,n,"url",n);
			s0.pm.buildMenu();
	}
}
