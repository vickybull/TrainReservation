package rs.user.dao.impl;

import java.io.IOException;

import rs.user.bean.Users;

public class Test {
	
	public static void main(String args[]) throws IOException{
		
		UserDAOImpl a = new UserDAOImpl();
		Users u = new Users();
		u.setUsername("3");
		u.setPassword("1");
		a.save(u);
		System.out.println(1);
	}

}
