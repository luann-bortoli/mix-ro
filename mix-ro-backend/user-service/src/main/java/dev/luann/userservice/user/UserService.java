package dev.luann.userservice.user;

import dev.luann.userservice.exception.EmailAlreadyExists;
import dev.luann.userservice.exception.ResourceNotFound;
import dev.luann.userservice.messaging.kafka.UserEventProducer;
import dev.luann.userservice.user.dto.UserPatchRequest;
import dev.luann.userservice.user.dto.UserRequest;
import dev.luann.userservice.user.dto.UserResponse;
import dev.luann.userservice.user.event.UserCreatedEvent;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.function.Consumer;

@RequiredArgsConstructor
@Service
public class UserService
{

    private final UserRepository repository;
    private final UserMapper mapper;
    private final PasswordEncoder passwordEncoder;
    private final UserEventProducer eventProducer;

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

    private void updateIfPresent(
            String value,
            Consumer<String> setter)
    {
        if (value != null && !value.isBlank())
        {
            setter.accept(value);
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

        String encodedPassword = passwordEncoder.encode(request.password());

        User newUser = mapper.toEntity(request, encodedPassword);

        User saved = repository.save(newUser);

        eventProducer.sendUserCreated(
                new UserCreatedEvent(
                        saved.getId(),
                        saved.getName(),
                        saved.getEmail()
                )
        );

        return mapper.toResponse(saved);
    }

    @Transactional
    public UserResponse patch(UUID id, UserPatchRequest request)
    {
        verifyEmailExistence(request.email());

        User current = findUserById(id);

        updateIfPresent(request.name(), current::setName);
        updateIfPresent(request.email(), current::setEmail);
        updateIfPresent(request.cpf(), current::setCpf);
        updateIfPresent(request.cep(), current::setCep);
        updateIfPresent(request.phone(), current::setPhone);
        updateIfPresent(request.city(), current::setCity);
        updateIfPresent(request.neighborhood(), current::setNeighborhood);
        updateIfPresent(request.street(), current::setStreet);
        updateIfPresent(request.number(), current::setNumber);
        updateIfPresent(request.complement(), current::setComplement);

        if (request.password() != null && !request.password().isBlank())
        {
            current.setPassword(
                    passwordEncoder.encode(request.password())
            );
        }

        if (request.state() != null)
        {
            current.setState(request.state());
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
