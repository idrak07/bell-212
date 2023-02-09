package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.Quiz;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.repository.QuizRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quiz save (Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz findOne (Long id) {
        return quizRepository.findById(id).orElse(null);
    }

    public List<Quiz> findByTopic(Topic topic) {
        return quizRepository.findAllByTopicOrderByIdDesc(topic);
    }

    public void delete(Long id) {
        quizRepository.deleteById(id);
    }

    public List<Quiz> findAllQUizzesEndLater(List<Long> quizIds) {
        List<Quiz> quizzes = quizRepository.findAllById(quizIds);
        return quizzes.stream().filter(quiz -> quiz.getEndTime().isAfter(LocalDateTime.now())).toList();
    }
}
