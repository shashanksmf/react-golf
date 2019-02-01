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

import TopbarSearchModal from "./topbarSearchModal.style";
// import Searchbar from "../../components/topbar/searchBox";
import Searchbar from "./addForm";

export default class editGroup extends Component {
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



  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleBlur = () => {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 200);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  render() {

    const { customizedTheme } = this.props;
    const { visible } = this.state;
    const margin = {
      margin: '50px'
    };
    return (
      <div>


        <TopbarSearchModal
          visible={visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="60%"
          footer={null}
        >
          <div >
            {visible ? <Searchbar onBlur={this.handleBlur} /> : ""}
          </div>
        </TopbarSearchModal>
     
      
      <Box>
        <div>
          <h2>List of students</h2>
          <Table
            columns={tableData.columns.studentsgroup}
            dataSource={tableData.dataSource.students}
            pagination={false}
          />
        </div>
        <Button type="primary" style={margin} onClick={this.showModal}>Add to Group</Button>

      </Box>
      </div>
    );
  }
}
