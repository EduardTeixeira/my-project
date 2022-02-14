package com.projectname.backend.exceptions;

public class DuplicatedRecordException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5522966094773622053L;
	
	private String message;

	public DuplicatedRecordException(String email, String url) {

		if (email == null) {

			this.message = "A URL \"" + url
					+ "\" já existe em nossa base de dados. Clique em \"Esqueci minha senha\" na tela de Login para lhe enviarmos sua senha.";

		} else {

			this.message = "O E-mail \"" + email
					+ "\" já existe em nossa base de dados. Clique em \"Esqueci minha senha\" na tela de Login para lhe enviarmos sua senha.";

		}

	}

	@Override
	public String getMessage() {

//		return "E-mail ou URL já existente em nossa base de dados. Clique no botão Esqueci minha senha na tela de login para fazer o reset.";
		return message;

	}

}
