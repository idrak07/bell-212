package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.QuizAssignee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizAssigneeRepository extends JpaRepository<QuizAssignee, Long> {
}
