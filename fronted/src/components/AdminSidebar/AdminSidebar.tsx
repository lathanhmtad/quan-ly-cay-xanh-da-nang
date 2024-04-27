import React from 'react';
import {Avatar, GetProp, Layout, Menu, MenuProps} from 'antd';
import Search from "antd/es/input/Search";

import {MdBrowserUpdated, MdOutlineEventNote} from "react-icons/md";
import {CiMail} from "react-icons/ci";
import {FcStatistics} from "react-icons/fc";
import {Link, useLocation} from "react-router-dom";
import {IoIosLogOut} from "react-icons/io";

const {Sider} = Layout;

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

interface AdminSidebarProps {
    collapsed: boolean
}

type MenuTheme = GetProp<MenuProps, 'theme'>;
type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to='/admin'>Thống kê</Link>, '/admin', <FcStatistics/>),
    getItem('Cập nhập', 'cap-nhap', <MdOutlineEventNote/>, [
        getItem(<Link to='/admin/nguoi-dung'>Người dùng</Link>, '/admin/nguoi-dung'),
        getItem(<Link to='/admin/cay-xanh'>Cây xanh</Link>, '/admin/cay-xanh'),
        getItem(<Link to='/admin/dia-diem'>Địa điểm</Link>, '/admin/dia-diem'),
    ]),
    getItem(<Link to='/admin/ke-hoach'>Cập nhập kế hoạch</Link>, '/admin/ke-hoach', <MdBrowserUpdated/>),
    getItem(
        <Link to='/admin/don-thu'>
            Đơn thư
        </Link>,
        '/admin/don-thu',
        <CiMail/>,
    ),
    getItem(
        <div>
            Đăng xuất
        </div>,
        'dang-xuat',
        <IoIosLogOut/>,
    ),
];

export default function AdminSidebar(props: AdminSidebarProps) {

    const location = useLocation();

    return <Sider collapsedWidth={100} width={240} className='position-fixed left-0 bottom-0 top-0' trigger={null}
                  collapsible collapsed={props.collapsed}>
        <div className='d-flex align-items-center justify-content-center flex-wrap gap-1 py-3 border-bottom'>
            <Avatar src={url}/>
            <span className='text-white'>Administrator</span>
        </div>
        {!props.collapsed && <div className='py-3'>
            <Search placeholder="input search text" size='large' style={{width: '100%'}}/>
        </div>}
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={items}
            defaultOpenKeys={[location.pathname]}
        />
    </Sider>
}