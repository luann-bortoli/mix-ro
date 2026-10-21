package dev.luann.userservice.user;

import dev.luann.userservice.user.dto.UserRequest;
import dev.luann.userservice.user.dto.UserResponse;
import dev.luann.userservice.user.enums.UserRole;
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
                user.getCpf(),
                user.getCep(),
                user.getPhone(),
                user.getState(),
                user.getCity(),
                user.getNeighborhood(),
                user.getStreet(),
                user.getNumber(),
                user.getComplement(),
                user.getCreatedAt(),
                user.getUpdatedAt()
        );
    }

    public User toEntity(UserRequest request, String encodedPassword)
    {
        User user = new User();

        user.setName(request.name());
        user.setEmail(request.email());
        user.setRole(UserRole.ROLE_CUSTOMER);
        user.setPassword(encodedPassword);
        user.setCpf(request.cpf());
        user.setCep(request.cep());
        user.setPhone(request.phone());
        user.setState(request.state());
        user.setCity(request.city());
        user.setNeighborhood(request.neighborhood());
        user.setStreet(request.street());
        user.setNumber(request.number());
        user.setComplement(request.complement());

        return user;
    }
}
