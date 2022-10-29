package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.Tutorial;
import com.genuinecoder.springserver.domain.enumeration.Chapter;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
    List<Tutorial> findAllByTopicAndChapter(Topic topic, Chapter chapter);
}
