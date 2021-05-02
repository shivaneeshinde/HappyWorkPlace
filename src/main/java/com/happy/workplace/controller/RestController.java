package com.happy.workplace.controller;

import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;


@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@GetMapping("/healthCheck")
	public String check()
	{
		return "checked";
	}
	
	public String login() {
		return null;
	}

}
