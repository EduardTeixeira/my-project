package com.projectname.backend.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import com.projectname.backend.model.Greeting;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/greeting")
	public Greeting getGreeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

	@PostMapping("/greeting")
	public String postGreeting(@RequestBody Greeting greeting) {
		return "Greeting - POST " + greeting.getContent();
	}

	@PutMapping("/greeting")
	public String putGreeting(@RequestBody Greeting greeting) {
		return "Greeting - PUT " + greeting.getId();
	}

	@DeleteMapping("/greeting/{id}")
	public String deleteGreeting(@PathVariable Long id) {
		return "Greeting - DELETE " + id;
	}

}
