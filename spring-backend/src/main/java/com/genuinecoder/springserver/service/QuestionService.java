package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.Question;
import com.genuinecoder.springserver.domain.enumeration.QuestionType;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.repository.QuestionRepository;
import com.genuinecoder.springserver.service.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Question save (Question question) {
        return questionRepository.save(question);
    }

    public Question findOne (Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public Question update (Question question) {
        return questionRepository.save(question);
    }

    public void delete (Long id) throws NotFoundException {
        Question question = questionRepository.findById(id).orElse(null);
        if (question != null) {
            questionRepository.delete(question);
        } else {
            throw new NotFoundException("Question not found");
        }
    }

    public List<Question> findByTopic(Topic topic) {
        return questionRepository.findALlByTopic(topic);
    }

    public List<Question> getQuestionsForMockQuiz(Topic topic, QuestionType questionType, Long limit) {
        List<Question> questions = questionRepository.findAllByTopicAndQuestionType(topic, questionType);
        if(!questions.isEmpty()) {
            Collections.shuffle(questions);
            return questions.subList(0,questions.size() > limit ? limit.intValue()  : questions.size());
        }
        return new ArrayList<>();
    }

    public List<Question> getQuestionsForQuiz(Long quizId) {
        List<Question> questions = questionRepository.findAllByQuizId(quizId);
        Collections.shuffle(questions);
        return questions;
    }
}
