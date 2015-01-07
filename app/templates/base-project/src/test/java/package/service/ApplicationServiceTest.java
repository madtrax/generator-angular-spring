package <%= properties.packageName %>.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/application-config.xml", "classpath:spring/mvc-config.test.xml" })
public class ApplicationServiceTest {

	@Autowired
	private ApplicationService applicationService;
	
	@Test
	public void testConfigParams() {
		Assert.notNull(applicationService.getProjectName());
		Assert.notNull(applicationService.getProjectAuthor());
		Assert.notNull(applicationService.getProjectWebsite());
	}
	
}
