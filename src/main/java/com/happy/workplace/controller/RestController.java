package com.happy.workplace.controller;

import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;


@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@GetMapping("/healthCheck")
	public String check()
	{
		return "checked";
	}

}
