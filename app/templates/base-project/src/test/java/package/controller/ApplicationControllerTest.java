package <%= properties.packageName %>.controller;

import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/application-config.xml", "classpath:spring/mvc-config.test.xml" })
public class ApplicationControllerTest {

	@Autowired
	private ApplicationController applicationController;
	
	@Test
	public void testConfigEndpoint() {
		Map<String, String> res = applicationController.config();
		
		Assert.notNull(res);
		Assert.notEmpty(res);
		Assert.isTrue(res.size() == 3);
	}
	
}
