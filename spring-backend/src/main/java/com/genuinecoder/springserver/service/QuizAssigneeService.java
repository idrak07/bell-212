package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.Quiz;
import com.genuinecoder.springserver.domain.QuizAssignee;
import com.genuinecoder.springserver.domain.User;
import com.genuinecoder.springserver.repository.QuizAssigneeRepository;
import com.genuinecoder.springserver.web.rest.QuizAssigneeDTO;
import com.genuinecoder.springserver.web.rest.QuizDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
public class QuizAssigneeService {
    private final QuizAssigneeRepository quizAssigneeRepository;

    private final UserService userService;

    private final QuizService quizService;

    @Autowired
    private MailService mailService;

    Logger log = LoggerFactory.getLogger(QuizAssigneeService.class);

    public QuizAssigneeService(QuizAssigneeRepository quizAssigneeRepository, UserService userService, QuizService quizService) {
        this.quizAssigneeRepository = quizAssigneeRepository;
        this.userService = userService;
        this.quizService = quizService;
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
        quizAssigneeDTO.setPoints(quizAssignee.getPoints());
        quizAssigneeDTO.setBdNo(user.getBdNo());
        quizAssigneeDTO.setSvcNo(user.getSvcNo());
        quizAssigneeDTO.setUnit(user.getUnit());
        quizAssigneeDTO.setPhoneNo(user.getPhoneNo());
        return quizAssigneeDTO;
    }

    public void saveAllUsersForQuiz(List<Long> userIds, Long quizId) {
        List<QuizAssignee> quizAssignees = quizAssigneeRepository.findAllByQuizId(quizId);
        List<Long> allAssignees = quizAssignees.stream()
                .map(QuizAssignee::getUserId).collect(Collectors.toList());
        log.info("ÄllAssignees: {}", allAssignees);
        List<Long> newAssignedIds = userIds.stream().filter(userid -> !allAssignees.contains(userid)).toList();
        log.info("newAssignedIds: {}", newAssignedIds);
        newAssignedIds.forEach(userId -> {
            QuizAssignee quizAssignee = new QuizAssignee();
            quizAssignee.setUserId(userId);
            quizAssignee.setQuizId(quizId);
            quizAssignee.setPoints(0L);
            log.info("QuizAssignee: {}", quizAssignee);
            quizAssignee = quizAssigneeRepository.save(quizAssignee);
            log.info("QuizAssignee: {}", quizAssignee);
            User user = userService.findById(userId).orElse(null);
            Mail mail = new Mail();
            mail.setTo(user.getEmail());
            Quiz quiz = quizService.findOne(quizId);
            mail.setSubject(quiz.getTitle());
            Map<String, Object> model = new HashMap<String, Object>();
            model.put("name", quiz.getTitle());
            model.put("startDate", quiz.getStartTime().format(DateTimeFormatter.ofPattern("dd MMMM, yyyy hh:mm a")));
            model.put("endDate", quiz.getEndTime().format(DateTimeFormatter.ofPattern("dd MMMM, yyyy hh:mm a")));
            model.put("topic", quiz.getTopic().name());
            mail.setTemplateName("quiz");
            mail.setVariables(model);
            try {
                mailService.sendEmail(mail);
            } catch (Exception e) {

            }
        });

        List<Long> deletedIds = allAssignees.stream().filter(userid -> !userIds.contains(userid)).toList();
        deletedIds.forEach(userId -> {
            QuizAssignee quizAssignee = quizAssigneeRepository.findByQuizIdAndUserId(quizId, userId);
            quizAssigneeRepository.delete(quizAssignee);
        });
    }

    public List<QuizDTO> getQuizzesForUser(Long userId) {
        List<QuizAssignee> quizAssignees = quizAssigneeRepository.findAllByUserId(userId);
        List<Long> quizIds = quizAssignees.stream()
                .map(QuizAssignee::getQuizId).collect(Collectors.toList());

        List<QuizDTO> quizDTOS = new ArrayList<>();
        List<Quiz> quizzes =  quizService.findAllQUizzesEndLater(quizIds);
        log.info("quizz: {}", quizzes);
        quizzes.forEach(quiz -> {
            QuizDTO quizDTO = new QuizDTO();
            BeanUtils.copyProperties(quiz, quizDTO);
            quizDTO.setAttended(quizAssignees.stream().filter(qa -> qa.getQuizId().equals(quiz.getId())).findFirst().get().isAttended());
            quizDTOS.add(quizDTO);
        });
        return quizDTOS;
    }

    public void storeMarks(Long quizId, Long userId, Long point) {
        QuizAssignee quizAssignee = quizAssigneeRepository.findByQuizIdAndUserId(quizId, userId);
        quizAssignee.setPoints(point);
        quizAssigneeRepository.save(quizAssignee);
    }

    public void attend(Long quizId, Long userId) {
        QuizAssignee quizAssignee = quizAssigneeRepository.findByQuizIdAndUserId(quizId, userId);
        quizAssignee.setAttended(true);
        quizAssigneeRepository.save(quizAssignee);
    }
}
