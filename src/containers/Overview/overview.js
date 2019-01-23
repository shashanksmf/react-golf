import { Table } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "../../components/utility/box";
import { Radar } from "react-chartjs-2";
import { data } from "./radarConfig";
import tableData from "./data.js";
import actions from './../../redux/overview/actions';
import "./overview.css";
console.log("actions", actions)
console.log("table", tableData);
class Overview extends Component {
  componentDidMount() {
    this.props.getDataRecollection();
  }
  render() {
    const {
      Overview:
      {
        recollectionData:
        {
          data_recollection,
          personal_records,
          spider_focus
        } = []
      } = []
    } = this.props;

    console.log("spider_focus", spider_focus, personal_records)

    return (
      <Box>
        <div>
          <h2> Data recollection </h2>{" "}
          <Table
            columns={tableData.columns.data_recollection}
            dataSource={data_recollection}
            pagination={false}
          />
          <h2> Spider Focus </h2>{" "}
          <Table
            columns={tableData.columns.spider_focus}
            dataSource={spider_focus}
            pagination={false}
          />
          <h2> Personal records </h2>{" "}
          <Table
            columns={tableData.columns.personal_records}
            dataSource={personal_records}
            pagination={false}
          />
          <h2> Spider Grid </h2> <Radar data={data} height={130} />
        </div>{" "}
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, actions)(Overview);
