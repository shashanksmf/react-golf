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
import Select, { SelectOption } from '../../components/uielements/select';
import basicStyle from '../../settings/basicStyle';

export default class SpiderHome extends Component {



  state = {
		slope: 'all',
		weather: 'all',
		airspeed: 'all',
		loading: false,
		iconLoading: false,
    srounds:"stable",
    qrounds:"qtable",
    dataSource:DATA.dataSource
	};

  handleSelectedChange = e => {
		this.setState({ srounds: e });
    var arr;
    if(e==1){
      arr=DATA.dataSource.sort(function(a,b) {
        return b.Score - a.Score;
      });
    }
    else if (e==2) {
      arr=DATA.dataSource.sort(function(a,b) {
        return a.Score - b.Score;
      });
    }
    else {
      arr=DATA.dataSource;
    }
    arr=arr.slice(0,5);
    this.setState({dataSource:arr});
	};
  handleQualifyingChange = e => {
		this.setState({ qrounds: e });
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
    const srounds= this.state.srounds;
    const qrounds= this.state.qrounds;
    const { rowStyle, colStyle } = basicStyle;

    const sClicked = (
      <Select
				defaultValue={srounds}
				onChange={this.handleSelectedChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="stable" disabled={true}>Select Round</SelectOption>
				<SelectOption value="1"> Best 5 </SelectOption>
				<SelectOption value="2"> Worst 5</SelectOption>
				<SelectOption value="3"> Competition rounds</SelectOption>
				<SelectOption value="4"> Practice rounds</SelectOption>
			</Select>
    );

    const qClicked = (
      <Select
				defaultValue={qrounds}
				onChange={this.handleQualifyingChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="qtable" disabled={true}>Qualifying rounds</SelectOption>
				<SelectOption value="1"> options </SelectOption>
			</Select>
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
              <Col md={12} sm={24} xs={24} xl={12} style={colStyle}>
                  {sClicked}
              </Col>
              <Col md={12} sm={24} xs={24} xl={12} style={colStyle}>
                  {qClicked}
              </Col>
            </div>
          </Box>

        <Table
            columns={columns}
            bordered={true}
            dataSource={this.state.dataSource}
            pagination= {false}
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
