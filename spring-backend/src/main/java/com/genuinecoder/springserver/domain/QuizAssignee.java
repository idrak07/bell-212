package com.genuinecoder.springserver.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class QuizAssignee implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private Long quizId;

    private Long userId;

    private Long points;

    private boolean attended = false;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPoints() {
        return points;
    }

    public void setPoints(Long points) {
        this.points = points;
    }

    public boolean isAttended() {
        return attended;
    }

    public void setAttended(boolean attended) {
        this.attended = attended;
    }

    @Override
    public String toString() {
        return "QuizAssignee{" +
                "id=" + id +
                ", quizId=" + quizId +
                ", userId=" + userId +
                ", points=" + points +
                '}';
    }
}
