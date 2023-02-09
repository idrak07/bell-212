package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.QuizAssignee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizAssigneeRepository extends JpaRepository<QuizAssignee, Long> {

    List<QuizAssignee> findAllByUserId(Long userId);

    List<QuizAssignee> findAllByQuizId(Long quizId);
}
