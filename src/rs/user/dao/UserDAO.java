package rs.user.dao;

import rs.user.bean.Users;

public interface UserDAO {
	public void save(Users u);
	public boolean search(String username,String password);
	public boolean register(String name,String pw);    //зЂВс
}
