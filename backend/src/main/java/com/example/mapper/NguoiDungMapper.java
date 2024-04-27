package com.example.mapper;

import com.example.dto.user.NguoiDungRequest;
import com.example.dto.user.NguoiDungResponse;
import com.example.entity.NguoiDung;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NguoiDungMapper extends GenericMapper<NguoiDung, NguoiDungRequest, NguoiDungResponse> {
    @Mapping(source = "doiNgu.tenDoiNgu", target = "doiNgu")
    NguoiDungResponse entityToResponse(NguoiDung entity);
}
