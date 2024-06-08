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
    diaDiemPhuongXaEntityDetails,
    diaDiemPhuongXaTableHeads,
} from "./ManageDiaDiemConfig";
import {PhuongXaResponse} from "../../models/DiaDiem";

export default function ManageDiaDiemTheoPhuongXa() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<PhuongXaResponse>
    } = useGetAllApi<PhuongXaResponse>(ManageDiaDiemConfig.resourceUrlDiaDiemPhuongXa, ManageDiaDiemConfig.resourceKeyDiaDiemPhuongXa)

    console.log(listResponse)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={ManageDiaDiemConfig.manageTitle}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn={ManageDiaDiemConfig.createTitle}
                                 resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemPhuongXa}
                                 resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemPhuongXa}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable
                hideAction={true}
                rowKey={ManageDiaDiemConfig.rowKeyPhuongXa}
                listResponse={listResponse}
                resourceUrl={ManageDiaDiemConfig.resourceUrlDiaDiemPhuongXa}
                resourceKey={ManageDiaDiemConfig.resourceKeyDiaDiemPhuongXa}
                tableHeads={diaDiemPhuongXaTableHeads}
                entityDetails={diaDiemPhuongXaEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}