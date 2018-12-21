package hibernatec;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
	public Session getSession(){
		Configuration cof = new Configuration();    //读取默认的Employee.hbm.xml文件
		cof.configure();        //读取cfg.xml文件
		@SuppressWarnings("deprecation")
		SessionFactory sf = cof.buildSessionFactory();   //管理Session
		Session session = sf.openSession();
		return session;
	}
}
