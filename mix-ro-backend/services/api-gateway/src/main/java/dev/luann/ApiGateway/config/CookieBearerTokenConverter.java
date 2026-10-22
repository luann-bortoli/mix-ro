package dev.luann.ApiGateway.config;

import org.springframework.http.HttpCookie;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.server.resource.authentication.BearerTokenAuthenticationToken;
import org.springframework.security.web.server.authentication.ServerAuthenticationConverter;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class CookieBearerTokenConverter
        implements ServerAuthenticationConverter {

    public static final String COOKIE_NAME = "access_token";

    public static final String[] PUBLIC_POST_PATHS = {
            "/auth/login",
            "/auth/register",
            "/auth/logout"
    };

    @Override
    public Mono<Authentication> convert(ServerWebExchange exchange) {
        if (isPublicPost(exchange)) {
            return Mono.empty();
        }

        HttpCookie cookie = exchange.getRequest()
                .getCookies()
                .getFirst(COOKIE_NAME);

        if (cookie == null || cookie.getValue().isBlank()) {
            return Mono.empty();
        }

        return Mono.just(
                new BearerTokenAuthenticationToken(cookie.getValue())
        );
    }

    private boolean isPublicPost(ServerWebExchange exchange) {
        if (!"POST".equals(exchange.getRequest().getMethod().name())) {
            return false;
        }

        String path = exchange.getRequest().getPath().value();

        for (String publicPath : PUBLIC_POST_PATHS) {
            if (publicPath.equals(path)) {
                return true;
            }
        }

        return false;
    }
}
