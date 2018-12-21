package rs.ticket.dao;

import java.util.List;

import rs.tictet.bean.Ticket;


public interface TicketDAO {
	public List<Ticket> search(String chu,String dao,String time);
}
