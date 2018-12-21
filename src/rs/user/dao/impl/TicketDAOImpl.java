package rs.user.dao.impl;

import hibernatec.HibernateUtil;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import rs.ticket.dao.TicketDAO;
import rs.tictet.bean.Ticket;

public class TicketDAOImpl implements TicketDAO {

	public List<Ticket> search(String chu,String dao,String time) {
		System.out.println("TicketDAOImpl 开始执行");
		Session session = new HibernateUtil().getSession();
		Transaction tran = session.beginTransaction();
		List<Ticket> t = new ArrayList<Ticket>();
		Query q = session.createQuery("from Ticket");
		List<Ticket> tmp = q.list();
		tran.commit();
		session.close();
		if(tmp.size()!=0){
			for(Ticket a:tmp){
				if(a.getChufazhan().equals(chu)&&a.getDaodazhan().equals(dao)&&a.getTime().equals(time)){
					t.add(a);
				}
			}
		}
		System.out.println("TicketDAOImpl 结束执行");
		return t;
	}
	
}
