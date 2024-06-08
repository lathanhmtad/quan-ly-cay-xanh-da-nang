import {Button, Descriptions, DescriptionsProps, Drawer, Space, Table, TableProps} from 'antd';
import BaseResponse from "../../models/BaseResponse"
import {ListResponse} from "../../utils/FetchUtils"
import useManageTableViewModel from "./ManageTable.vm"
import PageConfigs from "../../pages/PageConfigs"

import {FaRegEdit} from "react-icons/fa";
import {MdOutlineDelete} from "react-icons/md";
import {BiDetail} from "react-icons/bi";

import './ManageTable.scss'
import {Link} from "react-router-dom";
import EntityDetailsTable from "../EntityDetailsTable";
import resouceUrl from "../../constants/ResouceUrl";

export interface ManageTableProps<T> {
    listResponse: ListResponse<T>
    resourceUrl: string
    resourceKey: string
    tableHeads: TableProps<T>['columns']
    entityDetails: (data: T) => DescriptionsProps['items']
    rowKey?: string,
    hideAction?: boolean,
}

function ManageTable<T extends BaseResponse>(props: ManageTableProps<T>) {
    const {
        listResponse,
        tableHeads = [],
        // onSelectChange,
        // activePage,
        open,
        setOpen,
        // selections,
        handleViewEntityButton,
        handleDeleteEntityButton,
    } = useManageTableViewModel<T>(props)


    const columns: TableProps<T>['columns'] = [
        ...tableHeads,
        ...(!props.hideAction ? [{
            title: 'Action',
            key: 'action',
            render: (text : any, record: T) => (
                <Space size="middle">
                    <Button
                        type='text'
                        className='d-flex align-items-center justify-content-center bg-warning'
                        onClick={() => handleViewEntityButton(record)}>
                        <BiDetail className='fs-5 text-white'/>
                    </Button>
                    <Link
                        to={`update/${record.id}`}
                        className='d-flex align-items-center justify-content-center btn btn-primary'>
                        <FaRegEdit className='fs-5'/>
                    </Link>
                    <Button
                        className='d-flex align-items-center justify-content-center'
                        danger
                        type='primary'
                        onClick={() => handleDeleteEntityButton(record.id)}>
                        <MdOutlineDelete className='fs-5'/>
                    </Button>
                </Space>
            ),
        }] : [])
    ]

    // const rowSelection = {
    //     selectedRowKeys: selections[activePage],
    //     onChange: onSelectChange
    // }

    return (
        <>
            {/*<Drawer*/}
            {/*    title="Thông tin về cây"*/}
            {/*    closable={false}*/}
            {/*    size='large'*/}
            {/*    placement='left'*/}
            {/*    open={open}*/}
            {/*    onClose={() => setOpen(false)}*/}
            {/*>*/}
            {/*    <EntityDetailsTable resourceUrl={resouceUrl} resourceKey={res} entityId={} entityDetails={}*/}
            {/*</Drawer>*/}

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