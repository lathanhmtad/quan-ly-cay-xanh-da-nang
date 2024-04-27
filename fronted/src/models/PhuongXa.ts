import {QuanHuyenResponse} from "./QuanHuyen";

export interface PhuongXaResponse {
    maPhuong: number
    tenPhuong: string
    quanHuyen: QuanHuyenResponse
}