package dev.luann.userservice.user.userDetails;

import dev.luann.userservice.user.User;
import dev.luann.userservice.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailsService implements UserDetailsService
{
    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "User not found"
                ));

        return new CustomUserDetails(user);
    }
}
