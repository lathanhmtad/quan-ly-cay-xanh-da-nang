import {Input, Space} from 'antd';

import {SearchOutlined} from '@ant-design/icons';
import Search, {SearchProps} from "antd/es/input/Search";
import {useAppDispatch} from "../../redux/hooks";
import {useState} from "react";
import {setSearchToken} from "../../redux/slices/managePageSlice";

function SearchPanel() {
    const dispatch = useAppDispatch();

    const onSearch: SearchProps['onSearch'] =
        (value, _e, info) => {
        dispatch(setSearchToken(value))
    }
    return (
        <div className='d-flex align-items-center justify-content-between mb-2'>
            <div>
                <Search
                    onSearch={onSearch}
                    size='large' placeholder="input search text" style={{width: 200}}/>
            </div>
        </div>
    );
}

export default SearchPanel;