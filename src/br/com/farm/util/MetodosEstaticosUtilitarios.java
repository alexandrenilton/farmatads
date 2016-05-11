package br.com.farm.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MetodosEstaticosUtilitarios {
	public static String escapeCpfCnpj(String cpfCnpj){
		cpfCnpj = cpfCnpj.replaceAll("\\.", "").replaceAll("\\-", "").replaceAll("\\/", "");
		return cpfCnpj;
	}
	
	public static String escapeTelefone(String telefone){
		telefone = telefone.replaceAll(" ","" ).replaceAll("-", "").replaceAll("\\(", "").replaceAll("\\)", "");
		return telefone;
	}
	
	public static boolean isNumberInteger(String numberStr){
		try{
			int a = Integer.parseInt(numberStr);
		}catch(Exception ex){
			return false;
		}
		return true;
	}
	
	public static boolean isSomenteNumeros(String str){
		//Numero pode ser mt grande entao..
		try{
			BigDecimal numero = new BigDecimal(str);
			return true;
		}catch(Exception ex){
			return false;
		}
	}
	
	/**
	 * Verifica se o numero passado esta no formato decimal correto
	 * @param numero
	 * @return
	 */
	public static boolean isNumeroDecimal(String numero){
		String num2 = numero.replaceAll("\\.", "").replace(",", ".");
		
		try{
			Double.parseDouble(num2);
			return true;
		}catch ( NumberFormatException nfex){
			return false;
		}
	}
	
	/**
	 * Formata um numero double para o formato: 1.234.567,99
	 * @param number
	 * @return
	 */
	public static String formatNumber(Double number){
		//java.text.NumberFormat nf = java.text.NumberFormat.getInstance();   
		//String formatado = nf.format(number);  
		//return formatado;
		//return (nf.format(bigDecimal));
		//java.text.DecimalFormat df = new java.text.DecimalFormat("#,###.00");   
		NumberFormat nf = new DecimalFormat ("#,##0.00", new DecimalFormatSymbols (new Locale ("pt", "BR")));
		return nf.format(number);
	}
	
	public static boolean validaEmail(String email){
		Pattern p = Pattern.compile(".+@.+\\.[a-z]+");   
		Matcher m = p.matcher(email);   
		boolean matchFound = m.matches();   
		if (matchFound){   
			return true; //System.out.println("Valid Email Id.");   
		}else{  
			return false; //System.out.println("Invalid Email Id.");   
		}
	}
	
	
	public static void main(String [] args){
		String saida = escapeTelefone("(61) 12312-2643");
		
		System.out.println(isSomenteNumeros(saida));
	}

	public static double getDouble(String numero) {
		String num2 = numero.replaceAll("\\.", "").replace(",", ".");
		
		try{
			return Double.parseDouble(num2);
		}catch ( NumberFormatException nfex){
			return 0;
		}
	}
}
