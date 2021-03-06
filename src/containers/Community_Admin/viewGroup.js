import { Table } from "antd";
import React, { Component } from "react";
import { Col, Row, Icon }from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import Button, { ButtonGroup } from '../../components/uielements/button';
import Box from '../../components/utility/box';
import ContentHolder from "../../components/utility/contentHolder";
import { tableData } from './config';
import './community.css'

export default class viewGroup extends Component {
  state={
    groupName:""
  }

  changeName=(event)=>{
    this.setState({
        groupName:event.target.value
    })
  }

  newG = () => {
      console.log("groupName",this.state.groupName);
      var groupObj={
        title: this.state.groupName,
        sname: "",
        view: "/dashboard/admincommunity/view/"+this.state.groupName,
        egroup: "/dashboard/admincommunity/edit/"+this.state.groupName,
      }
      tableData.dataSource.group.push(groupObj)
      this.props.history.push('/dashboard/admincommunity')
  }
  render() {
    return (
      <Box>
      <div>
      <h2>List of students</h2>
        <Table
          columns={tableData.columns.students}
          dataSource={tableData.dataSource.students}
          pagination={false}
        />
      </div>
      </Box>
    );
  }
}
