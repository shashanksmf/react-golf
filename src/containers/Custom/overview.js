import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';

export default class Overview extends Component {
  render() {
    return (
      <Box>
      <div>

      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => {
              return (
                <div className="text-img-wrapper">
                  <span>{record.name}</span>
                  <br />
                  <img src={record.image} />
                </div>
              );
            }
          },
          {
            title: "Handicap",
            dataIndex: "handicap",
            key: "Handicap"
          },
          {
            title: "Scoring average",
            dataIndex: "scoring",
            key: "scoring"
          },
          {
            title: "Rounds",
            dataIndex: "rounds",
            key: "rounds"
          },
          {
            title: "Ranking",
            dataIndex: "ranking",
            key: "ranking"
          }
        ]}
        dataSource={[
          {
            key: "1",
            name: "Cédric DENIS",
            handicap: "+2.7",
            scoring: "68.8",
            rounds:"10",
            ranking:"T12",
            image:
              "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
          }
        ]}
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
      />

      <Table
        columns={[
          {
            title: "All rounds are 18 holes only (completed)",
            dataIndex: "all",
            key: "all"
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
      />

      </div>
      </Box>

    );
  }
}
