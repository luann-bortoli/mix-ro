package dev.luann.userservice.user.dto;

import jakarta.validation.constraints.Size;

public record UserPatchRequest(

        @Size(min = 3, max = 64)
        String name,

        @Size(min = 3, max = 64)
        String email,

        @Size(min = 8, max = 32)
        String password
)
{}