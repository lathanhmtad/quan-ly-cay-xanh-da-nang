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

export default function ManageTree() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<CayXanhResponse>
    } = useGetAllApi<CayXanhResponse>(ManageTreeConfig.resourceUrl, ManageTreeConfig.resourceKey)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={'Quản lý cây xanh'}/>
            <ManageHeaderButtons listResponse={listResponse} titleAddBtn='Thêm mới cây xanh'
                                 resourceUrl={ManageTreeConfig.resourceUrl}
                                 resourceKey={ManageTreeConfig.resourceKey}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable listResponse={listResponse}
                         resourceUrl={ManageTreeConfig.resourceUrl}
                         resourceKey={ManageTreeConfig.resourceKey}
                         tableHeads={treeTableHeads}
                         entityDetails={treeEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}