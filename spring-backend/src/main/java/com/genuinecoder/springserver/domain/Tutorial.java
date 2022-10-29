package com.genuinecoder.springserver.domain;

import com.genuinecoder.springserver.domain.enumeration.Chapter;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

@Entity
public class Tutorial {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Topic topic;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Chapter chapter;

    @NotNull
    private String subject;

    @NotNull
    private String link;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
