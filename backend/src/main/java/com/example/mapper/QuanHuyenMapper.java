package com.example.mapper;

import com.example.dto.address.QuanHuyenResponse;
import com.example.entity.PhuongXa;
import com.example.entity.QuanHuyen;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuanHuyenMapper extends GenericMapper<QuanHuyen, Object, QuanHuyenResponse> {
    @Override
    @Mapping(target = "tongPhuongXa", expression = "java(getTotalPhuongXa(entity.getPhuongXa()))")
    QuanHuyenResponse entityToResponse(QuanHuyen entity);

    default int getTotalPhuongXa(List<PhuongXa> phuongXaList) {
        if (phuongXaList == null || phuongXaList.isEmpty()) {
            return 0;
        }
        return phuongXaList.size();
    }
}
