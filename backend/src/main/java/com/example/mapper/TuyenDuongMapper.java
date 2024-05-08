package com.example.mapper;

import com.example.dto.address.TuyenDuongResponse;
import com.example.entity.TuyenDuong;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {PhuongXaMapper.class})
public interface TuyenDuongMapper extends GenericMapper<TuyenDuong, Object, TuyenDuongResponse> {

    @Override
    TuyenDuongResponse entityToResponse(TuyenDuong entity);
}
