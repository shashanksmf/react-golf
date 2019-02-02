import React, { Component } from "react";

import { Row, Col, Icon } from 'antd';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../settings/basicStyle';
import Button, { ButtonGroup } from '../../components/uielements/button';
//import RoundDT from "./roundDatatable.js";
import Box from '../../components/utility/box';
import BarChart  from './barchart/bar'
import MainGraph from './mainGraph';
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../components/uielements/dropdown';
import { rtl } from '../../settings/withDirection';
import Select, { SelectOption } from '../../components/uielements/select';


import { connect } from "react-redux";
import actions from './../../redux/Trends/actions';

class Trends extends Component {
	state={
			firstGraphVal:"firstgraph",
			secondGraphVal:"secondgraph",
	}


	componentDidMount() {
		this.props.getDataTrends();
	  }

	handleFirstChange = e => {
		this.setState({ firstGraphVal: e });
		
	};
	handleSecondChange = e => {
		this.setState({ secondGraphVal: e });
		
	};
		render(){

			const {
				Overview:
				{
				  recollectionData:
				  {
					data_recollection,
					
				  } = []
				} = []
			  } = this.props;
		  
			  console.log("redux trends data", data_recollection)














			const firstGraphVal= this.state.firstGraphVal;
			const secondGraphVal= this.state.secondGraphVal;
			const gutter = 10;
		// const antTable = AntTable.renderTable('sortView');
	
		const iconImg = {height:'25px','margin':'0 5px'}
		const mt0 = {'margin':"0",'display':'flow-root'}
		const { rowStyle, colStyle } = basicStyle;
		console.log(basicStyle)
		const firstMenuClicked = (
	      <DropdownMenu onClick={this.handleMenuClickToLink}>
	        <MenuItem key="1">Waggled Stroke Gained Total</MenuItem>
	        <MenuItem key="2">Waggled Stroke Gained driving</MenuItem>
	        <MenuItem key="3">Waggled Stroke Gained Approch Play</MenuItem>
					<MenuItem key="4">Waggled Stroke Gained Short Game</MenuItem>
					<MenuItem key="5">Waggled Stroke Gained Putting</MenuItem>
					<MenuItem key="6">Official Stroke Vs. Field</MenuItem>
					<MenuItem key="7">Official GIR Vs. Field</MenuItem>
					<MenuItem key="8">Official Fairways Vs. Field</MenuItem>
	      </DropdownMenu>
			);

		const firstGraphDD = (
			<Select
				defaultValue={firstGraphVal}
				onChange={this.handleFirstChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="firstgraph" disabled={true}>First Graph</SelectOption>
				<SelectOption value="1">Spider Hcp</SelectOption>
				<SelectOption value="2">Stroke</SelectOption>
				<SelectOption value="3">Fairways</SelectOption>
				<SelectOption value="4">GIR</SelectOption>
				<SelectOption value="5">Putts</SelectOption>
				<SelectOption value="6">Pair 3 averages</SelectOption>
				<SelectOption value="7">Pair 4 averages</SelectOption>
				<SelectOption value="8">Pair 5 averages</SelectOption>
				<SelectOption value="8">% Birdie converstion</SelectOption>
				<SelectOption value="8">% Pair converstion</SelectOption>
				<SelectOption value="8">Greenside Dispersion</SelectOption>
				<SelectOption value="8">Wasted Shots</SelectOption>
				<SelectOption value="8">Quality %</SelectOption>
				<SelectOption value="8">Green Reading</SelectOption>
				<SelectOption value="8">Stroke Gained</SelectOption>
			</Select>
		)
		const secondGraphDD = (
			<Select
				defaultValue={secondGraphVal}
				onChange={this.handleSecondChange}
				style={{ width: '100%' }}
			>
			<SelectOption value="secondgraph" disabled={true}>Second Graph</SelectOption>
			<SelectOption value="1">Strokes gained Total</SelectOption>
			<SelectOption value="2">SG tee to green</SelectOption>
			<SelectOption value="3">SG off the tee</SelectOption>
			<SelectOption value="4">SG lay ups</SelectOption>
			<SelectOption value="5">SG To Green</SelectOption>
			<SelectOption value="6">SG Greenside</SelectOption>
			</Select>
		)
		console.log("secondGraphVal",secondGraphVal);
			return(
				
						<Row style={rowStyle} gutter={gutter} justify="start">
	         				 <Col md={24} sm={24} xs={24} style={colStyle}>
	            				<Box title="">
	              					<ContentHolder style={mt0}>
														<Col md={12} sm={8} xs={8} xl={8} style={colStyle}>
																{firstGraphDD}
														</Col>
														<Col md={12} sm={8} xs={8} xl={8} style={colStyle}>
																{secondGraphDD}
														</Col>
														<Col md={6} sm={4} xs={4} xl={4} style={colStyle}>
           														 <input type="date" name="from_date" style={{ width: '100%', height:'33px' }}/>
          												</Col>
														  <Col md={6} sm={4} xs={4} xl={4} style={colStyle}>
           														 <input type="date" name="to_date" style={{ width: '100%', height:'33px' }}/>
          												</Col>
														{/* <Col md={24} sm={24} xs={24} xl={24} style={colStyle}>
															<MainGraph />
														</Col> */}
														<Col md={12} sm={24} xs={24} xl={24} style={colStyle}>
															<BarChart val={firstGraphVal}/>
														</Col>
														<Col md={12} sm={24} xs={24} xl={24} style={colStyle}>
															<BarChart val={secondGraphVal}/>
														</Col>
														
													</ContentHolder>
	              				</Box>
	              		</Col>
	            </Row>
			)
		}
}

const mapStateToProps = state => {
	return state;
  };
  
  
  export default connect(mapStateToProps, actions)(Trends);
  