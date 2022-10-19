package com.genuinecoder.springserver.web.rest.errors;

public class BadRequestAlertException extends Exception {
    public BadRequestAlertException(String message) {
        super(message);
    }
}
