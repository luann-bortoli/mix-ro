package dev.luann.userservice.user.dto;

import dev.luann.userservice.user.enums.UserRole;

import java.time.LocalDateTime;
import java.util.UUID;

public record UserResponse(

        UUID id,

        String name,

        String email,

        UserRole role,

        LocalDateTime createdAt,

        LocalDateTime updatedAt
)
{
}
