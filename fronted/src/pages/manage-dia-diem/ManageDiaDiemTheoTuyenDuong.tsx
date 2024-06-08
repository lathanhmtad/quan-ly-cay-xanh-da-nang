import ManageHeaderTitle from "../../components/ManageHeaderTitle";
import ManageHeader from "../../components/ManageHeader";
import ManageHeaderButtons from "../../components/ManageHeaderButtons";
import useGetAllApi from "../../hooks/use-get-all-api";
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import SearchPanel from "../../components/SearchPanel";
import ManageMain from "../../components/ManageMain";
import ManageTable from "../../components/ManageTable";
import ManagePagination from "../../components/ManagePagination";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";
import ManageDiaDiemConfig, {
    diaDiemTuyenDuongEntityDetails,
    diaDiemTuyenDuongTableHeads
} from "./ManageDiaDiemConfig";
import {TuyenDuongResponse} from "../../models/DiaDiem";

export default function ManageDiaDiemTheoTuyenDuong() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<TuyenDuongResponse>
    } = useGetAllApi<TuyenDuongResponse>(ManageDiaDiemConfig.resourceUrlDiaDiemTuyenDuong, ManageDiaDiemConfig.resourceKeyDiaDiemTuyenDuong)

    console.log(listResponse)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={ManageDiaDiemConfig.manageTitle}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn={ManageDiaDiemConfig.createTitle}
                                 resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemTuyenDuong}
                                 resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemTuyenDuong}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable
                hideAction={true}
                rowKey={ManageDiaDiemConfig.rowKeyTuyenDuong}
                listResponse={listResponse}
                resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemTuyenDuong}
                resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemTuyenDuong}
                tableHeads={diaDiemTuyenDuongTableHeads}
                entityDetails={diaDiemTuyenDuongEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}