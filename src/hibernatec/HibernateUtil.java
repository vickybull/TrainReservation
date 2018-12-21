package hibernatec;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
	public Session getSession(){
		Configuration cof = new Configuration();    //��ȡĬ�ϵ�Employee.hbm.xml�ļ�
		cof.configure();        //��ȡcfg.xml�ļ�
		@SuppressWarnings("deprecation")
		SessionFactory sf = cof.buildSessionFactory();   //����Session
		Session session = sf.openSession();
		return session;
	}
}
