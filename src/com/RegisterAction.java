package com;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;

import rs.user.bean.Users;
import rs.user.dao.impl.UserDAOImpl;

import com.opensymphony.xwork2.ActionSupport;

public class RegisterAction extends ActionSupport implements ServletRequestAware  {
	
	private String name;
	private String pw;
	
	private UserDAOImpl zhuce;
	private HttpServletRequest request;
	private String result;
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public UserDAOImpl getZhuce() {
		return zhuce;
	}

	public void setZhuce(UserDAOImpl zhuce) {
		this.zhuce = zhuce;
	}

	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
	
	public String execute(){
		System.out.println("RegisterAction 开始执行");
		if(zhuce.register(name,pw)==true){
			this.setResult("注册成功");
			return SUCCESS;
		}else{
			this.setResult("注册失败");
			return "fail";
		}
	}
}
