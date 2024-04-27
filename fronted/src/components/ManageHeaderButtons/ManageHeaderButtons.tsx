import {Button, Space} from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';

// import {CiTrash} from 'react-icons/ci';

import {ListResponse} from '../../utils/FetchUtils';

// import useManageHeaderButtonsViewModel from './ManageHeaderButtons.vm';

export interface ManageHeaderButtonsProps {
    listResponse: ListResponse;
    resourceUrl: string;
    resourceKey: string;
    titleAddBtn?: string;
}

function ManageHeaderButtons(props: ManageHeaderButtonsProps) {
    // const {handleDeleteBatchEntitiesButton} = useManageHeaderButtonsViewModel(props);

    return (
        <Space>
            <Button
                style={{
                    background: '#DDF247',
                    color: 'black'
                }} icon={<PlusOutlined/>} size="large" type="text"
                ghost>{props.titleAddBtn ? props.titleAddBtn : 'Thêm mới'}</Button>
            {/*<Button onClick={handleDeleteBatchEntitiesButton} icon={<CiTrash/>} size="large" danger>Xóa hàng loạt</Button>*/}
        </Space>
    );
}

export default ManageHeaderButtons;