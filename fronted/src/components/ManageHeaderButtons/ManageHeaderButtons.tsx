import {Button, Space} from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';

// import {CiTrash} from 'react-icons/ci';

import {ListResponse} from '../../utils/FetchUtils';
import {Link} from "react-router-dom";

// import useManageHeaderButtonsViewModel from './ManageHeaderButtons.vm';

export interface ManageHeaderButtonsProps {
    listResponse: ListResponse;
    resourceUrl: string;
    resourceKey: string;
    titleAddBtn?: string;
    managerPath?: string;
}

function ManageHeaderButtons(props: ManageHeaderButtonsProps) {
    // const {handleDeleteBatchEntitiesButton} = useManageHeaderButtonsViewModel(props);

    return (
        <Space>
            <Link
                className='btn btn-success text-black d-flex gap-2 align-items-center'
                to='create'
                style={{
                    background: '#DDF247',
                    color: 'black'
                }}>
                <PlusOutlined />
                {props.titleAddBtn ? props.titleAddBtn : 'Thêm mới'}</Link>
            {/*<Button onClick={handleDeleteBatchEntitiesButton} icon={<CiTrash/>} size="large" danger>Xóa hàng loạt</Button>*/}
        </Space>
    );
}

export default ManageHeaderButtons;