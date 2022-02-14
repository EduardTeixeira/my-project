package com.projectname.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectname.backend.requests.RequestLogin;

@Controller
@RequestMapping(path="/oauth")
@RestController
public class AuthenticationController {

	@PostMapping("/login")
	public Boolean postLogin(@RequestBody RequestLogin requestLogin) {
		if (requestLogin.getUsername().equals("email@email.com") && requestLogin.getPassword().equals("123456")) {
			return true;
		} else {
			return false;
		}
	}

}
