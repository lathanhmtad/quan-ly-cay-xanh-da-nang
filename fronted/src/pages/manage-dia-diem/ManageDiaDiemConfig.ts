import ResourceUrl from "../../constants/ResouceUrl";
import {DescriptionsProps, TableProps} from "antd";
import {CongVienResponse, PhuongXaResponse, QuanHuyenResponse, TuyenDuongResponse} from "../../models/DiaDiem";

export const diaDiemQuanHuyenTableHeads: TableProps<QuanHuyenResponse>['columns'] = [
    {
        title: 'Mã địa điểm',
        dataIndex: 'maQuan',
        key: 'maQuan'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tenQuan',
        key: 'tenQUan'
    },
    {
        title: 'Tổng phường xã',
        dataIndex: 'tongPhuongXa',
        key: 'tongPhuongXa',
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tongSoCay',
        key: 'tongSoCay',
    },
];

export const diaDiemPhuongXaTableHeads: TableProps<PhuongXaResponse>['columns'] = [
    {
        title: 'Mã địa điểm',
        dataIndex: 'maPhuong',
        key: 'maPhuong'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'quanHuyen',
        key: 'quanHuyen',
        render: (value, record) => `${record.quanHuyen.tenQuan}`
    },
    {
        title: 'Phường xã',
        dataIndex: 'tenPhuong',
        key: 'tenPhuong',
    },
    {
        title: 'Tổng tuyến đường / Công viên',
        dataIndex: 'tongTuyenDuongCongVien',
        key: 'tongTuyenDuongCongVien',
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tongSoCayTrongPhuongXa',
        key: 'tongSoCayTrongPhuongXa',
    },
];

export const diaDiemTuyenDuongTableHeads: TableProps<TuyenDuongResponse>['columns'] = [
    {
        title: 'Mã địa điểm',
        dataIndex: 'maTuyenDuong',
        key: 'maPhuong'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'phuongXa',
        key: 'quanHuyen',
        render: (value, record) => `${record.phuongXa.quanHuyen.tenQuan}`
    },
    {
        title: 'Phường xã',
        dataIndex: 'phuongXa',
        key: 'tenPhuong',
        render: (value, record) => `${record.phuongXa.tenPhuong}`
    },
    {
        title: 'Tuyến đường',
        dataIndex: 'tenTuyenDuong',
        key: 'tenTuyenDuong',
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'phuongXa',
        key: 'tongSoCay',
        render: (value, record) => `${record.phuongXa.tongSoCayTrongPhuongXa}`
    },
];

export const diaDiemCongVienTableHeads: TableProps<CongVienResponse>['columns'] = [
    {
        title: 'Mã địa điểm',
        dataIndex: 'maCongVien',
        key: 'maCongVien'
    },
    {
        title: 'Quận/Huyện',
        dataIndex: 'tuyenDuong',
        key: 'quanHuyen',
        render: (value, record) => `${record.tuyenDuong[0].phuongXa.quanHuyen.tenQuan}`
    },
    {
        title: 'Phường xã',
        dataIndex: 'tuyenDuong',
        key: 'tenPhuong',
        render: (value, record) => `${record.tuyenDuong[0].phuongXa.tenPhuong}`
    },
    {
        title: 'Tên công viên',
        dataIndex: 'tenCongVien',
        key: 'tenCongVien',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'tuyenDuong',
        key: 'diaChi',
        render: (value, record) => `${record.tuyenDuong.map(item => item.tenTuyenDuong + ',')}`
    },
    {
        title: 'Tổng số cây',
        dataIndex: 'tuyenDuong',
        key: 'tongSoCay',
        render: (value, record) =>
            `${record.tuyenDuong.reduce((previousValue, currentValue) =>
                previousValue + currentValue.phuongXa.tongSoCayTrongPhuongXa, 0)}`
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