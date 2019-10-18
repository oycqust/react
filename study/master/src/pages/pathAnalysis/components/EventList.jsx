import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon, Input} from 'antd';
import EventItem from './EventItem';


class EventList extends Component{
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          inputValue: ''
        }
    
         this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBtnClick = this.handleBtnClick.bind(this)
         this.handleDelete = this.handleDelete.bind(this);
         this.handleAdd = this.handleAdd.bind(this);
         this.getTodoItem = this.getTodoItem.bind(this);
      }

      handleAdd() {
        this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue: ''
        })
      }

      handleDelete(index) {
        console.log(index);
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
          list
        });
      }
      
      handleInputChange(e) {
        this.setState({
          inputValue: e.target.value
        });
      }

      getTodoItem() {
        return this.state.list.map((item, index) => {
          return (
            <EventItem
              deleteItem={this.handleDelete}
              key={index}
              value={item}
              index={index}
            />
          )
        })
      }

    render (){
        return (
                // <div>
                //     {this.props.value}
                //     <a><Icon type="close-circle" /></a>
                // </div>
                <div>
                  <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                  />
                  <Button onClick={this.handleAdd}>Add</Button>
                  <div>{this.getTodoItem()}</div>
                </div>
        );
    }
}
export default EventList;