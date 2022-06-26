package com.medisense.apiserver.controller;

import com.medisense.apiserver.config.JwtHelper;
import com.medisense.apiserver.config.WebSecurityConfig;
import com.medisense.apiserver.entities.LoginResult;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class AuthController {
    private final JwtHelper jwtHelper;
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    private static final Logger logger= LogManager.getLogger(AuthController.class);

    public AuthController(JwtHelper jwtHelper, UserDetailsService userDetailsService,
                          PasswordEncoder passwordEncoder) {
        this.jwtHelper = jwtHelper;
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping(path = "loginUser", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public LoginResult login(
            @RequestParam String username,
            @RequestParam String password) {

        logger.info("Login request received");

        UserDetails userDetails;
        try {
            userDetails = userDetailsService.loadUserByUsername(username);
        } catch (UsernameNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found");
        }

        if (passwordEncoder.matches(password, userDetails.getPassword())) {
            Map<String, String> claims = new HashMap<>();
            claims.put("username", username);

            String authorities = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.joining(" "));
            claims.put(WebSecurityConfig.AUTHORITIES_CLAIM_NAME, authorities);

            String jwt = jwtHelper.createJwtForClaims(username, claims);
            logger.info("Authenticated user [{}]", userDetails.getUsername());
            return new LoginResult(jwt, "200", "Success");
        }

        logger.error("Authentication failed for user [{}]", userDetails.getUsername());
        return new LoginResult(null, "420", "Failure");
    }
}
