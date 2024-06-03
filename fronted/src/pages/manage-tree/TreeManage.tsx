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
import {Image, TableProps} from "antd";

import CayDefault from '../../assets/imgs/cay-default.png'

export default function TreeManage() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<CayXanhResponse>
    } = useGetAllApi<CayXanhResponse>(ManageTreeConfig.resourceUrl, ManageTreeConfig.resourceKey)

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
                    src={record.hinhAnh.length > 0 ? record.hinhAnh[0].hinhAnh :
                        "https://fptshop.com.vn/Uploads/Originals/2024/1/1/638397211036390474_hinh-nen-cay-xanh.png"
                    }
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
            dataIndex: 'diaChi',
            key: 'diaChi',
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
                entityDetails={treeEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}