package com.example.mapper;

import com.example.dto.donthu.DonThuRequest;
import com.example.dto.donthu.DonThuResponse;
import com.example.entity.ThongTinNguoiDanPhanAnh;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface DonThuMapper extends GenericMapper<ThongTinNguoiDanPhanAnh, DonThuRequest, DonThuResponse> {
    @Override
    @Mapping(source = "chiTietDiaChi.moTaDiaChi", target = "chiTietDiaChi.diaChiGanCayXanhNhat")
    @Mapping(source = "xuLyDonThu.trangThai", target = "trangThai")
    DonThuResponse entityToResponse(ThongTinNguoiDanPhanAnh entity);
}
