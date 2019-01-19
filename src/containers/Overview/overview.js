import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { Radar } from 'react-chartjs-2';
import { data } from './radarConfig';
import tableData  from './data.js'
import './overview.css'

console.log("table",tableData)
export default class Overview extends Component {
  render() {
    return (
      <Box>
      <div>

      <h2>Data recollection</h2>
      <Table
        columns={tableData.columns.table1}
        dataSource={tableData.dataSource.table1}
        pagination={false}
      />

      <h2>Spider Focus</h2>
      <Table
        columns={tableData.columns.table2}
        dataSource={tableData.dataSource.table2}
        pagination={false}
      />

      <h2>Personal records</h2>
      <Table
        columns={tableData.columns.table3}
        dataSource={tableData.dataSource.table3}
        pagination={false}
      />

      <h2>Spider Grid</h2>
      <Radar data={data} height={130} />

      </div>
      </Box>

    );
  }
}
