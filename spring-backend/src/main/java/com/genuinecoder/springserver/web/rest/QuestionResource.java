package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.Question;
import com.genuinecoder.springserver.domain.enumeration.QuestionType;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.service.QuestionService;
import com.genuinecoder.springserver.service.errors.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionResource {
    private static Logger log = LoggerFactory.getLogger(QuestionResource.class);

    @Autowired
    private QuestionService questionService;

    @PostMapping("/questions")
    public ResponseEntity<Question> create(@RequestBody Question question) {
        question = questionService.save(question);
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @PutMapping("/questions")
    public ResponseEntity<Question> update(@RequestBody Question question) {
        question = questionService.save(question);
        return new ResponseEntity<>(question, HttpStatus.ACCEPTED);
    }

    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getQuestionsByType(@RequestParam(name = "topic")Topic topic) {
        List<Question> questions = questionService.findByTopic(topic);
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @GetMapping("/questions/{id}")
    public ResponseEntity<Question> getQuestions(@PathVariable Long id) {
        Question question = questionService.findOne(id);
        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @DeleteMapping("/questions")
    public ResponseEntity<Void> deleteQuestion(@RequestParam(name = "id")Long id) throws NotFoundException {
        questionService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping("/quiz")
//    public ResponseEntity<List<Question>> getQuestionsForQuiz(@RequestParam(name = "topic") Topic topic, @RequestParam(name = "questionType")QuestionType questionType, @RequestParam(name = "limit")Long limit) {
//        List<Question> questions = questionService.getQuestionsForQuiz(topic, questionType, limit);
//        return new ResponseEntity<>(questions, HttpStatus.OK);
//    }

}
