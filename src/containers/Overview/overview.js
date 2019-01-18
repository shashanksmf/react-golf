import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { Radar } from 'react-chartjs-2';
import { data } from './radarConfig';
import tableData  from './data.js'
console.log("table",tableData)
export default class Overview extends Component {
  render() {
    return (
      <Box>
      <div>

      <Table
        columns={tableData.columns}
        dataSource={tableData.dataSource}
        pagination={false}
      />

      <Table
        columns={[
          {
            title: "Off the tee",
            dataIndex: "off",
            key: "off"
          },
          {
            title: "Long Shots",
            dataIndex: "long",
            key: "long"
          },
          {
            title: "Approach Green",
            dataIndex: "approach",
            key: "approach"
          },
          {
            title: "Greenside",
            dataIndex: "green",
            key: "green"
          },
          {
            title: "Putting",
            dataIndex: "putting",
            key: "putting"
          },
          {
            title: "Scoring",
            dataIndex: "scoring",
            key: "scoring"
          }
        ]}
        dataSource={[
          {
            key: "1",
            off: "0.8",
            long: "0.1",
            approach: "0.9",
            green:"0.1",
            putting:"0.2",
            scoring:"0.1"
          },
        ]}
        pagination={false}
      />

      <Table
        columns={[
          {
            title: "All rounds are 18 holes only (completed)",
            dataIndex: "all",
            key: "all"
          },
          {
            title: "",
            dataIndex: "rounds",
            key: "rounds"
          }
        ]}
        dataSource={[
          {
            key: "1",
            all: "Lowest Score (from list of rounds)",
            rounds: "64",
          },
          {
            key: "2",
            all: "Birdies (most birdies in one round)",
            rounds: "9",
          },
          {
            key: "3",
            all: "GIR (most greens in regulation in one round)",
            rounds: "15",
          },
          {
            key: "4",
            all: "Fairways (most fairways in one round %)",
            rounds: "71%",
          },
          {
            key: "5",
            all: "least amount of Putts (lowest nbr of putts recorded in a round)",
            rounds: "26",
          },
        ]}
        pagination={false}
      />

      <Table
        columns={[
          {
            dataIndex: "putt",
            key: "putt"
          },
          {
            dataIndex: "distance",
            key: "distance"
          }
        ]}
        dataSource={[
          {
            key: "1",
            putt: "longest putt made (Longest distance single putt made during a round) no flash round",
            distance: "14m"
          },
          {
            key: "2",
            putt: "Best SG putting (best Strokes gained putting in a single full round) no flash round",
            distance: "2.681"
          }
        ]}
        pagination={false}
      />

      <Radar data={data} height={130} />

      </div>
      </Box>

    );
  }
}
