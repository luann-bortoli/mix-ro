package dev.luann.userservice.exception;

import lombok.Getter;

@Getter
public class EmailAlreadyExists extends RuntimeException
{

  private String email;

    public EmailAlreadyExists(String email)
    {
        super("A user with email: " + email + " already exists.");

        this.email = email;
    }
}
