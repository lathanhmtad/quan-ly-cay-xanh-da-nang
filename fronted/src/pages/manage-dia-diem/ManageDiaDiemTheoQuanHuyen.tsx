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
import ManageDiaDiemConfig, {diaDiemQuanHuyenEntityDetails, diaDiemQuanHuyenTableHeads} from "./ManageDiaDiemConfig";
import {QuanHuyenResponse} from "../../models/DiaDiem";

export default function ManageDiaDiemTheoQuanHuyen() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<QuanHuyenResponse>
    } = useGetAllApi<QuanHuyenResponse>(ManageDiaDiemConfig.resourceUrlDiaDiemQuanHuyen, ManageDiaDiemConfig.resourceKeyDiaDiemQuanHuyen)

    console.log(listResponse)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={ManageDiaDiemConfig.manageTitle}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn={ManageDiaDiemConfig.createTitle}
                                 resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemQuanHuyen}
                                 resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemQuanHuyen}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable
                rowKey={ManageDiaDiemConfig.rowKeyQuanHuyen}
                listResponse={listResponse}
                resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemQuanHuyen}
                resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemQuanHuyen}
                tableHeads={diaDiemQuanHuyenTableHeads}
                entityDetails={diaDiemQuanHuyenEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}