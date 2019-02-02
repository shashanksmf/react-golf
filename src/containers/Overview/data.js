import React, { Component } from "react";
const tableData = {

  columns:{
    "data_recollection":[
          {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => {
          return (
            <div className="text-img-wrapper">
              <span>{record.name}</span>
             
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
      }],
      "spider_focus":[
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
    ],
      "personal_records":[
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
    ],
      "table4":[
      {
        dataIndex: "putt",
        key: "putt"
      },
      {
        dataIndex: "distance",
        key: "distance"
      }
    ]
  },

  dataSource:{
    "table1":[
      {
        key: "1",
        name: "Cédric DENIS",
        handicap: "+2.7",
        scoring: "68.8",
        rounds:"10",
        ranking:"T12",
        image:"https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
      }],
      "table2":[
        {
        key: "1",
        off: "0.8",
        long: "0.1",
        approach: "0.9",
        green:"0.1",
        putting:"0.2",
        scoring:"0.1",
      }],
      "table3":[
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
      {
        key: "6",
        all: "longest putt made (Longest distance single putt made during a round) no flash round",
        rounds: "14m"
      },
      {
        key: "7",
        all: "Best SG putting (best Strokes gained putting in a single full round) no flash round",
        rounds: "2.681"
      }
    ],
  }
}

export default tableData;
