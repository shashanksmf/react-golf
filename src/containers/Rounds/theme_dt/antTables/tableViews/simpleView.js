import React, { Component } from 'react';
import TableWrapper from '../antTable.style';
import { Table } from 'antd';
export default class extends Component {
  render() {

    return (
      <Table columns={  [{
        title: 'Date',
        dataIndex: 'date',
        filters: [{
          text: '1',
          value: '1',
        }, {
          text: '100',
          value: '100',
        }],

        onFilter: (value, record) => record.date.indexOf(value) === 0,
        
        sortDirections: ['descend'],
      }, {
        title: 'Golf Club',
        dataIndex: 'golfclub',
        defaultSortOrder: 'descend',
        
      }, {
        title: 'Course',
        dataIndex: 'course',
        defaultSortOrder: 'descend',
        
      }, {
        title: 'Tee',
        dataIndex: 'tee',
        defaultSortOrder: 'descend',
        
      }, {
        title: 'Type',
        dataIndex: 'type',
        defaultSortOrder: 'descend',
        
      }, {
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'descend',
        
      },

      ]} 
      dataSource={ [{
        key: '1',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: '',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        date:'13-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: 'Tournament',
        score: '10',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '3',
        date:'14-12-2017',
        golfclub:'Saheeli CC',
        course:'Saheeli CC',
        tee: 'UW/Edean',
        type: '',
        score: '12',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '4',
        date:'15-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'UW/Edean',
        type: '',
        score: '14',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '5',
        date:'16-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: 'Tournament',
        score: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '6',
        date:'13-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: 'Tournament',
        score: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '7',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: 'Tournament',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '8',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: 'Tournament',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '9',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: '',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '10',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: '',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '11',
        date:'12-12-2017',
        golfclub:'Highlands Ranch Golf Club',
        course:'Highlands Ranch Golf Club',
        tee: 'Regular',
        type: '',
        score: '0',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },]}>
      </Table>
      );
  }
}
