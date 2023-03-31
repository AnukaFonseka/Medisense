package com.medisense.apiserver.entities;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class HttpResult {
    private String status;

    private String statusCode;

    private Object data;

    public HttpResult(String status, String statusCode) {
        this.status = status;
        this.statusCode = statusCode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "HttpResult{" +
                "status='" + status + '\'' +
                ", statusCode='" + statusCode + '\'' +
                ", data=" + data +
                '}';
    }
}
