package com.example.repository;

import com.example.entity.Cay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CayRepo extends JpaRepository<Cay, Long>, JpaSpecificationExecutor<Cay> {
}
