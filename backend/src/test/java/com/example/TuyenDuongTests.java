package com.example;

import com.example.entity.TuyenDuong;
import com.example.repository.TuyenDuongRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class TuyenDuongTests {

    @Autowired
    TuyenDuongRepo tuyenDuongRepo;

    @Test
    @Transactional
    void testGet() {
        TuyenDuong tuyenDuong = tuyenDuongRepo.findById(4L).get();
        System.out.println(tuyenDuong);
    }
}
