import React, {useState} from 'react';
import {Tabs} from 'antd';
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import {DonThuResponse} from "../../models/DonThu";
import useGetAllApi from "../../hooks/use-get-all-api";
import ManageDonThuConfig from "./ManageDonThuConfig";
import {BooleanOperator, Filter} from "../../utils/FilterUtils";
import {setActiveFilter, setActivePage} from "../../redux/slices/managePageSlice";
import {useAppDispatch} from "../../redux/hooks";
import ListDonThu from "../../components/ListDonThu";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";

const tabs = [
    {
        id: 'tat-ca-don-thu',
        label: 'Tất cả đơn thư'
    },
    {
        id: 'don-thu-da-xu-ly',
        label: 'Danh sách đơn thư đã xử lý'
    },
    {
        id: 'don-thu-chua-xu-ly',
        label: 'Danh sách đơn thư chưa xử lý'
    }
]

export default function ManageDonThu() {

    useResetManagePageState();

    const dispatch = useAppDispatch()

    const callbackTabClicked = (key: string) => {
        dispatch(setActivePage(1))
        if (key !== 'tat-ca-don-thu') {
            let filter: Filter = {
                filterCriteriaList: [
                    {
                        property: 'xuLyDonThu.trangThai',
                        type: null,
                        operator: BooleanOperator.EQUALS,
                        value: `${key === 'don-thu-da-xu-ly' ? "1" : "0"}`
                    }
                ]
            }
            dispatch(setActiveFilter(filter))
        } else {
            dispatch(setActiveFilter(null))
        }
    };

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<DonThuResponse>
    } = useGetAllApi<DonThuResponse>(ManageDonThuConfig.resourceUrl, ManageDonThuConfig.resourceKey)

    return <div>
        <h3>Quản lý đơn thư</h3>
        <Tabs
            onTabClick={callbackTabClicked}
            defaultActiveKey="tat-ca-don-thu"
            centered
            items={tabs.map(value => {
                const id = value.id
                return {
                    label: `${value.label}`,
                    key: id,
                    children: <ListDonThu listResponse={listResponse}/>
                }
            })}
        />
    </div>
}