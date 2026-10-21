package dev.luann.userservice.user.dto;

import dev.luann.userservice.user.enums.UserState;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
        String password,

        @NotBlank
        @Size(min = 11, max = 11)
        String cpf,

        @NotBlank
        @Size(min = 8, max = 8)
        String cep,

        @NotBlank
        @Size(min = 10, max = 11)
        String phone,

        @NotNull
        UserState state,

        @NotBlank
        @Size(min = 3, max = 64)
        String city,

        @NotBlank
        @Size(min = 3, max = 64)
        String neighborhood,

        @NotBlank
        @Size(min = 3, max = 64)
        String street,

        @NotBlank
        @Size(min = 1, max = 8)
        String number,

        @Size(max = 64)
        String complement

)
{
}
