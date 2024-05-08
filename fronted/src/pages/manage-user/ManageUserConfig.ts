import ResourceUrl from "../../constants/ResouceUrl";
import {DescriptionsProps, TableProps} from "antd";
import {NguoiDungResponse} from "../../models/NguoiDung";

export const userTableHeads: TableProps<NguoiDungResponse>['columns'] = [
    {
        title: 'Tên',
        dataIndex: 'hoVaTen',
        key: 'hoVaTen'
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'ngaySinh',
        key: 'ngaySinh'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'sdt',
        key: 'sdt',
    },
    {
        title: 'Bộ phận',
        dataIndex: 'vaiTro',
        key: 'vaiTro',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'diaChi',
        key: 'email',
    },
    {
        title: 'Thuộc đội ngũ',
        dataIndex: 'doiNgu',
        key: 'doiNgu',
    },
];

export const userEntityDetails = (data: NguoiDungResponse): DescriptionsProps['items'] => [
    {
        key: 'maNguoiDung',
        label: 'Mã người dùng',
        children: data.maNguoiDung,
        span: 24
    },
    {
        key: 'hoVaTen',
        label: 'Họ và tên',
        children: data.hoVaTen,
        span: 24
    },
];

class ManageUserConfigs {
    static rowKey = "maNguoiDung"
    static resourceUrl = ResourceUrl.NGUOI_DUNG;
    static resourceKey = 'nguoiDung';
    static manageTitle = 'Quản lý người dùng';
    static createTitle = 'Thêm người dùng';
    static updateTitle = 'Cập nhập người dùng';
}

export default ManageUserConfigs;