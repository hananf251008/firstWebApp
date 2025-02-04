package com.example.firstWebAppfinal.repository;

import com.example.firstWebAppfinal.entities.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user,Long> {
}
