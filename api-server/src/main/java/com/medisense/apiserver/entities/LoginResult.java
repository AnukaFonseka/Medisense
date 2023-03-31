package com.medisense.apiserver.entities;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LoginResult {

    private String token;

    private String status;

    private String statusDescription;

    public LoginResult(String token, String status, String statusDescription) {
        this.token = token;
        this.status = status;
        this.statusDescription = statusDescription;
    }

}

