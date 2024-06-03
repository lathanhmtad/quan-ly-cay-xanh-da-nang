import ResourceUrl from "../../constants/ResouceUrl";
import {DescriptionsProps, TableProps} from "antd";
import {CongVienResponse, PhuongXaResponse, QuanHuyenResponse, TuyenDuongResponse} from "../../models/DiaDiem";

export const diaDiemQuanHuyenTableHeads: TableProps<QuanHuyenResponse>['columns'] = [
    {
        title: 'Mã quận',
        dataIndex: 'maQuan',
        key: 'maQuan'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tenQuan',
        key: 'tenQuan'
    },
    {
        title: 'Tổng phường xã',
        dataIndex: 'tongPhuongXa',
        key: 'tongPhuongXa',
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tongSoCay',
        key: 'tongSoCay'
    },
];

export const diaDiemPhuongXaTableHeads: TableProps<PhuongXaResponse>['columns'] = [
    {
        title: 'Mã phường',
        dataIndex: 'maPhuong',
        key: 'maPhuong'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tenQuan',
        key: 'tenQuan'
    },
    {
        title: 'Phường xã',
        dataIndex: 'tenPhuong',
        key: 'tenPhuong',
    },
    {
        title: 'Tổng tuyến đươờng',
        dataIndex: 'tongTuyenDuong',
        key: 'tongTuyenDuong',
    },
    {
        title: 'Tổng số cây trong phường xã',
        dataIndex: 'tongSoCayTrongPhuongXa',
        key: 'tongSoCayTrongPhuongXa',
    },
];

export const diaDiemTuyenDuongTableHeads: TableProps<TuyenDuongResponse>['columns'] = [
    {
        title: 'Mã tuyến đường',
        dataIndex: 'maTuyenDuong',
        key: 'maPhuong'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tenQuan',
        key: 'tenQuan',
    },
    {
        title: 'Phường xã',
        dataIndex: 'tenPhuongXa',
        key: 'tenPhuongXa',
    },
    {
        title: 'Tuyến đường',
        dataIndex: 'tenTuyenDuong',
        key: 'tenTuyenDuong',
    },
    {
        title: 'Tổng công viên',
        dataIndex: 'tongCongVien',
        key: 'tongCongVien',
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tongSoCay',
        key: 'tongSoCay',
    },
];

export const diaDiemCongVienTableHeads: TableProps<CongVienResponse>['columns'] = [
    {
        title: 'Mã công viên',
        dataIndex: 'maCongVien',
        key: 'maCongVien'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tenQuan',
        key: 'tenQuan',
    },
    {
        title: 'Phường xã',
        dataIndex: 'tenPhuong',
        key: 'tenPhuong',
    },
    {
        title: 'Tên công viên',
        dataIndex: 'tenCongVien',
        key: 'tenCongVien',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'tuyenDuong',
        key: 'tuyenDuong',
        render: (text: string[]) => text.join(', ')
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tongSoCay',
        key: 'tongSoCay',
    },
];

export const diaDiemQuanHuyenEntityDetails = (data: QuanHuyenResponse): DescriptionsProps['items'] => [];
export const diaDiemPhuongXaEntityDetails = (data: PhuongXaResponse): DescriptionsProps['items'] => [];
export const diaDiemTuyenDuongEntityDetails = (data: TuyenDuongResponse): DescriptionsProps['items'] => [];
export const diaDiemCongVienEntityDetails = (data: CongVienResponse): DescriptionsProps['items'] => [];

class ManageUserConfigs {
    static rowKeyQuanHuyen = "maQuan"
    static rowKeyPhuongXa = "maPhuong"
    static rowKeyTuyenDuong = "maTuyenDuong"
    static rowKeyCongVien = "maCongVien"


    static resourceUrlDiaDiemQuanHuyen = ResourceUrl.DIA_DIEM_QUAN_HUYEN;
    static resourceUrlDiaDiemPhuongXa = ResourceUrl.DIA_DIEM_PHUONG_XA;
    static resourceUrlDiaDiemTuyenDuong = ResourceUrl.DIA_DIEM_TUYEN_DUONG;
    static resourceUrlDiaDiemCongVien = ResourceUrl.DIA_DIEM_CONG_VIEN;

    static resourceKeyDiaDiemQuanHuyen = 'diaDiemQuanHuyen';
    static resourceKeyDiaDiemPhuongXa = 'diaDiemPhuongXa';
    static resourceKeyDiaDiemTuyenDuong = 'diaDiemTuyenDuong';
    static resourceKeyDiaDiemCongVien = 'diaDiemCongVien';

    static manageTitle = 'Quản lý địa điểm';
    static createTitle = 'Thêm địa điểm';
    static updateTitle = 'Cập nhập địa điểm';
}

export default ManageUserConfigs;