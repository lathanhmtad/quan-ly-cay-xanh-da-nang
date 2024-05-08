import ResourceUrl from "../../constants/ResouceUrl";
import {DescriptionsProps, TableProps} from "antd";
import {NguoiDungResponse} from "../../models/NguoiDung";
import {CayXanhResponse} from "../../models/CayXanh";

export const treeTableHeads: TableProps<CayXanhResponse>['columns'] = [
    {
        title: 'Mã cây xanh',
        dataIndex: 'maCay',
        key: 'maCay'
    },
    {
        title: 'Tọa độ',
        dataIndex: 'toaDo',
        key: 'toaDo'
    },
    {
        title: 'Tên cây',
        dataIndex: 'tenCay',
        key: 'tenCay',
    },
    {
        title: 'Loài cây',
        dataIndex: 'loaiCay',
        key: 'loaiCay',
    },
    {
        title: 'Ngày trồng',
        dataIndex: 'ngayTrong',
        key: 'ngayTrong',
    },
    {
        title: 'Tán cây che phủ',
        dataIndex: 'tanCayChePhu',
        key: 'tanCayChePhu',
    },
    {
        title: 'Chiều cao',
        dataIndex: 'chieuCao',
        key: 'chieuCao',
    },
    {
        title: 'Đường kính',
        dataIndex: 'duongKinh',
        key: 'duongKinh',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'diaChi',
        key: 'diaChi',
    },
    {
        title: 'Trạng thái cây',
        dataIndex: 'trangThaiCay',
        key: 'trangThaiCay',
    },
];

export const treeEntityDetails = (data: CayXanhResponse): DescriptionsProps['items'] => [
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
    static rowKey = "maCay"
    static resourceUrl = ResourceUrl.TREE;
    static resourceKey = 'nguoiDung';
    static manageTitle = 'Quản lý người dùng';
    static createTitle = 'Thêm người dùng';
    static updateTitle = 'Cập nhập người dùng';
}

export default ManageTreeConfigs;