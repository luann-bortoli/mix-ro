package dev.luann.userservice.user.dto;

import dev.luann.userservice.user.enums.UserRole;
import dev.luann.userservice.user.enums.UserState;

import java.time.LocalDateTime;
import java.util.UUID;

public record UserResponse(

        UUID id,

        String name,

        String email,

        UserRole role,

        String cpf,

        String cep,

        String phone,

        UserState state,

        String city,

        String neighborhood,

        String street,

        String number,

        String complement,

        LocalDateTime createdAt,

        LocalDateTime updatedAt
)
{
}
