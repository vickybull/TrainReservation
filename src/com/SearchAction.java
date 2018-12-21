package com;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.interceptor.ServletRequestAware;

import rs.tictet.bean.Ticket;
import rs.user.dao.impl.TicketDAOImpl;

import com.opensymphony.xwork2.ActionSupport;

public class SearchAction extends ActionSupport implements ServletRequestAware {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private HttpServletRequest request;
	private String result;
	private TicketDAOImpl tdi;
	private String chu;
	private String dao;
	private String time;

	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
	
	

	public String getResult() {
		return result;
	}



	public void setResult(String result) {
		this.result = result;
	}



	public TicketDAOImpl getTdi() {
		return tdi;
	}


	public void setTdi(TicketDAOImpl tdi) {
		this.tdi = tdi;
	}


	public String getChu() {
		return chu;
	}

	public void setChu(String chu) {
		this.chu = chu;
	}

	public String getDao() {
		return dao;
	}

	public void setDao(String dao) {
		this.dao = dao;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
	
	public String execute(){
		System.out.println("SearchAction : 开始执行 chu dao time "+chu+" "+dao+" "+time);
		List<Ticket> list = tdi.search(chu, dao, time);
		if(list.size()==0){
			JSONArray jsonarray = new JSONArray();
			result = jsonarray.toString();
			return SUCCESS;
		}
		Map<String,Object>[] map = new Map[100];
		for(int i=0;i<100;i++){
			map[i] = new HashMap<String,Object>();
		}
		int k=0;
		for(Ticket t:list){
			System.out.println("SearchAction : 进入循环");
			map[k].put("checi", t.getCheci());
			map[k].put("fazhan", t.getChufazhan());
			map[k].put("daozhan", t.getDaodazhan());
			map[k].put("fashi", t.getChutime());
			map[k].put("daoshi", t.getDaotime());
			map[k].put("time", t.getTime());
			map[k].put("shangwu", t.getShangwut());
			map[k].put("shangwum", t.getShangwum());
			map[k].put("yideng", t.getYideng());
			map[k].put("yidengm", t.getYudengm());
			map[k].put("erdeng", t.getErdeng());
			map[k].put("erdengm", t.getErdengm());
			map[k].put("gaojiruan",t.getGaojiruan());
			map[k].put("gaojiruanm", t.getGaojiruanm());
			map[k].put("ruan", t.getRuan());
			map[k].put("ruanm", t.getRuanm());
			map[k].put("yingwo", t.getYingwo());
			map[k].put("yingwom", t.getYingwom());
			map[k].put("ruanzuo", t.getRuanzuo());
			map[k].put("ruanzuom", t.getRuanzuom());
			map[k].put("yingzuo", t.getYingzuo());
			map[k].put("yingzuom", t.getYingzuom());
			map[k].put("wuzuo", t.getWuzuo());
			map[k].put("wuzuom", t.getWuzuom());
			k++;
		}
		JSONArray jsonarray = new JSONArray();
		for(int m = 0;m<k;m++){
			System.out.println(map[m]);
			JSONObject json = JSONObject.fromObject(map[m]);
			System.out.println(json);
			jsonarray.add(json);
		}
		System.out.println(jsonarray.toString());
		result = jsonarray.toString();
		
		System.out.println(jsonarray.toString());
		return SUCCESS;
	}

}
