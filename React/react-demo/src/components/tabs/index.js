import React from 'react'
import Tabs from './tabs.js'
import {TabItem} from './tabItem'

export default class TabsIndex extends React.Component{
    render(){
        return (
            <Tabs>
                <TabItem></TabItem>
                <TabItem></TabItem>
                <TabItem></TabItem>
                <TabItem></TabItem>
            </Tabs>
        )
    }
}