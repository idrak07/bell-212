package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.Quiz;

public class QuizDTO extends Quiz {
    private boolean attended;

    public boolean isAttended() {
        return attended;
    }

    public void setAttended(boolean attended) {
        this.attended = attended;
    }
}
