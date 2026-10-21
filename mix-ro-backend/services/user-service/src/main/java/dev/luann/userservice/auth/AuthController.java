package dev.luann.userservice.auth;

import dev.luann.userservice.auth.dto.LoginRequest;
import dev.luann.userservice.auth.security.JwtService;
import dev.luann.userservice.exception.ResourceNotFound;
import dev.luann.userservice.messaging.kafka.UserEventProducer;
import dev.luann.userservice.user.User;
import dev.luann.userservice.user.UserMapper;
import dev.luann.userservice.user.UserRepository;
import dev.luann.userservice.user.UserService;
import dev.luann.userservice.user.dto.UserRequest;
import dev.luann.userservice.user.dto.UserResponse;
import dev.luann.userservice.user.event.UserCreatedEvent;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController
{
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    private final PasswordEncoder encoder;

    private final UserRepository repository;
    private final UserMapper mapper;
    private final UserService service;
    private final UserEventProducer eventProducer;

    @PostMapping("/register")
    public void register(
            @Valid @RequestBody UserRequest request
        )
    {
        service.verifyEmailExistence(request.email());
        service.verifyCpfExistence(request.cpf());
        service.verifyPhoneExistence(request.phone());

        String encodedPassword = encoder.encode(request.password());

        User newUser = mapper.toEntity(request, encodedPassword);

        User saved = repository.save(newUser);

        eventProducer.sendUserCreated(
                new UserCreatedEvent(
                        saved.getId(),
                        saved.getName(),
                        saved.getEmail()
                )
        );
    }

    @PostMapping("/login")
    public void login(
            @Valid @RequestBody LoginRequest request,
            HttpServletResponse response
            ){
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        String role = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("User role not found"));


        String token = jwtService.generateToken(authentication.getName(), role);

        ResponseCookie cookie = ResponseCookie
                .from("access_token", token)
                .httpOnly(true)
                // Remind: Change to true on production
                .secure(false)
                .path("/")
                .sameSite("Lax")
                .maxAge(jwtService.getExpirationSeconds())
                .build();

        response.addHeader(
                HttpHeaders.SET_COOKIE,
                cookie.toString()
        );
    }

    @PostMapping("/logout")
    public void logout(HttpServletResponse response)
    {
        ResponseCookie cookie = ResponseCookie
                .from("access_token", "")
                .httpOnly(true)
                // Remind: change to true on production
                .secure(false)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> me(
            @AuthenticationPrincipal UserDetails userDetails
    ){
        User user = repository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new ResourceNotFound("user", userDetails.getUsername()));

        return new ResponseEntity<>(
                mapper.toResponse(user),
                HttpStatus.OK
        );
    }
}
