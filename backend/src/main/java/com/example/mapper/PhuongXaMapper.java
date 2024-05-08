package com.example.mapper;

import com.example.dto.address.PhuongXaResponse;
import com.example.entity.ChiTietDiaChi;
import com.example.entity.PhuongXa;
import com.example.entity.TuyenDuong;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PhuongXaMapper extends GenericMapper<PhuongXa, Object, PhuongXaResponse> {

    @Override
    @Mapping(target = "tongSoCayTrongPhuongXa", expression = "java(getTotalCayInPhuongXa(entity.getChiTietDiaChi()))")
    @Mapping(target = "tongTuyenDuongCongVien", expression = "java(getTotalTuyenDuongCongVienInPhuongXa(entity.getTuyenDuong()))")
    PhuongXaResponse entityToResponse(PhuongXa entity);

    default int getTotalCayInPhuongXa(List<ChiTietDiaChi> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }
        return input.size();
    }

    default int getTotalTuyenDuongCongVienInPhuongXa(List<TuyenDuong> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }
        return input.size();
    }
}
