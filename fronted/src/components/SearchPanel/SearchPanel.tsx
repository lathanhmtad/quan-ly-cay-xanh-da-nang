import { Input, Space } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import Search from "antd/es/input/Search";

function SearchPanel() {
    return (
        <div className='d-flex align-items-center justify-content-between mb-2'>
            <div>
                <Search size='large' placeholder="input search text" style={{ width: 200 }} />
            </div>
        </div>
    );
}

export default SearchPanel;