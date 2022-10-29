package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.Question;
import com.genuinecoder.springserver.domain.Tutorial;
import com.genuinecoder.springserver.domain.enumeration.Chapter;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.repository.TutorialRepository;
import com.genuinecoder.springserver.service.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TutorialService {

    @Autowired
    private TutorialRepository tutorialRepository;

    public Tutorial save(Tutorial tutorial) {
        return tutorialRepository.save(tutorial);
    }

    public Tutorial update(Tutorial tutorial) {
        return tutorialRepository.save(tutorial);
    }

    public Tutorial findOne(Long id) {
        return tutorialRepository.findById(id).orElse(null);
    }

    public void delete (Long id) throws NotFoundException {
        Tutorial tutorial = tutorialRepository.findById(id).orElse(null);
        if (tutorial != null) {
            tutorialRepository.delete(tutorial);
        } else {
            throw new NotFoundException("Tutorial not found");
        }
    }

    public List<Tutorial> findAllByTopicAndChapter(Topic topic, Chapter chapter) {
        return tutorialRepository.findAllByTopicAndChapter(topic, chapter);
    }
}
