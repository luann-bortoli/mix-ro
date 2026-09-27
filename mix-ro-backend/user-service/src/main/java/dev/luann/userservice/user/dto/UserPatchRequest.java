package dev.luann.userservice.user.dto;

import dev.luann.userservice.user.enums.UserState;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserPatchRequest(

        @Size(min = 3, max = 64)
        String name,

        @Size(min = 3, max = 64)
        String email,

        @Size(min = 8, max = 32)
        String password,

        @Size(min = 11, max = 11)
        String cpf,

        @Size(min = 8, max = 8)
        String cep,

        @Size(min = 10, max = 11)
        String phone,

        @NotNull
        UserState state,

        @Size(min = 3, max = 64)
        String city,

        @Size(min = 3, max = 64)
        String neighborhood,

        @Size(min = 3, max = 64)
        String street,

        @Size(min = 1, max = 8)
        String number,

        @Size(max = 64)
        String complement
)
{}