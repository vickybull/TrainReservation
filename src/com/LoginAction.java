package com;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;

import rs.user.dao.impl.UserDAOImpl;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport implements ServletRequestAware {
	
	private String username;
	private String password;
	private String passwords;
	
	private UserDAOImpl denglu;
	private HttpServletRequest request;
	private String result;
	
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	public String getResult() {
		return result;
	}

	public void setDenglu(UserDAOImpl denglu) {
		this.denglu = denglu;
	}

	public String execute(){
		System.out.println("LoginAction");
		if(denglu.search(username, password)==true){
			this.setResult("loginsuccess");
			return SUCCESS;
		}
		this.setResult("账号或密码错误");	
		return "fail";
	}
	
}
