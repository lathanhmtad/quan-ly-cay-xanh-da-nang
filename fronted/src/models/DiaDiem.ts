import BaseResponse from "./BaseResponse";

export interface QuanHuyenResponse extends BaseResponse {
    maQuan: number
    tenQuan: string
    tongSoCay: number
    tongPhuongXa: number
    // phuongXa: PhuongXaWithTuyenDuongResponse[]
}

export interface PhuongXaResponse extends BaseResponse {
    maPhuong: number
    tenPhuong: string
    quanHuyen: QuanHuyenResponse
    tongSoCayTrongPhuongXa: number
    tongTuyenDuongCongVien: number
}

export interface CongVienResponse extends BaseResponse {
    maCongVien: number
    tenCongVien: string
    tuyenDuong: TuyenDuongResponse[]
}

export interface TuyenDuongResponse extends BaseResponse {
    maTuyenDuong: number
    tenTuyenDuong: string
    phuongXa: PhuongXaResponse
}
