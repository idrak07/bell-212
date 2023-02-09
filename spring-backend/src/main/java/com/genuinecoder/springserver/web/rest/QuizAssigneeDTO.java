package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.QuizAssignee;
import com.genuinecoder.springserver.domain.enumeration.Unit;

public class QuizAssigneeDTO extends QuizAssignee {
    private String firstName;
    private String lastName;
    private String branch;

    private String bdNo;

    private String svcNo;

    private Unit unit;

    private String phoneNo;

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

    public String getBdNo() {
        return bdNo;
    }

    public void setBdNo(String bdNo) {
        this.bdNo = bdNo;
    }

    public String getSvcNo() {
        return svcNo;
    }

    public void setSvcNo(String svcNo) {
        this.svcNo = svcNo;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
}
