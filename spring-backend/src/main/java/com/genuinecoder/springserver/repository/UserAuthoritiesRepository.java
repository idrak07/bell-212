package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.UserAuthority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthoritiesRepository extends JpaRepository<UserAuthority, Long> {
}
