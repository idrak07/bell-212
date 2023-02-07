package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.Quiz;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

    List<Quiz> findAllByTopicOrderByIdDesc(Topic topic);
}
