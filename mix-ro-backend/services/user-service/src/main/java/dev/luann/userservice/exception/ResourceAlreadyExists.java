package dev.luann.userservice.exception;

import lombok.Getter;

@Getter
public class ResourceAlreadyExists extends RuntimeException
{
  private String resource;
  private String identifier;

    public ResourceAlreadyExists(String resource, String identifier)
    {
        super("Um usuário com o " + resource + ": " + identifier + " já está cadastrado.");

        this.resource = resource;
        this.identifier = identifier;
    }
}
