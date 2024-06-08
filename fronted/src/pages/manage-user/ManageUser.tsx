import ManageHeaderTitle from "../../components/ManageHeaderTitle";
import ManageHeader from "../../components/ManageHeader";
import ManageHeaderButtons from "../../components/ManageHeaderButtons";
import useGetAllApi from "../../hooks/use-get-all-api";
import {NguoiDungResponse} from "../../models/NguoiDung";
import ManageUserConfig, {userTableHeads, userEntityDetails} from "./ManageUserConfig";
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import SearchPanel from "../../components/SearchPanel";
import ManageMain from "../../components/ManageMain";
import ManageTable from "../../components/ManageTable";
import ManagePagination from "../../components/ManagePagination";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";

export default function ManageUser() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<NguoiDungResponse>
    } = useGetAllApi<NguoiDungResponse>(ManageUserConfig.resourceUrl, ManageUserConfig.resourceKey)
    console.log(listResponse)

    return <div>
        <ManageHeader>
            <ManageHeaderTitle title={'Quản lý người dùng'}/>
            <ManageHeaderButtons managerPath='nguoi-dung' listResponse={listResponse} titleAddBtn='Thêm mới người dùng'
                                 resourceUrl={ManageUserConfig.resourceUrl}
                                 resourceKey={ManageUserConfig.resourceKey}/>
        </ManageHeader>

        <SearchPanel/>

        <ManageMain listResponse={listResponse} isLoading={isLoading}>
            <ManageTable
                rowKey={ManageUserConfig.rowKey}
                listResponse={listResponse}
                resourceUrl={ManageUserConfig.resourceUrl}
                resourceKey={ManageUserConfig.resourceKey}
                tableHeads={userTableHeads}
                entityDetails={userEntityDetails}/>
        </ManageMain>
        <ManagePagination listResponse={listResponse}/>
    </div>
}