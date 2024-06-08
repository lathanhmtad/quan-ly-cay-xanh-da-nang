import ManageHeaderTitle from "../../components/ManageHeaderTitle";
import ManageHeader from "../../components/ManageHeader";
import ManageHeaderButtons from "../../components/ManageHeaderButtons";
import useGetAllApi from "../../hooks/use-get-all-api";
import {treeEntityDetails, treeTableHeads} from "./ManageTreeConfig";
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import SearchPanel from "../../components/SearchPanel";
import ManageMain from "../../components/ManageMain";
import ManageTable from "../../components/ManageTable";
import ManagePagination from "../../components/ManagePagination";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";
import {CayXanhResponse} from "../../models/CayXanh";
import ManageTreeConfig from "./ManageTreeConfig";
import {DescriptionsProps, Image, TableProps} from "antd";

export default function TreeManage() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<CayXanhResponse>
    } = useGetAllApi<CayXanhResponse>(ManageTreeConfig.resourceUrl, ManageTreeConfig.resourceKey)

    if (!isLoading) {

        const entityDetails = (data: CayXanhResponse): DescriptionsProps['items'] => [
            {
                key: 'id',
                label: 'Id',
                children: data.id,
                span: 24
            },
            {
                key: 'tenCay',
                label: 'Tên cây',
                children: data.tenCay,
                span: 24
            },
            {
                key: 'ngayTrong',
                label: 'Ngày trồng',
                children: data.ngayTrong,
                span: 24
            },
            {
                key: 'tanCayChePhu',
                label: 'Tán cây che phủ',
                children: data.tanCayChePhu,
                span: 24
            },
            {
                key: 'chieuCao',
                label: 'Chiều cao',
                children: data.chieuCao,
                span: 24
            },
            {
                key: 'duongKinh',
                label: 'Đường kính',
                children: data.duongKinh,
                span: 24
            },
            {
                key: 'toaDo',
                label: 'Tọa độ',
                children: data.toaDo,
                span: 24
            },
            {
                key: 'moTaDiaChi',
                label: 'Mô tả địa chỉ',
                children: data.moTaDiaChi,
                span: 24
            },
            {
                key: 'loaiCay',
                label: 'Loài cây',
                children: data.loaiCay,
                span: 24
            },
            {
                key: 'trangThaiCay',
                label: 'Trạng thái cây',
                children: data.trangThaiCay,
                span: 24
            },
            {
                key: 'tuyenDuong',
                label: 'Tuyến đường',
                children: data.tuyenDuong,
                span: 24
            },
            {
                key: 'phuongXa',
                label: 'Phường xã',
                children: data.phuongXa,
                span: 24
            },
            {
                key: 'quanHuyen',
                label: 'Quân huyện',
                children: data.quanHuyen,
                span: 24
            },
            {
                key: 'images',
                label: 'Hình ảnh',
                children: <>
                    {data.images.map(item => <Image
                        width={100}
                        src={item.imageUrl}
                    />,)}
                </>,
                span: 24
            },

        ];

        const treeTableHeadsLocal: TableProps<CayXanhResponse>['columns'] = [
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
                render: (_, record) => <div>
                    <Image
                        width={40}
                        style={{borderRadius: '50%', objectFit: 'cover'}}
                        height={40}
                        src={record.images[0].imageUrl}
                    />
                    <span> {record.tenCay}</span>
                </div>
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
                dataIndex: 'moTaDiaChi',
                key: 'moTaDiaChi',
            },
            {
                title: 'Trạng thái cây',
                dataIndex: 'trangThaiCay',
                key: 'trangThaiCay',
            },
        ];

        return <div>
            <ManageHeader>
                <ManageHeaderTitle title={'Quản lý cây xanh'}/>
                <ManageHeaderButtons managerPath='cay-xanh' listResponse={listResponse} titleAddBtn='Thêm mới cây xanh'
                                     resourceUrl={ManageTreeConfig.resourceUrl}
                                     resourceKey={ManageTreeConfig.resourceKey}/>
            </ManageHeader>

            <SearchPanel/>

            <ManageMain listResponse={listResponse} isLoading={isLoading}>
                <ManageTable
                    rowKey={ManageTreeConfig.rowKey}
                    listResponse={listResponse}
                    resourceUrl={ManageTreeConfig.resourceUrl}
                    resourceKey={ManageTreeConfig.resourceKey}
                    tableHeads={treeTableHeadsLocal}
                    entityDetails={entityDetails}/>
            </ManageMain>
            <ManagePagination listResponse={listResponse}/>
        </div>
    }

    return <div>Loading</div>
}