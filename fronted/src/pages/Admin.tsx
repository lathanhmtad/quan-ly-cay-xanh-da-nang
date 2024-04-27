import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const {Header, Content} = Layout;

export default function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout>
            <AdminSidebar collapsed={collapsed}/>
            <Layout
                style={{
                    marginLeft: `${collapsed ? '100px' : '240px'}`,
                    transition: 'all 0.3s'
                }}
            >
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        padding: '24px 16px',
                        background: colorBgContainer
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
