package com.example;

import com.example.entity.CongVien;
import com.example.repository.CongVienRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class CongVienTests {

    @Autowired
    private CongVienRepo congVienRepo;
    @Test
    @Transactional
    void testGet() {
        CongVien congVien = congVienRepo.findById(1L).get();

        System.out.println(congVien);

    }
}
