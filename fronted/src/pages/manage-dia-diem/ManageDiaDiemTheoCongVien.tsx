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
    diaDiemCongVienEntityDetails,
    diaDiemCongVienTableHeads,
} from "./ManageDiaDiemConfig";
import {CongVienResponse} from "../../models/DiaDiem";

export default function ManageDiaDiemTheoCongVien() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<CongVienResponse>
    } = useGetAllApi<CongVienResponse>(ManageDiaDiemConfig.resourceUrlDiaDiemCongVien, ManageDiaDiemConfig.resourceKeyDiaDiemCongVien)

    console.log(listResponse)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={ManageDiaDiemConfig.manageTitle}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn={ManageDiaDiemConfig.createTitle}
                                 resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemCongVien}
                                 resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemCongVien}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable
                hideAction={true}
                rowKey={ManageDiaDiemConfig.rowKeyCongVien}
                listResponse={listResponse}
                resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemCongVien}
                resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemCongVien}
                tableHeads={diaDiemCongVienTableHeads}
                entityDetails={diaDiemCongVienEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}