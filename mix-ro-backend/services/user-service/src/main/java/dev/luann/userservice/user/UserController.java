package dev.luann.userservice.user;

import dev.luann.userservice.user.dto.UserPatchRequest;
import dev.luann.userservice.user.dto.UserRequest;
import dev.luann.userservice.user.dto.UserResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController
{
    private final UserService service;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> findById(
            @PathVariable UUID id)
    {
        return new ResponseEntity<>(
                service.findById(id),
                HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity<Page<UserResponse>> findAll(
            Pageable pageable)
    {
        return new ResponseEntity<>(
                service.findAll(pageable),
                HttpStatus.OK
        );
    }

    @PatchMapping("/{id}")
    public ResponseEntity<UserResponse> patch(
            @PathVariable UUID id, @Valid @RequestBody UserPatchRequest request)
    {
        return new ResponseEntity<>(
                service.patch(id, request),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable UUID id)
    {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }


}
