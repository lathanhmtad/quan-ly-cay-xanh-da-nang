import BaseResponse from "./BaseResponse";

export interface QuanHuyenResponse extends BaseResponse {
    maQuan: number
    tenQuan: string
    tongPhuongXa: number
    tongSoCay: number
}

export interface PhuongXaResponse extends BaseResponse {
    maPhuong: number
    tenPhuong: string
    tenQuan: string
    tongTuyenDuong: number
    tongSoCayTrongPhuongXa: number
}

export interface TuyenDuongResponse extends BaseResponse {
    maTuyenDuong: number
    tenTuyenDuong: string
    tenPhuongXa: string
    tenQuan: string
    tongCongVien: number
    tongSoCay: number
}

export interface CongVienResponse extends BaseResponse {
    maCongVien: number
    tenCongVien: string
    tenQuan: string
    tenPhuong: string
    tuyenDuong: string[]
    tongSoCay: number
}

