package dev.luann.userservice.user;

import dev.luann.userservice.user.dto.UserResponse;
import org.springframework.stereotype.Component;

@Component
public class UserMapper
{
    public UserResponse toResponse(User user)
    {
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                user.getCreatedAt(),
                user.getUpdatedAt()
        );
    }
}
