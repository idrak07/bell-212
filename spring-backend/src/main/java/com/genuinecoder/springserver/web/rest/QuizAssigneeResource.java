package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.service.QuizAssigneeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizAssigneeResource {
    private final QuizAssigneeService quizAssigneeService;

    public QuizAssigneeResource(QuizAssigneeService quizAssigneeService) {
        this.quizAssigneeService = quizAssigneeService;
    }

    @GetMapping("/quizAssignees/{quizId}")
    public ResponseEntity<List<QuizAssigneeDTO>> getAssigneesByQuizId(@PathVariable Long quizId) {
        List<QuizAssigneeDTO> quizAssigneeDTOS = quizAssigneeService.findAllAssigneesByQuizId(quizId);
        return new ResponseEntity<>(quizAssigneeDTOS, HttpStatus.OK);
    }

    @PostMapping("/quizAssignees/{quizId}")
    public ResponseEntity<Void> saveAllAssignedUser(@PathVariable Long quizId, @RequestBody List<Long> userIds) {
        quizAssigneeService.saveAllUsersForQuiz(userIds, quizId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
