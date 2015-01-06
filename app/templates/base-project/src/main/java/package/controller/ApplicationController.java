package <%= properties.packageName %>.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;
import java.util.HashMap;
import java.util.logging.Logger;

import <%= properties.packageName %>.service.ApplicationService;

@Controller
public class ApplicationController {

	@Autowired
	private ApplicationService applicationService;

	private Logger logger = Logger.getLogger(getClass().getName());

	public ApplicationController() {
		
	}

	@RequestMapping("/config")
	public @ResponseBody Map<String,String> config() {
		Map<String, String> params = new HashMap<String, String>();

		params.put("projectName", 	applicationService.getProjectName());
		params.put("projectAuthor", applicationService.getProjectAuthor());

		logger.info("Querying /config");

		return params;
	}

}
