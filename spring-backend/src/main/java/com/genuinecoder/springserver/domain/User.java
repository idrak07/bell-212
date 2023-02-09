package com.genuinecoder.springserver.domain;

import com.genuinecoder.springserver.domain.enumeration.Authorities;
import com.genuinecoder.springserver.domain.enumeration.BloodGroup;
import com.genuinecoder.springserver.domain.enumeration.Unit;

import javax.persistence.*;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String bdNo;

    private String password;

    private String svcNo;

    private String firstName;

    private String lastName;

    private String branch;

    @Enumerated(EnumType.STRING)
    private Unit unit;

    private Date dob;

    @Enumerated(EnumType.STRING)
    private BloodGroup bloodGroup;

    private String phoneNo;

    private Boolean activated = Boolean.FALSE;

    @Column(unique = true)
    private String email;


    private String imageKey;

    @Enumerated(EnumType.STRING)
    private Authorities authority;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBdNo() {
        return bdNo;
    }

    public void setBdNo(String bdNo) {
        this.bdNo = bdNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSvcNo() {
        return svcNo;
    }

    public void setSvcNo(String svcNo) {
        this.svcNo = svcNo;
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

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public BloodGroup getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(BloodGroup bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageKey() {
        return imageKey;
    }

    public void setImageKey(String imageKey) {
        this.imageKey = imageKey;
    }

    public Authorities getAuthority() {
        return authority;
    }

    public void setAuthority(Authorities authority) {
        this.authority = authority;
    }

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", bdNo='" + bdNo + '\'' +
                ", password='" + password + '\'' +
                ", svcNo='" + svcNo + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", branch='" + branch + '\'' +
                ", unit=" + unit +
                ", dob=" + dob +
                ", bloodGroup=" + bloodGroup +
                ", phoneNo='" + phoneNo + '\'' +
                ", email='" + email + '\'' +
                ", imageKey='" + imageKey + '\'' +
                ", authority=" + authority +
                ", activated=" + activated +
                '}';
    }
}
