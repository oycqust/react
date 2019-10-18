import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon} from 'antd';

class EventItem extends Component{

    constructor(props) {
        super(props)
    
        this.handleDelete = this.handleDelete.bind(this)
      }
    
      handleDelete(){
          const{deleteItem, index} = this.props
          deleteItem(index)
      }

    render (){
        return (
                <div>
                    {this.props.value}
                    <a onClick={this.handleDelete}><Icon type="close-circle" /></a>
                </div>
            // <div>New Page react</div>
        );
    }
}
export default EventItem;