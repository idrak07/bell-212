package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.Quiz;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.service.QuizService;
import com.genuinecoder.springserver.service.errors.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizResource {
    private final QuizService quizService;

    public QuizResource(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping("/quiz")
    public ResponseEntity<Quiz> create(@RequestBody Quiz quiz) {
        quiz = quizService.save(quiz);
        return new ResponseEntity<>(quiz, HttpStatus.CREATED);
    }

    @PutMapping("/quiz")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
        quiz = quizService.save(quiz);
        return new ResponseEntity<>(quiz, HttpStatus.ACCEPTED);
    }

    @GetMapping("/quizzes/by-topic")
    public ResponseEntity<List<Quiz>> getQuizzesByType(@RequestParam(name = "topic") Topic topic) {
        List<Quiz> quizzes = quizService.findByTopic(topic);
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @GetMapping("/quiz/{id}")
    public ResponseEntity<Quiz> getQuizzes(@PathVariable Long id) {
        Quiz quiz = quizService.findOne(id);
        return new ResponseEntity<>(quiz, HttpStatus.OK);
    }

    @DeleteMapping("/quiz")
    public ResponseEntity<Void> deleteQuiz(@RequestParam(name = "id")Long id) throws NotFoundException {
        quizService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
