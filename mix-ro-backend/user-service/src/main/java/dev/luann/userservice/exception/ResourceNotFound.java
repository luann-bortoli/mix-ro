package dev.luann.userservice.exception;

import lombok.Getter;

@Getter
public class ResourceNotFound extends RuntimeException
{

    private String resource;
    private Object identifier;

    public ResourceNotFound(String resource, Object identifier)
    {
        super(resource + " with identifier: " + identifier + " not found." );

        this.resource = resource;
        this.identifier = identifier;
    }
}
