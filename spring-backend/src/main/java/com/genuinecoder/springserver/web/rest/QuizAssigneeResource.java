package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.Quiz;
import com.genuinecoder.springserver.service.QuizAssigneeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizAssigneeResource {

    Logger log = LoggerFactory.getLogger(QuizAssigneeResource.class);
    private final QuizAssigneeService quizAssigneeService;

    public QuizAssigneeResource(QuizAssigneeService quizAssigneeService) {
        this.quizAssigneeService = quizAssigneeService;
    }

    @GetMapping("/quizAssignees/users/{quizId}")
    public ResponseEntity<List<QuizAssigneeDTO>> getAssigneesByQuizId(@PathVariable Long quizId) {
        List<QuizAssigneeDTO> quizAssigneeDTOS = quizAssigneeService.findAllAssigneesByQuizId(quizId);
        return new ResponseEntity<>(quizAssigneeDTOS, HttpStatus.OK);
    }

    @PostMapping("/quizAssignees/users/{quizId}")
    public ResponseEntity<Void> saveAllAssignedUser(@PathVariable Long quizId, @RequestBody List<Long> userIds) {
        log.info("UserIds: {}", userIds);
        quizAssigneeService.saveAllUsersForQuiz(userIds, quizId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/quizAssignees/quizzes/{userId}")
    public ResponseEntity<List<Quiz>> getUsersActiveQuiz(@PathVariable Long userId) {
        List<Quiz> quizzes = quizAssigneeService.getQuizzesForUser(userId);
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @GetMapping("/quizAssignees/quiz/{quizId}/user/{userId}/{point}")
    public ResponseEntity<Void> storePoints(@PathVariable Long quizId, @PathVariable Long userId, @PathVariable Long point) {
        quizAssigneeService.storeMarks(quizId, userId, point);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/quizAssignees/quiz/{quizId}/user/{userId}/attend")
    public ResponseEntity<Void> attendMark(@PathVariable Long quizId, @PathVariable Long userId) {
        quizAssigneeService.attend(quizId, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
