import ResourceUrl from "../../constants/ResouceUrl";
import {DescriptionsProps, TableProps} from "antd";
import {NguoiDungResponse} from "../../models/NguoiDung";
import {CayXanhResponse} from "../../models/CayXanh";
import {KeHoachResponse} from "../../models/KeHoach";

export const keHoachTableHeads: TableProps<KeHoachResponse>['columns'] = [
    {
        title: 'Mã kế hoạch',
        dataIndex: 'maKeHoach',
        key: 'maKeHoach'
    },
    {
        title: 'Tên kế hoạch',
        dataIndex: 'tenKeHoach',
        key: 'tenKeHoach'
    },
    {
        title: 'Hạn hoàn thành',
        dataIndex: 'hanHoanThanh',
        key: 'hanHoanThanh',
    },
    {
        title: 'Số lượng',
        dataIndex: 'soLuong',
        key: 'soLuong',
    },
    {
        title: 'Địa điểm',
        dataIndex: 'diaDiem',
        key: 'diaDiem',
    },
    {
        title: 'Nội dung',
        dataIndex: 'noiDung',
        key: 'noiDung',
    },
];

export const keHoachEntityDetails = (data: KeHoachResponse): DescriptionsProps['items'] => [
    // {
    //     key: 'maNguoiDung',
    //     label: 'Mã người dùng',
    //     children: data.maNguoiDung,
    //     span: 24
    // },
    // {
    //     key: 'hoVaTen',
    //     label: 'Họ và tên',
    //     children: data.hoVaTen,
    //     span: 24
    // },
];

class ManageTreeConfigs {
    static resourceUrl = ResourceUrl.KE_HOACH;
    static resourceKey = 'keHoach';
    static manageTitle = 'Quản lý kế hoạch';
    static createTitle = 'Thêm người dùng';
    static updateTitle = 'Cập nhập người dùng';
}

export default ManageTreeConfigs;