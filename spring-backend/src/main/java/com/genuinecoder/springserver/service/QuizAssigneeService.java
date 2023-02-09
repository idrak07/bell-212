package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.QuizAssignee;
import com.genuinecoder.springserver.domain.User;
import com.genuinecoder.springserver.repository.QuizAssigneeRepository;
import com.genuinecoder.springserver.web.rest.QuizAssigneeDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class QuizAssigneeService {
    private final QuizAssigneeRepository quizAssigneeRepository;

    private final UserService userService;

    public QuizAssigneeService(QuizAssigneeRepository quizAssigneeRepository, UserService userService) {
        this.quizAssigneeRepository = quizAssigneeRepository;
        this.userService = userService;
    }

    public QuizAssignee save(QuizAssignee quizAssignee) {
        return quizAssigneeRepository.save(quizAssignee);
    }

    public QuizAssignee findOne(Long id) {
        return quizAssigneeRepository.findById(id).orElse(null);
    }

    public void delete (Long id) {
        quizAssigneeRepository.deleteById(id);
    }

    public List<QuizAssigneeDTO> findAllAssigneesByQuizId(Long quizId) {
        List<QuizAssignee> quizAssignees = quizAssigneeRepository.findAllByQuizId(quizId);
        List<QuizAssigneeDTO> quizAssigneeDTOS = new ArrayList<>();
        quizAssignees.forEach(quizAssignee -> quizAssigneeDTOS.add(createDTOs(quizAssignee)));
        return quizAssigneeDTOS;
    }

    private QuizAssigneeDTO createDTOs(QuizAssignee quizAssignee) {
        User user = userService.findById(quizAssignee.getUserId()).orElse(null);
        QuizAssigneeDTO quizAssigneeDTO = new QuizAssigneeDTO(user.getFirstName(), user.getLastName(), user.getBranch());
        quizAssigneeDTO.setId(quizAssignee.getId());
        quizAssigneeDTO.setQuizId(quizAssignee.getQuizId());
        quizAssigneeDTO.setUserId(quizAssignee.getUserId());
        return quizAssigneeDTO;
    }

    public void saveAllUsersForQuiz(List<Long> userIds, Long quizId) {
        List<QuizAssignee> quizAssignees = quizAssigneeRepository.findAllByQuizId(quizId);
        List<Long> allAssignees = quizAssignees.stream()
                .map(QuizAssignee::getUserId).collect(Collectors.toList());
        List<Long> newAssignedIds = userIds.stream().filter(userid -> !allAssignees.contains(userid)).toList();
        newAssignedIds.forEach(userId -> {
            QuizAssignee quizAssignee = new QuizAssignee();
            quizAssignee.setUserId(userId);
            quizAssignee.setQuizId(quizId);
            quizAssigneeRepository.save(quizAssignee);
        });

        List<Long> deletedIds = allAssignees.stream().filter(userid -> !userIds.contains(userid)).toList();
        newAssignedIds.forEach(userId -> {
            QuizAssignee quizAssignee = quizAssigneeRepository.findByQuizIdAndUserId(quizId, userId);
            quizAssigneeRepository.delete(quizAssignee);
        });
    }
}
