package com.example.repository;

import com.example.entity.KeHoach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface KeHoachRepo extends JpaRepository<KeHoach, Long>, JpaSpecificationExecutor<KeHoach> {
}
