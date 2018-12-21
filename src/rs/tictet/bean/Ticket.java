package rs.tictet.bean;
// default package

/**
 * Ticket entity. @author MyEclipse Persistence Tools
 */

public class Ticket implements java.io.Serializable {

	// Fields

	private String checi;
	private String chufazhan;
	private String daodazhan;
	private String chutime;
	private String daotime;
	private String time;
	private Integer shangwut;
	private Integer shangwum;
	private Integer yideng;
	private Integer yudengm;
	private Integer erdeng;
	private Integer erdengm;
	private Integer gaojiruan;
	private Integer gaojiruanm;
	private Integer ruan;
	private Integer ruanm;
	private Integer yingwo;
	private Integer yingwom;
	private Integer ruanzuo;
	private Integer ruanzuom;
	private Integer yingzuo;
	private Integer yingzuom;
	private Integer wuzuo;
	private Integer wuzuom;

	// Constructors

	/** default constructor */
	public Ticket() {
	}

	/** minimal constructor */
	public Ticket(String checi) {
		this.checi = checi;
	}

	/** full constructor */
	public Ticket(String checi, String chufazhan, String daodazhan,
			String chutime, String daotime, String time, Integer shangwut,
			Integer shangwum, Integer yideng, Integer yudengm, Integer erdeng,
			Integer erdengm, Integer gaojiruan, Integer gaojiruanm,
			Integer ruan, Integer ruanm, Integer yingwo, Integer yingwom,
			Integer ruanzuo, Integer ruanzuom, Integer yingzuo,
			Integer yingzuom, Integer wuzuo, Integer wuzuom) {
		this.checi = checi;
		this.chufazhan = chufazhan;
		this.daodazhan = daodazhan;
		this.chutime = chutime;
		this.daotime = daotime;
		this.time = time;
		this.shangwut = shangwut;
		this.shangwum = shangwum;
		this.yideng = yideng;
		this.yudengm = yudengm;
		this.erdeng = erdeng;
		this.erdengm = erdengm;
		this.gaojiruan = gaojiruan;
		this.gaojiruanm = gaojiruanm;
		this.ruan = ruan;
		this.ruanm = ruanm;
		this.yingwo = yingwo;
		this.yingwom = yingwom;
		this.ruanzuo = ruanzuo;
		this.ruanzuom = ruanzuom;
		this.yingzuo = yingzuo;
		this.yingzuom = yingzuom;
		this.wuzuo = wuzuo;
		this.wuzuom = wuzuom;
	}

	// Property accessors

	public String getCheci() {
		return this.checi;
	}

	public void setCheci(String checi) {
		this.checi = checi;
	}

	public String getChufazhan() {
		return this.chufazhan;
	}

	public void setChufazhan(String chufazhan) {
		this.chufazhan = chufazhan;
	}

	public String getDaodazhan() {
		return this.daodazhan;
	}

	public void setDaodazhan(String daodazhan) {
		this.daodazhan = daodazhan;
	}

	public String getChutime() {
		return this.chutime;
	}

	public void setChutime(String chutime) {
		this.chutime = chutime;
	}

	public String getDaotime() {
		return this.daotime;
	}

	public void setDaotime(String daotime) {
		this.daotime = daotime;
	}

	public String getTime() {
		return this.time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Integer getShangwut() {
		return this.shangwut;
	}

	public void setShangwut(Integer shangwut) {
		this.shangwut = shangwut;
	}

	public Integer getShangwum() {
		return this.shangwum;
	}

	public void setShangwum(Integer shangwum) {
		this.shangwum = shangwum;
	}

	public Integer getYideng() {
		return this.yideng;
	}

	public void setYideng(Integer yideng) {
		this.yideng = yideng;
	}

	public Integer getYudengm() {
		return this.yudengm;
	}

	public void setYudengm(Integer yudengm) {
		this.yudengm = yudengm;
	}

	public Integer getErdeng() {
		return this.erdeng;
	}

	public void setErdeng(Integer erdeng) {
		this.erdeng = erdeng;
	}

	public Integer getErdengm() {
		return this.erdengm;
	}

	public void setErdengm(Integer erdengm) {
		this.erdengm = erdengm;
	}

	public Integer getGaojiruan() {
		return this.gaojiruan;
	}

	public void setGaojiruan(Integer gaojiruan) {
		this.gaojiruan = gaojiruan;
	}

	public Integer getGaojiruanm() {
		return this.gaojiruanm;
	}

	public void setGaojiruanm(Integer gaojiruanm) {
		this.gaojiruanm = gaojiruanm;
	}

	public Integer getRuan() {
		return this.ruan;
	}

	public void setRuan(Integer ruan) {
		this.ruan = ruan;
	}

	public Integer getRuanm() {
		return this.ruanm;
	}

	public void setRuanm(Integer ruanm) {
		this.ruanm = ruanm;
	}

	public Integer getYingwo() {
		return this.yingwo;
	}

	public void setYingwo(Integer yingwo) {
		this.yingwo = yingwo;
	}

	public Integer getYingwom() {
		return this.yingwom;
	}

	public void setYingwom(Integer yingwom) {
		this.yingwom = yingwom;
	}

	public Integer getRuanzuo() {
		return this.ruanzuo;
	}

	public void setRuanzuo(Integer ruanzuo) {
		this.ruanzuo = ruanzuo;
	}

	public Integer getRuanzuom() {
		return this.ruanzuom;
	}

	public void setRuanzuom(Integer ruanzuom) {
		this.ruanzuom = ruanzuom;
	}

	public Integer getYingzuo() {
		return this.yingzuo;
	}

	public void setYingzuo(Integer yingzuo) {
		this.yingzuo = yingzuo;
	}

	public Integer getYingzuom() {
		return this.yingzuom;
	}

	public void setYingzuom(Integer yingzuom) {
		this.yingzuom = yingzuom;
	}

	public Integer getWuzuo() {
		return this.wuzuo;
	}

	public void setWuzuo(Integer wuzuo) {
		this.wuzuo = wuzuo;
	}

	public Integer getWuzuom() {
		return this.wuzuom;
	}

	public void setWuzuom(Integer wuzuom) {
		this.wuzuom = wuzuom;
	}

}