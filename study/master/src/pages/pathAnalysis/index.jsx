import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';
import EventItem from './components/EventItem';
import EventList from './components/EventList';
import Select from 'react-select';



class PathAnalysis extends Component{
   options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  
  //  menu = (
  //     <Menu>
  //       <Menu.Item key="0">
  //         <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
  //           事件1
  //         </a>
  //       </Menu.Item>
  //       <Menu.Item key="1">
  //         <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
  //         事件2
  //         </a>
  //       </Menu.Item>
  //       <Menu.Divider />
  //       <Menu.Item key="3" disabled>
  //       事件3
  //       </Menu.Item>
  //     </Menu>
  //   );
    render (){
        return (
            <div>
                <div>选择参与分析的事件</div>
                <div>
                    <Select options={this.options} isMulti/>
                    {/* <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            选择事件<Icon type="down" />
                        </a>
                    </Dropdown> */}
                    <Button type="primary" icon="plus">
                        事件分组
                    </Button>
                    <EventList />
                </div>
            </div>
            // <div>New Page react</div>
        );
    }
}
export default PathAnalysis;