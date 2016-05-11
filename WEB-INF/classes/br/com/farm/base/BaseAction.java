package br.com.farm.base;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

public class BaseAction extends Action{
	public final static String SHOW = "show";
	public final static String RUN = "run";
	public final static String SAVE = "save";
	public final static String SEARCH = "search";
	public final static String DETAIL = "detail";
	public final static String UPDATE = "update";
	public final static String DELETE = "delete";
	
	public final static String FORWARD_INVALID = "invalid";
	public final static String FORWARD_NO_ACCESS = "noAccess";
	public final static String FORWARD_SHOW_RESULT = "showResult";
}
