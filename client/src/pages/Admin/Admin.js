import React from 'react'
import PageTitle from '../../Componenets/PageTitle'
import MovisList from './MovisList'
import {Tabs} from "antd"
const Admin = () => {
  return (
    <div>
<PageTitle title="Admin"/>
<Tabs defaultActiveKey='1'>

<Tabs.TabPane key="1" tab="Movies"><MovisList/></Tabs.TabPane>
<Tabs.TabPane key="2" tab="Theater">Theater</Tabs.TabPane>
</Tabs>
    </div>
    
    
  )
}

export default Admin