package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.Question;
import com.genuinecoder.springserver.domain.enumeration.QuestionType;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findALlByTopic(Topic topic);
    List<Question> findAllByTopicAndQuestionType(Topic topic, QuestionType questionType);
}
