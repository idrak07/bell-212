package com.genuinecoder.springserver.domain;

import com.genuinecoder.springserver.domain.enumeration.Authorities;
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class UserAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @NotNull
    private User user;

    @Enumerated(EnumType.STRING)
    private Authorities role;

    public UserAuthority(User user, Authorities role) {
        this.user = user;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Authorities getRole() {
        return role;
    }

    public void setRole(Authorities role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserAuthority{" +
                "id=" + id +
                ", user=" + user +
                ", role=" + role +
                '}';
    }
}
