import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { tableData } from './config';
import './spider.css'

export default class SpiderHome extends Component {
  render() {
    return (
      <Box title="">
        <h2>Add filters below to select the criteria in the rankings. It will generate ranking upon selection starting with SCORING</h2>
        <div>
          <Table
            columns={tableData.columns.table1}
            dataSource={tableData.dataSource.table1}
            pagination={false}
          />
        </div>
      </Box>
    );
  }
}
