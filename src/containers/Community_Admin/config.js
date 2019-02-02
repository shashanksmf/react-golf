import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkbox, {
  CheckboxGroup
} from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';

var tableData = {
  columns:{
    "group":[
      {
        title: "Name of Group",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Students Count",
        dataIndex: "scount",
        key: "scount"
      },
      {
        title: "View (link)",
        dataIndex: "view",
        key: "view",
        render: (text, record) => {
          return (
            <Link to={record.view}>View</Link>
          );
        }
      },
      {
        title: "Edit Group",
        dataIndex: "egroup",
        key: "egroup",
        render: (text, record) => {
          return (
            <Link to={record.egroup}>Edit</Link>
          );
        }
      },
    ],
    "students":[
      {
        title: "Name/Firstname",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Handicap",
        dataIndex: "handicap",
        key: "handicap"
      },
      {
        title: "Scoring Average",
        dataIndex: "scoring",
        key: "scoring"
      },
      {
        title: "Rounds",
        dataIndex: "rounds",
        key: "rounds"
      },
    ],
    "studentsgroup":[
      {
        title: "Name/Firstname",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Group",
        dataIndex: "groupname",
        key: "groupname",
        render: (text, record) => {
          return (
            <Button type="primary">REMOVE</Button>
          );
        }
      },
    ],
  },

  dataSource:{
    "group":[
      {
        key: "1",
        title: "abcd",
        scount: "2",
        view: "/dashboard/admincommunity/viewgroup/abcd",
        egroup: "/dashboard/admincommunity/editgroup/abcd",
      },
    ],
    "students":[
      {
        key: "1",
        name: "qw",
        handicap: "yes",
        scoring: "10",
        rounds: "1",
        groupname:""
      },
      {
        key: "",
        name: "er",
        handicap: "no",
        scoring: "1",
        rounds: "2",
        groupname:""
      },
      {
        name: "ty",
        handicap: "no",
        scoring: "4",
        rounds: "5",
        groupname:""
      },
      {
        name: "ui",
        handicap: "yes",
        scoring: "7",
        rounds: "8",
        groupname:""
      },
    ],
  }
};


export {
  tableData
}
