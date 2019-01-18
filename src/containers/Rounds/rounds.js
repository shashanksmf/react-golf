import React, { Component } from "react";
import { connect } from "react-redux";
import { RadioGroup, RadioButton } from '../../components/uielements/radio';
import { Row, Col, Icon } from 'antd';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../settings/basicStyle';
import Button, { ButtonGroup } from '../../components/uielements/button';
//import RoundDT from "./roundDatatable.js";
import AntTable from "./theme_dt/antTables/tableViews/simpleView";
import Box from '../../components/utility/box';
export default class extends Component {
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
	render(){
		const slope = this.state.slope;
		const weather = this.state.weather;
		const airspeed = this.state.airspeed;
    const gutter = 0;
		// const antTable = AntTable.renderTable('sortView');

		const iconImg = {height:'25px','margin':'0 5px'}
		const mt0 = {'margin':0,'display':'flow-root'}
		const { rowStyle, colStyle } = basicStyle;
		return(
		<Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box title="">
              <ContentHolder style={mt0}>
              	<Col md={24} sm={2} xl={2} xs={24}>
              	<b>Options:</b>
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
           </Col>
          <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box title="">
           <AntTable />
           </Box>
		</Col>
          </Row>
			);
	}
}