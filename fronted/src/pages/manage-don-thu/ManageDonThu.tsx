import React from 'react';
import {Tabs} from 'antd';
import ListDonThu from "../../components/ListDonThu";
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import {KeHoachResponse} from "../../models/KeHoach";
import useGetAllApi from "../../hooks/use-get-all-api";
import ManageKeHoachConfig from "../manage-ke-hoach/ManageKeHoachConfig";
import {DonThuResponse} from "../../models/DonThu";
import ManageDonThuConfig from "./ManageDonThuConfig";

const tabs = [
    {
        id: 'don-thu-da-xu-ly',
        label: 'Danh sách đơn thư đã xử lý',
        children: <ListDonThu status={true}/>
    },
    {
        id: 'don-thu-chua-xu-ly',
        label: 'Danh sách đơn thư chưa xử lý',
        children: <ListDonThu status={false}/>
    }
]

export default function ManageDonThu() {
    return <div>
        <h3>Quản lý đơn thư</h3>
        <Tabs
            defaultActiveKey="1"
            centered
            items={tabs.map(value => {
                const id = value.id
                return {
                    label: `${value.label}`,
                    key: id,
                    children: value.children
                }
            })}
        />
    </div>
}