package com.example;

import com.example.entity.ChiTietDiaChi;
import com.example.repository.ChiTietDiaChiRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class ChiTietDiaChiTests {

    @Autowired
    private ChiTietDiaChiRepo chiTietDiaChiRepo;

    @Test
    @Transactional
    void testGet() {
        ChiTietDiaChi chiTietDiaChi = chiTietDiaChiRepo.findById(1L).get();

        System.out.println(chiTietDiaChi);
    }
}
