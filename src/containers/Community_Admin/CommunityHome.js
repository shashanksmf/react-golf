import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import Button, { ButtonGroup } from '../../components/uielements/button';
import { tableData } from './config';
import { Col, Row, Icon } from 'antd';
import ContentHolder from "../../components/utility/contentHolder";
import './community.css'

export default class CommunityHome extends Component {
  render() {
    const margin = {
      margin: '50px'
    };
    return (
      <Box>
      <div>
        <h2>Table 1-List of groups created with numbers of student (overview)</h2>
        <Col span="20">
  	      <Table
  	        columns={tableData.columns.group}
  	        dataSource={tableData.dataSource.group}
  	        pagination={false}
  	      />
        </Col>
        <Col span="4">
          <Button type="primary" style={margin} onClick={()=>this.props.history.push('/dashboard/admincommunity/newgroup')}>New Group +</Button>
        </Col>
	    </div>

        <div>
        <h2>Table 2- List of students : (community feature in the app)</h2>
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
