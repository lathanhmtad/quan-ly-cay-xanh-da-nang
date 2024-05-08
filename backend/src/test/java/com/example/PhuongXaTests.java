package com.example;

import com.example.entity.PhuongXa;
import com.example.repository.PhuongXaRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class PhuongXaTests {

    @Autowired
    PhuongXaRepo phuongXaRepo;

    @Test
    @Transactional
    void testGetPhuongXa() {
        PhuongXa phuongXa = phuongXaRepo.findById(1L).get();
        System.out.println(phuongXa);
    }
}
