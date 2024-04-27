package com.example.mapper;

import com.example.dto.kehoach.KeHoachRequest;
import com.example.dto.kehoach.KeHoachResponse;
import com.example.entity.KeHoach;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KeHoachMapper extends GenericMapper<KeHoach, KeHoachRequest, KeHoachResponse> {
}
