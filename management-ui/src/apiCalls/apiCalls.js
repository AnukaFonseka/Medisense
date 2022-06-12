function getApiServerUrl() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://127.0.0.1:10001";
    } else {
        return window.location.origin;
    }
}

