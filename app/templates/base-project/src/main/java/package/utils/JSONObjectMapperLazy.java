package <%= properties.packageName %>.utils;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;

public class JSONObjectMapperLazy extends ObjectMapper {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public JSONObjectMapperLazy() {
		Hibernate4Module hm = new Hibernate4Module();
        registerModule(hm);	
        enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
	}
}
