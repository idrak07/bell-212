package com.genuinecoder.springserver.web.rest;

import com.genuinecoder.springserver.domain.Tutorial;
import com.genuinecoder.springserver.domain.enumeration.Chapter;
import com.genuinecoder.springserver.domain.enumeration.Topic;
import com.genuinecoder.springserver.service.TutorialService;
import com.genuinecoder.springserver.service.errors.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TutorialResource {
    private static final Logger log = LoggerFactory.getLogger(TutorialResource.class);


    private final TutorialService tutorialService;

    public TutorialResource(TutorialService tutorialService) {
        this.tutorialService = tutorialService;
    }

    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial> create(@RequestBody Tutorial tutorial) {
        tutorial = tutorialService.save(tutorial);
        return new ResponseEntity<>(tutorial, HttpStatus.CREATED);
    }

    @PutMapping("/tutorials")
    public ResponseEntity<Tutorial> update(@RequestBody Tutorial tutorial) {
        tutorial = tutorialService.save(tutorial);
        return new ResponseEntity<>(tutorial, HttpStatus.ACCEPTED);
    }

    @GetMapping("/tutorials")
    public ResponseEntity<List<Tutorial>> getTutorialsByTopicAndChapter(@RequestParam(name = "topic")Topic topic, @RequestParam(name = "chapter")Chapter chapter) {
        log.debug("Rest request to get tutorials for topic: {}, and chapter: {}", topic, chapter);
        List<Tutorial> tutorials = tutorialService.findAllByTopicAndChapter(topic, chapter);
        return new ResponseEntity<>(tutorials, HttpStatus.OK);
    }

    @GetMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial> getTutorials(@PathVariable Long id) {
        Tutorial tutorial = tutorialService.findOne(id);
        return new ResponseEntity<>(tutorial, HttpStatus.OK);
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<Void> deleteTutorial(@RequestParam(name = "id")Long id) throws NotFoundException {
        tutorialService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
