package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.QuizAssignee;

public class QuizAssigneeDTO extends QuizAssignee {
    private String firstName;
    private String lastName;
    private String branch;

    public QuizAssigneeDTO(String firstName, String lastName, String branch) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.branch = branch;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }
}
