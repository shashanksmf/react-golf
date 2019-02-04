import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'


import DATA from './data.js';
import TableWrapper from '../Tables/antTables/antTable.style';
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import { Row, Col, Icon } from 'antd';
import CountPlayer from './countPlayer';
const { dataSource,columns} = DATA;

export default class Scoring extends Component {

  constructor(){
    super()
    this.state = { selectedName : '', countPlayer:-1}
  }

  setRenderInColumns = (columnsData) => {
    let that = this;
    columnsData.forEach(item => {
      item.render = function(record, text) {
        // console.log("record,texst",record,text,item);
        if(record == text.Name)  {
           return <span onClick={()=>that.selectedPlayer(record)} className={that.state.selectedName == record ? 'active' : ''}>{record}</span>
        }
        return record
      }
    })
    return columnsData
   }

   selectedPlayer=(record)=>{
     this.setState({ selectedName : record},
       () =>{
       this.countPlayer();
      }
     )
   }

   countPlayer=()=>{
     let selectedName=this.state.selectedName;
     // console.log("selectedPlayer",selectedName);
     let tableArray=[dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource]
     let cnt=0;
     tableArray.map((table)=>{
       if (selectedName==table[0].Name) {
         cnt+=1;
       }
     })
     this.setState({countPlayer:cnt})
   }

  render() {
    let tableArray=[dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource,dataSource];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

    return (
      <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
      	<Row >
        <CountPlayer dataSourceArray={tableArray} selectedPlayer={this.state.selectedName}/>
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>

            {/* ############################################################## */}
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>

      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>

              {/* ############################################################## */}
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>

      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>

        {/* ############################################################## */}
        <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>

      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>

        {/* ############################################################## */}
        <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>

      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>

        {/* ############################################################## */}
        <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>

      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
         	  // onRow = {record => this.setState({ selectedName:record.Name })}
            rowKey="key"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <TableWrapper
            rowKey="key1"
            rowSelection={rowSelection}
            columns={this.setRenderInColumns(columns)}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,

            }}
          />

          </Row>
        </ContentHolder>
      </Box>


    </LayoutContentWrapper>
    );
  }
}
