import { Table } from "antd";
import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import Box from '../../components/utility/box';
import { tableData } from './config';
import { spiderData } from "./spiderconfig";
import './spider.css'

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
import Filters from './filters'
import DATA from './data.js';
import Checkbox, {
  CheckboxGroup
} from '../../components/uielements/checkbox';

export default class SpiderHome extends Component {

  state = {
		slope: 'all',
		weather: 'all',
		airspeed: 'all',
		loading: false,
		iconLoading: false,
    dataSource:DATA.dataSource,
    hide:false
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
  dataChange=data=>{
    console.log("dataChange",data);
    this.setState({dataSource:data});
  }
  tabledataSource=data=>{
    console.log("dataChange",data);
    this.setState({dataSource:data});
  }
  handleOnCheckChange = checkedValues => {
    this.setState({hide:checkedValues.target.checked});
  };

  render() {
    const { rowStyle, colStyle } = basicStyle;

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
           <Checkbox onChange={this.handleOnCheckChange} style={{ height:'50px', fontSize:'25px' }}>Hide</Checkbox>
           {this.state.hide?"":
          <div>

        <Box title="">
          <ContentHolder style={mt0}>
               
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
                    <RadioButton value="all">All</RadioButton>
                    <RadioButton value="low">Low</RadioButton>
                    <RadioButton value="med">Med.</RadioButton>
                    <RadioButton value="strong">Strong</RadioButton>
                  </RadioGroup>
                   </Col>
          </ContentHolder>
        </Box>

       
         
          
            <Filters dataChange={this.dataChange} tabledataSource={this.tabledataSource}/>
            <Table
                columns={columns}
                bordered={true}
                dataSource={this.state.dataSource}
                pagination= {false}
              />
              </div>
            }
       
        <h2> Spider Grid </h2> <Radar data={spiderData} height={130} />
      </Box>
    );
  }
}
