package dev.luann.userservice.user;

import dev.luann.userservice.exception.ResourceAlreadyExists;
import dev.luann.userservice.exception.ResourceNotFound;
import dev.luann.userservice.user.dto.UserPatchRequest;
import dev.luann.userservice.user.dto.UserResponse;
import dev.luann.userservice.utils.Format;
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

    private User findUserById(UUID id)
    {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("user", id));
    }

    public void verifyEmailExistence(String email)
    {
        if(email == null || email.isBlank()) return;

        if (repository.findByEmail(email).isPresent())
        {
            throw new ResourceAlreadyExists("email", email);
        }
    }

    public void verifyCpfExistence(String cpf)
    {
        if(cpf == null || cpf.isBlank()) return;

        if (repository.findByCpf(cpf).isPresent())
        {
            throw new ResourceAlreadyExists("cpf", Format.cpf(cpf));
        }
    }
    public void verifyPhoneExistence(String phone)
    {
        if(phone == null || phone.isBlank()) return;

        if (repository.findByPhone(phone).isPresent())
        {
            throw new ResourceAlreadyExists("telefone", Format.phone(phone));
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
