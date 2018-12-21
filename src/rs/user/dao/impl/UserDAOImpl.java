package rs.user.dao.impl;

import java.util.List;

import hibernatec.HibernateUtil;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import rs.user.bean.Users;
import rs.user.dao.UserDAO;

public class UserDAOImpl implements UserDAO{

	public void save(Users u) {
		Session session = new HibernateUtil().getSession();
		Transaction tran = session.getTransaction();
		tran.begin();
		try{
			session.save(u);
			tran.commit();
		}catch(HibernateException a){
			a.printStackTrace();
			tran.rollback();
		}finally{
			session.close();
		}
		
	}

	public boolean search(String username, String password) {
		System.out.println("UserDAOImpl :进入查询"+username+" "+password);
		Session session = new HibernateUtil().getSession();
		Transaction tran = session.beginTransaction();
		try{
			System.out.println(username+" "+password);
			String hql = "from Users";
			Query q = session.createQuery(hql);
			System.out.println("1");
			List<Users> list = q.list();
			tran.commit();
			session.close();
			int tag=0;
			for(Users u:list){
				if(u.getUsername().equals(username)&&u.getPassword().equals(password)){
					tag=1;
				}
			}
			if(tag==1){
				System.out.println("UserDAOImpl : "+list.get(0).getUsername());
				return true;
			}
		}catch(HibernateException a){
			a.printStackTrace();
			tran.rollback();
		}
		return false;
	}

	public boolean register(String name, String pw) {
		System.out.println("register 开始执行 :");
		if(search(name,pw)){
			return false;
		}
		Session session = new HibernateUtil().getSession();
		Transaction tran = session.getTransaction();
		tran.begin();
		try{
			System.out.println(name+" "+name);
			Users u = new Users(name, pw);
			session.save(u);
			tran.commit();
			return true;
			
			
			
		}catch(HibernateException e){
			e.printStackTrace();
			tran.rollback();
		}finally{
			session.close();
		}
		return false;
	}

}
