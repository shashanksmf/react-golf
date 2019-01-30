import React, { Component } from "react";
import Box from '../../components/utility/box';
import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import './spider.css'


import DATA from './data.js';
import TableWrapper from '../Tables/antTables/antTable.style';
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';


export default class Proximity extends Component {
  render() {
    const {columns, dataSource} = DATA;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };
    return (
      <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
         
      	<Row >
        <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
            rowKey="key"
            rowSelection={rowSelection}
            columns={columns}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,
              total: dataSource.length,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${
                  dataSource.length
                } Results`;
              },
            }}
          />
          </Col>

          <Col md={8} sm={8} xl={8} xs={8}></Col>

          <Col md={24} sm={8} xl={8} xs={24}>
          <TableWrapper
            rowKey="key"
            rowSelection={rowSelection}
            columns={columns}
            bordered={true}
            dataSource={dataSource}
            loading={this.props.isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,
              total: dataSource.length,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${
                  dataSource.length
                } Results`;
              },
            }}
          />
          </Col>
          </Row>
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
    );
  }
}
