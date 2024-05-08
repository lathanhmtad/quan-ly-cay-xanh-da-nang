package com.example.mapper;

import com.example.dto.address.CongVienResponse;
import com.example.entity.CongVien;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {TuyenDuongMapper.class})
public interface CongVienMapper extends GenericMapper<CongVien, Object, CongVienResponse> {
}
