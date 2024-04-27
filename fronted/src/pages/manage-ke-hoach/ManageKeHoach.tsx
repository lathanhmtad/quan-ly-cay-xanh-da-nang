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
import {CayXanhResponse} from "../../models/CayXanh";
import {KeHoachResponse} from "../../models/KeHoach";
import ManageKeHoachConfig, {keHoachEntityDetails, keHoachTableHeads} from "./ManageKeHoachConfig";


export default function ManageKeHoach() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<KeHoachResponse>
    } = useGetAllApi<KeHoachResponse>(ManageKeHoachConfig.resourceUrl, ManageKeHoachConfig.resourceKey)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={ManageKeHoachConfig.manageTitle}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn='Thêm mới kế hoạch'
                                 resourceUrl={ManageKeHoachConfig.resourceUrl}
                                 resourceKey={ManageKeHoachConfig.resourceKey}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable listResponse={listResponse}
                         resourceUrl={ManageKeHoachConfig.resourceUrl}
                         resourceKey={ManageKeHoachConfig.resourceKey}
                         tableHeads={keHoachTableHeads}
                         entityDetails={keHoachEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}