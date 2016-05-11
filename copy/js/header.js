function cdd_menu121086(){

//Note: This data file may be manually customized

    //Unique Menu Id
	this.uid = 121086

/**********************************************************************************************
                               Icon Images
**********************************************************************************************/

    //Absolute positioned icon images (x,y positioned)

	this.abs_icon_image1 = "arrows_6_h1.gif"
	this.abs_icon_rollover1 = "arrows_6_hl.gif"
	this.abs_icon_image_wh1 = "10,8"
	this.abs_icon_image_xy1 = "130,40"

/**********************************************************************************************
                              Global - Menu Container Settings
**********************************************************************************************/

	this.menu_background_color = "transparent"
	this.menu_border_color = "transparent"
	this.menu_border_width = 1 /*1*/
	this.menu_padding = "2,2,2,2" /*2,2,2,2*/
	this.menu_border_style = "none"
	this.divider_caps = false
	this.divider_width = 1
	this.divider_height = 1
	this.divider_background_color = "#000000"
	this.divider_border_style = "none"
	this.divider_border_width = 0
	this.divider_border_color = "#000000"
	this.menu_is_horizontal = false
	this.menu_width = 90
	/*adicionado*/
	this.menu_xy = "-80,3"
	this.menu_gradient = "progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr=#DAF0FD, endColorstr=#85BBE3)"

/**********************************************************************************************
                              Global - Menu Item Settings
**********************************************************************************************/

	this.menu_items_background_color_roll = "transparent"
	this.menu_items_text_color = "#000000"
	this.menu_items_text_decoration = "none"
	this.menu_items_font_family = "Tahoma"
	this.menu_items_font_size = "12px"
	this.menu_items_font_style = "normal"
	this.menu_items_font_weight = "normal"
	this.menu_items_text_align = "left"
	this.menu_items_padding = "2,4,2,4" /*"0,5,0,5"*//*"2,4,2,4"*/
	this.menu_items_border_style = "none"
	this.menu_items_border_color = "transparent"
	this.menu_items_border_width = 0
	this.menu_items_width = 90
	this.menu_items_text_decoration_roll = "underline"
	this.menu_items_text_color_roll = "#000000"
	this.menu_items_background_color = "transparent"

/**********************************************************************************************
                              Main Menu Settings
**********************************************************************************************/
 	 this.rel_icon_image0 = "i.p.send.gif" 
 	 this.rel_icon_rollover0 = "i.p.send.gif" 
  this.abs_icon_rollover0 = "" 
  this.abs_icon_image_wh0 = "" 
 	
  this.menu_background_color_main = "transparent"
  this.menu_items_background_color_roll_main = "transparent"
  this.menu_items_text_color_roll_main = "#000000"
  this.menu_border_color_main = "#004080"
  this.menu_is_horizontal_main = true
	 
  this.item0 = "Consultas"
        
  this.item_background_color_roll0 = "transparent"
  this.item_border_color0 = "#004080"
  this.item_width0 = 40
  this.item_width1 = 140  
  this.item_width2 = 75 
  this.item_width3 = 200 

/**********************************************************************************************
                              Sub Menu Settings
**********************************************************************************************/

  //Sub Menu 0 HUR (Visão Histórico)
  
  this.menu_width0 = 140 
  this.menu_xy0 = "-30,4" 
  
  this.item0_0 = "Conciliação"
  this.url0_0 = system_path+"/sssssssssss.do?acao=show"
  
  this.item0_1 = "Ofensores"
  this.url0_1 = system_path+"/sssssssss.do?acao=show_filtro_ativar_reenvio_hur"
  
  this.item0_2 = "Ofensores Reincidentes"
  this.url0_2 = system_path+"/sssssssss.do?acao=show"
  
  this.item0_3 = "Bilhetes"
 
  this.menu_width1 = 200 
  this.menu_xy1 = "-130,4" 
  
  //Sub Menu 2 Relatórios
   
   
   this.menu_width0_1 = 140 
  this.menu_xy0_1 = "-50,-20"
   
	this.item0_1_0 = "Ofensores Detraf";
	this.item0_1_1 = "Ofensores Sgtp";
	  
   this.item0_2_0 = "Ofensores Reincidentes Detraf";
	this.item0_2_1 = "Ofensores Reincidentes Sgtp";
	
  	this.item0_3_0 = "Bilhetes Detraf";
	this.item0_3_1 = "Bilhetes Sgtp";
	
  
}///////////////////////// END Menu Data /////////////////////////////////////////


//Document Level Settings

cdd__activate_onclick = false
cdd__showhide_delay = 50
cdd__url_target = "_self"
cdd__url_features = "resizable=1, scrollbars=1, titlebar=1, menubar=1, toolbar=1, location=1, status=1, directories=1, channelmode=0, fullscreen=0"
cdd__display_urls_in_status_bar = true
cdd__default_cursor = "hand"


if (window.showHelp){b_type = "ie"; 
if (!window.attachEvent) b_type += "mac";}

if (document.createElementNS) b_type = "dom";
if (navigator.userAgent.indexOf("afari")>-1) b_type = "safari";
if (window.opera) b_type = "opera"; 
qmap1 = "\<\script language=\"JavaScript\" vqptag='loader_sub' src=\""; qmap2 = ".js\">\<\/script\>";;

function iesf(){};;

function vqp_error(val){}

if (b_type){document.write(qmap1+cdd__codebase+"pbrowser_"+b_type+qmap2);
document.close();
}

