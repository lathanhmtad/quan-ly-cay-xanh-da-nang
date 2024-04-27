package com.example.entity;

public enum VaiTroType {
    NHAN_VIEN_HO_TRO("Nhân viên hỗ trợ"),
    NHAN_VIEN_CHAM_SOC("Nhân viên chăm sóc"),
    ADMIN("Admin");

    public final String label;

    VaiTroType(String label) {
        this.label = label;
    }
}
