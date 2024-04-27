package com.example.dto.kehoach;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class KeHoachResponse {
    private Long maKeHoach;
    private String tenKeHoach;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date hanHoanThanh;
    private Integer soLuong;
    private String diaDiem;
    private String noiDung;
}
