package com.genuinecoder.springserver.service.errors;

public class NotFoundException extends Exception{

    public NotFoundException(String message) {
        super(message);
    }
}
