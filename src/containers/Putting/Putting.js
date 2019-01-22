import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { Bar } from 'react-chartjs-2';
import { data, barSettings, tableData } from './config';
import FrappeChart from "frappe-charts/dist/frappe-charts.min.esm";
import ContentHolder from "../../components/utility/contentHolder";
import "frappe-charts/dist/frappe-charts.min.css";
import * as configs from "./config";
import './putting.css'

export default class Putting extends Component {
  componentDidMount()
  {
  	new FrappeChart(configs.barChart);
  }
  render() {
    return (
      <Box>
      	<h2>Bar Graphs</h2>
	      <div>
	        <Bar
	          data={data}
	          width={barSettings.width}
	          height={barSettings.height}
	          options={{ maintainAspectRatio: false }}
	        />
	      </div>

      	<h2>Double Bar Graphs</h2>
        <div>
	        <Box title={configs.barChart.header}>
	          <ContentHolder>
	            <div id={configs.barChart.parentId} />
	          </ContentHolder>
	        </Box>
	    </div>

      	<h2>Table</h2>
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
