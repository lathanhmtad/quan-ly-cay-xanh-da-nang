import {Button, DescriptionsProps, Space, Table, TableProps} from 'antd';
import BaseResponse from "../../models/BaseResponse"
import {ListResponse} from "../../utils/FetchUtils"
import useManageTableViewModel from "./ManageTable.vm"
import PageConfigs from "../../pages/PageConfigs"

import {FaRegEdit} from "react-icons/fa";
import {MdOutlineDelete} from "react-icons/md";
import {BiDetail} from "react-icons/bi";

import './ManageTable.scss'

export interface ManageTableProps<T> {
    listResponse: ListResponse<T>
    resourceUrl: string
    resourceKey: string
    tableHeads: TableProps<T>['columns']
    entityDetails: (data: T) => DescriptionsProps['items']
    rowKey?: string
}

function ManageTable<T extends BaseResponse>(props: ManageTableProps<T>) {
    const {
        listResponse,
        tableHeads = [],
        // onSelectChange,
        // activePage,
        // selections,
        handleViewEntityButton,
        handleDeleteEntityButton,
    } = useManageTableViewModel<T>(props)

    const columns: TableProps<T>['columns'] = [
        ...tableHeads,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='text'
                        className='d-flex align-items-center justify-content-center bg-warning'
                        onClick={() => handleViewEntityButton(record.id)}>
                        <BiDetail className='fs-5 text-white'/>
                    </Button>
                    <Button
                        className='d-flex align-items-center justify-content-center'
                        type='primary'>
                        <FaRegEdit className='fs-5'/>
                    </Button>
                    <Button
                        className='d-flex align-items-center justify-content-center'
                        danger
                        type='primary'
                        onClick={() => handleDeleteEntityButton(record.id)}>
                        <MdOutlineDelete className='fs-5'/>
                    </Button>
                </Space>
            ),
        },
    ]

    // const rowSelection = {
    //     selectedRowKeys: selections[activePage],
    //     onChange: onSelectChange
    // }

    return (
        <>
            {/*<strong>{`Selected ${*/}
            {/*    Object.values(selections).reduce((acc: number, curr) => acc + curr.length, 0)*/}
            {/*} item`}</strong>*/}
            <Table
                // rowSelection={rowSelection}
                rowKey={props.rowKey ? props.rowKey : PageConfigs.rowKey}
                pagination={false}
                bordered
                columns={columns}
                dataSource={listResponse.content}/>
        </>
    )
}

export default ManageTable