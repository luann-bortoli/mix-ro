package dev.luann.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler
{

    @ExceptionHandler(ResourceNotFound.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFound exception)
    {
        ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.NOT_FOUND);

        problemDetail.setTitle("Resource not found.");
        problemDetail.setDetail(exception.getMessage());
        problemDetail.setProperty("errorCode", "RESOURCE_NOT_FOUND");
        problemDetail.setProperty("resource", exception.getResource());
        problemDetail.setProperty("identifier", exception.getIdentifier());

        return problemDetail;
    }

    @ExceptionHandler(ResourceAlreadyExists.class)
    public ProblemDetail handleResourceAlreadyExists(ResourceAlreadyExists exception)
    {
        ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.CONFLICT);

        problemDetail.setTitle("Resource already exists");
        problemDetail.setDetail(exception.getMessage());
        problemDetail.setProperty("errorCode", "RESOURCE_ALREADY_EXISTS");
        problemDetail.setProperty("resource", exception.getResource());
        problemDetail.setProperty("identifier", exception.getIdentifier());

        return problemDetail;
    }

}
