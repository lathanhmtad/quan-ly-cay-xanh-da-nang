package com.example.config.security;

import com.example.entity.NguoiDung;
import com.example.repository.NguoiDungRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@AllArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private NguoiDungRepo nguoiDungRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        NguoiDung u = nguoiDungRepo.findByTenDangNhap(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        return MyUserDetails.build(u);
    }
}
