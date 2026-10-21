package dev.luann.userservice.user.event;

import java.util.UUID;

public record UserCreatedEvent(

        UUID userId,
        String name,
        String email
)
{
}
