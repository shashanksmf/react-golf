import { Table } from "antd";
import React, { Component } from "react";
import Box from '../../components/utility/box';
import { tableData } from './config';
import './spider.css'


import DATA from './data.js';
import TableWrapper from '../Tables/antTables/antTable.style';
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import { Row, Col, Icon } from 'antd';

import { RadioGroup, RadioButton } from '../../components/uielements/radio';

import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../components/uielements/dropdown';
import Button from '../../components/uielements/button';
import { rtl } from '../../settings/withDirection';

export default class SpiderHome extends Component {

  

  state = {
		slope: 'all',
		weather: 'all',
		airspeed: 'all',
		loading: false,
		iconLoading: false,
	};

  handleSlopeChange = e => {
    this.setState({ slope: e.target.value });
  };
  handleWeatherChange = e => {
    this.setState({ weather: e.target.value });
  };
  handleAirspeedChange = e => {
    this.setState({ airspeed: e.target.value });
  };
  render() {

    const dicClicked = (
      <DropdownMenu onClick={this.handleMenuClickToLink}>
        <MenuItem key="1">Selected round </MenuItem>
        <MenuItem key="2"> Best 5 </MenuItem>
        <MenuItem key="3"> Worst 5</MenuItem>
        <MenuItem key="4"> Competition rounds</MenuItem>
        <MenuItem key="5"> Practice rounds</MenuItem>
        
      </DropdownMenu>
    );

    const langClicked = (
      <DropdownMenu onClick={this.handleMenuClickToLink}>
        <MenuItem key="1">option</MenuItem>
     
        
      </DropdownMenu>
    );

    const iconImg = {height:'25px','margin':'0 5px'}
    const mt0 = {'margin':0,'display':'flow-root'}
    const slope = this.state.slope;
		const weather = this.state.weather;
		const airspeed = this.state.airspeed;
    const gutter = 0;

    const {columns, dataSource} = DATA;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

   
    return (
      <Box title="">

        <Box title="">
        <ContentHolder style={mt0}>
              	<Col md={24} sm={2} xl={2} xs={24}>
            
              	</Col>
              	<Col md={24} sm={8} xl={8} xs={24}>
                <img src="/images/icons/golf.svg" style={iconImg} />
                <RadioGroup value={slope} onChange={this.handleSlopeChange}>
                  <RadioButton value="all">All</RadioButton>
                  <RadioButton value="slow">Slow</RadioButton>
                  <RadioButton value="med">Med</RadioButton>
                  <RadioButton value="fast">Fast</RadioButton>
                </RadioGroup>
                </Col>
                <Col md={24} sm={6} xl={6} xs={24}>
                <img src="/images/icons/wind.svg" style={iconImg} />
                <RadioGroup value={weather} onChange={this.handleWeatherChange}>
                  <RadioButton value="all">All</RadioButton>
                  <RadioButton value="norain">No Rain</RadioButton>
                  <RadioButton value="rain">Rain</RadioButton>
                </RadioGroup>
                 </Col>
                <Col md={24} sm={8} xl={8} xs={24}>
                <img src="/images/icons/air-sock.svg" style={iconImg} />
                <RadioGroup value={airspeed} onChange={this.handleAirspeedChange}>
                  <RadioButton value="all">Low</RadioButton>
                  <RadioButton value="med">Med.</RadioButton>
                  <RadioButton value="strong">Strong</RadioButton>
                </RadioGroup>
                 </Col>
              </ContentHolder>
              </Box>
        <div>
        <Box title="">
        <div className="isoInvoiceTableBtn">
            
              
                
            <Dropdown overlay={dicClicked}>
            <Button
              style={{
                margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
              }}
            >
             All rounds <Icon type="down" />
            </Button>
          </Dropdown>

          <Dropdown overlay={langClicked}>
            <Button
              style={{
                margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
              }}
            >
              Qualifying rounds  <Icon type="down" />
            </Button>
          </Dropdown>
          
        </div>
        </Box>


        <Table
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
          {/* <Table
            columns={tableData.columns.table1}
            dataSource={tableData.dataSource.table1}
            pagination={false}
          /> */}
        </div>

      </Box>
    );
  }
}
