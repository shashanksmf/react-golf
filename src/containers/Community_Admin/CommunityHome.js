import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { data, barSettings, tableData } from './config';
import ContentHolder from "../../components/utility/contentHolder";
import './community.css'

export default class CommunityHome extends Component {
  render() {
    return (
      <Box>
        <h2>Table 1-List of groups created with numbers of student (overview)</h2>
  	    <div>
  	      <Table
  	        columns={tableData.columns.table1}
  	        dataSource={tableData.dataSource.table1}
  	        pagination={false}
  	      />
  	    </div>

        <h2>Table 2- List of students : (community feature in the app)</h2>
  	    <div>
  	      <Table
  	        columns={tableData.columns.table2}
  	        dataSource={tableData.dataSource.table2}
  	        pagination={false}
  	      />
  	    </div>
      </Box>
    );
  }
}
