
//////////////////// Define agenda events ///////////////////////////
// Usage -- fAddEvent(year, month, day, message, action, bgcolor, fgcolor, bgimg, boxit, html);
// Notice:
// 1. The (year,month,day) identifies the date of the agenda.
// 2. In the action part you can use any javascript statement, or use " " for doing nothing.
// 3. Assign "null" value to action will result in a line-through effect(can't be selected).
// 4. html is the HTML string to be shown inside the agenda cell, usually an <img> tag.
// 5. fgcolor is the font color for the specific date. Setting it to ""(empty string) will make the fonts invisible and the date unselectable.
// 6. bgimg is the url of the background image file for the specific date.
// 7. boxit is a boolean that enables the box effect using the bgcolor when set to true.
// ** REMEMBER to enable respective flags of the gAgendaMask option in the theme, or it won't work.
/////////////////////////////////////////////////////////////////////

// fAddEvent(2003,12,2," Click me to active your email client. ","popup('mailto:any@email.address.org?subject=email subject')","#87ceeb","dodgerblue",null,true);
// fAddEvent(2004,4,1," Let's google. ","popup('http://www.google.com','_top')","#87ceeb","dodgerblue",null,true);
// fAddEvent(2004,9,23, "Hello World!\nYou can't select me.", null, "#87ceeb", "dodgerblue");




///////////// Dynamic holiday calculations /////////////////////////
// This function provides you a flexible way to make holidays of your own. (It's optional.)
// Once defined, it'll be called every time the calendar engine renders the date cell;
// With the date passed in, just do whatever you want to validate whether it is a desirable holiday;
// Finally you should return an agenda array like [message, action, bgcolor, fgcolor, bgimg, boxit, html] 
// to tell the engine how to render it. (returning null value will make it rendered as default style)
// ** REMEMBER to enable respective flags of the gAgendaMask option in the theme, or it won't work.
////////////////////////////////////////////////////////////////////
function fHoliday(y,m,d) {
	var rE=fGetEvent(y,m,d), r=null;

	// Faturamento
	//TODO: Colocar o data inicio e fim do corte ex: 001 23/06 a 22/07
	mAtual=m;
	yAtual=y;
	if (mAtual==1) 		mAtual="01"; else if (mAtual==2) mAtual="02"; else if (mAtual==3) mAtual="03";
	else if (mAtual==4) mAtual="04"; else if (mAtual==5) mAtual="05"; else if (mAtual==6) mAtual="06";
	else if (mAtual==7) mAtual="07"; else if (mAtual==8) mAtual="08"; else if (mAtual==9) mAtual="09";
	
	mAnterior=(m-1);
	yAnterior=(y);
	if (m==12) 
	{ 
		mProximo=1; 
		yProximo=(y+1); 
	}
	else if (m==1) 
	{
		mProximo=2;
		mAnterior=12;
		yAnterior=(y-1);
		yProximo=(y+1); 
	}
	else
	{
		mProximo=(m+1);
		yProximo=y; 
	}
	
	if (mProximo==1)      mProximo="01"; else if (mProximo==2) mProximo="02"; else if (mProximo==3) mProximo="03"; 
	else if (mProximo==4) mProximo="04"; else if (mProximo==5) mProximo="05"; else if (mProximo==6) mProximo="06";
	else if (mProximo==7) mProximo="07"; else if (mProximo==8) mProximo="08"; else if (mProximo==9) mProximo="09";

	
	if (d==1)
		r=[" Ciclo 003, Ref."+yAtual+"-"+mAtual+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n Corte Faturamento! ",gsAction,"#FFFF66","red"];
	else if (d==4)
		r=[" Ciclo 004, Ref."+yAtual+"-"+mAtual+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n Corte Faturamento! ",gsAction,"#FFFF66","red"];
	else if (d==9)
		r=[" Ciclo 005, Ref."+yAtual+"-"+mAtual+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n Corte Faturamento! ",gsAction,"#FFFF66","red"];
	else if (d==15)
		r=[" Ciclo 006, Ref."+yAtual+"-"+mAtual+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n Corte Faturamento! ",gsAction,"#FFFF66","red"];
	else if (d==22)
		r=[" Ciclo 001, Ref."+yProximo+"-"+mProximo+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n  Corte Faturamento! ",gsAction,"#FFFF66","red"];
	else if (d==26)
		r=[" Ciclo 002, Ref."+yProximo+"-"+mProximo+" \n Periodo: "+(d+1)+"/"+mAnterior+"/"+yAnterior+" - "+d+"/"+mAtual+"/"+yAtual+" \n  Corte Faturamento! ",gsAction,"#FFFF66","red"];

	// Feriados
	if (m==1&&d==1)
		r=[" Jan 1, "+y+" \n Confraternização Universal! ",gsAction,"skyblue","red"];
	else if (m==2&&d==27)
		r=[" Fev 27, "+y+" \n Carnaval e Faturamento 002! ",gsAction,"skyblue","red"];
	else if (m==2&&d==28)
		r=[" Fev 28, "+y+" \n Carnaval! ",gsAction,"skyblue","red"];
	else if (m==4&&d==14)
		r=[" Abr 14, "+y+" \n Sexta-Feira Santa! ",gsAction,"skyblue","red"];
	else if (m==4&&d==21)
		r=[" Abr 21, "+y+" \n Tiradentes! ",gsAction,"skyblue","red"];
	else if (m==5&&d==1)
		r=[" Mai 1, "+y+" \n Dia do Trabalho! ",gsAction,"skyblue","red"];
	else if (m==6&&d==15)
		r=[" Jun 15, "+y+" \n Corpus Christi! ",gsAction,"skyblue","red"];
	else if (m==9&&d==07)
		r=[" Set 7, "+y+" \n Independência do Brasil!  ",gsAction,"skyblue","red"];
	else if (m==10&&d==12)
		r=[" Out 12, "+y+" \n Nossa Senhora Aparecida!  ",gsAction,"skyblue","red"];
	else if (m==11&&d==2)
		r=[" Nov 2, "+y+" \n Finados e Faturamento 003! ",gsAction,"skyblue","red"];
	else if (m==11&&d==15)
		r=[" Nov 15, "+y+" \n Proclamação da República!  ",gsAction,"skyblue","red"];
	else if (m==12&&d==25)
		r=[" Dez 25, "+y+" \n Natal! ",gsAction,"skyblue","red"];

	return rE?rE:r;	// favor events over holidays
}


