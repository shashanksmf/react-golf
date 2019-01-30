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

export default class newGroup extends Component {
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
        view: "dashboard/adminspiderrankings/"+this.state.groupName,
        egroup: "",
      }
      tableData.dataSource.group.push(groupObj)
      this.props.history.push('/dashboard/admincommunity')
  }
  render() {
    return (
      <Box>
      <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <Col span="4">
          <h3>Enter Group Name</h3>
        </Col>
        <Col span="8">
          <Input defaultValue="" onChange={this.changeName}/>
        </Col>
        <Col span="6">
          <Button type="primary" onClick={()=>this.newG()}>New Group +</Button>
        </Col>
      </InputGroup>
      </Box>
    );
  }
}
