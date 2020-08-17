import React from 'react'
import { Layout, Menu } from 'antd';
import { EnvironmentOutlined,DashboardOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;



const SideCompDew = (props) => {
  return (
    <>
              <Sider
          breakpoint="lg" 
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          }}
        >

          
          {/* <div className="logo" /> */}
          <div className="center profil">
            <div className="imgProfil">
                <img id="imgProfil" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/bx_bxs-user-circle_kfbclt.png"/>
            </div>
            <p id="username" style={{textalign: "center"}}>Dewa Qintoro</p>
            <p id="id" style={{textalign: "center"}}>ID:20201161</p>
          </div>
          <Menu mode="inline" defaultSelectedKeys={props.aktif}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link href="/admin">
                Dashboard 
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<EnvironmentOutlined />}>
              <Link href="/persebaran">
                Persebaran
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3 
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item> */}
            <div className="bawahContainer">
            <Link href="/setting">
              <div className="bawah" id="setting">
                  <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_settings_hvxc7l.png"/>
              </div>
            </Link>

            <Link href="/">
              <div className="bawah" id="logout">
                  <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_power_settings_new_z0g0h1.png"/>
              </div>
            </Link>
            </div>
          </Menu>
        </Sider>
    </>
  ) 
} 

export default SideCompDew


