import {Tabs, TabsProps} from "antd";
import ManageDiaDiemTheoQuanHuyen from "./ManageDiaDiemTheoQuanHuyen";
import ManageDiaDiemTheoPhuongXa from "./ManageDiaDiemTheoPhuongXa";
import ManageDiaDiemTheoTuyenDuong from "./ManageDiaDiemTheoTuyenDuong";
import ManageDiaDiemTheoCongVien from "./ManageDiaDiemTheoCongVien";

const items: TabsProps['items'] = [
    {
        key: 'theo-quan-huyen',
        label: 'Quản lý theo quận',
        children: <ManageDiaDiemTheoQuanHuyen/>,
    },
    {
        key: 'theo-phuong-xa',
        label: 'Quản lý theo phường xã',
        children: <ManageDiaDiemTheoPhuongXa/>,
    },
    {
        key: 'theo-tuyen-duong',
        label: 'Quản lý theo tuyến đường',
        children: <ManageDiaDiemTheoTuyenDuong/>,
    },
    {
        key: 'theo-cong-vien',
        label: 'Quản lý theo công viên',
        children: <ManageDiaDiemTheoCongVien/>,
    },
];

export default function ManageDiaDiem() {

    const onChange = (key: string) => {
        console.log(key);
    };

    return <Tabs defaultActiveKey="theo-quan-huyen" items={items} onChange={onChange}/>;
}