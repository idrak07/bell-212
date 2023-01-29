package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.User;
import com.genuinecoder.springserver.domain.UserAuthority;
import com.genuinecoder.springserver.repository.UserAuthoritiesRepository;
import com.genuinecoder.springserver.repository.UserRepository;
import com.genuinecoder.springserver.web.rest.TutorialResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
@Transactional
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    private final UserAuthoritiesRepository userAuthoritiesRepository;

    public UserService(UserRepository userRepository, UserAuthoritiesRepository userAuthoritiesRepository) {
        this.userRepository = userRepository;
        this.userAuthoritiesRepository = userAuthoritiesRepository;
    }

    public User create(User user) {
        List<UserAuthority> authorities = new ArrayList<>();
        user.getAuthorities().forEach(auth -> {
            authorities.add(new UserAuthority(user, auth));
        });
        userAuthoritiesRepository.saveAll(authorities);
        return userRepository.save(user);
    }
}
