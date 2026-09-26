package dev.luann.userservice.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


public record UserRequest(

        @NotBlank
        @Size(min = 3, max = 64)
        String name,

        @NotBlank
        @Email
        @Size(min = 3, max = 64)
        String email,

        @NotBlank
        @Size(min = 8, max = 32)
        String password

)
{
}
