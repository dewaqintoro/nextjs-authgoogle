import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';
 import Kasus from './kasus'

class AdminPage extends Component {

  render() {
    return (
    <div>
      <Layout> 
        <SideCompDew aktif="1"/>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 760 }}>
              <Kasus/>
              {/* <h1>Admin Page</h1>
              <div className="adminPage">
                <p></p>
              </div> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    )
  }
}

export default AdminPage