package dev.luann.userservice.user;

import dev.luann.userservice.exception.EmailAlreadyExists;
import dev.luann.userservice.exception.ResourceNotFound;
import dev.luann.userservice.user.dto.UserPatchRequest;
import dev.luann.userservice.user.dto.UserRequest;
import dev.luann.userservice.user.dto.UserResponse;
import dev.luann.userservice.user.enums.UserRole;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService
{

    private final UserRepository repository;
    private final UserMapper mapper;
    private final PasswordEncoder passwordEncoder;

    private User findUserById(UUID id)
    {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("user", id));
    }

    private void verifyEmailExistence(String email)
    {
        if(email == null || email.isBlank()) return;

        if (repository.findByEmail(email).isPresent())
        {
            throw new EmailAlreadyExists(email);
        }
    }

    public UserResponse findById(UUID id)
    {
        User user = findUserById(id);

        return mapper.toResponse(user);
    }

    public Page<UserResponse> findAll(Pageable pageable)
    {
        return repository.findAll(pageable)
                .map(mapper::toResponse);
    }

    @Transactional
    public UserResponse create(UserRequest request)
    {
        verifyEmailExistence(request.email());

        User newUser = new User();

        newUser.setName(request.name());
        newUser.setEmail(request.email());
        newUser.setPassword(passwordEncoder.encode(request.password()));
        newUser.setRole(UserRole.ROLE_CUSTOMER);

        return mapper.toResponse(repository.save(newUser));
    }

    @Transactional
    public UserResponse patch(UUID id, UserPatchRequest request)
    {
        verifyEmailExistence(request.email());

        User current = findUserById(id);

        if (request.name() != null
                && !(request.name().isBlank()))
        {
            current.setName(request.name());
        }

        if (request.email() != null
                &&!(request.email().isBlank()))
        {
            current.setEmail(request.email());
        }

        if (request.password() != null
                && !(request.password().isBlank()))
        {
            current.setPassword(
                    passwordEncoder.encode(request.password())
            );
        }

        User saved = repository.save(current);

        return mapper.toResponse(saved);
    }

    @Transactional
    public void delete(UUID id)
    {
        User target = findUserById(id);

        repository.delete(target);
    }
}
