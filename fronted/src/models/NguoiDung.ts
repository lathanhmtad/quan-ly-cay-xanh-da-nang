import BaseResponse from "./BaseResponse";

export interface NguoiDungResponse extends BaseResponse {
    maNguoiDung: number
    hoVaTen: string
    ngaySinh: string
    email: string
    sdt: string
    tenDangNhap: string
    vaiTro: string
    diaChi: string
    doiNgu: string
}