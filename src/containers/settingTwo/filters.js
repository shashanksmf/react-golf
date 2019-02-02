import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Box from '../../components/utility/box';
import Select, { SelectOption } from '../../components/uielements/select';
import DATA from './data.js';
import basicStyle from '../../settings/basicStyle';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    srounds:"null",
    qrounds:"qtable",
   
  }
  
  
  
  render() {
    // const newData = data[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];
    const srounds= this.state.srounds;
    const qrounds= this.state.qrounds;
    const { rowStyle, colStyle } = basicStyle;
    const selectDropDown = (
      <Select
				defaultValue={srounds}
		
				style={{ width: '100%' }}
			>
				<SelectOption value="null" disabled={true}> Distance measurement </SelectOption>
				<SelectOption value="1"> Yeards </SelectOption>
				<SelectOption value="2">Meters</SelectOption>
				
			</Select>
    );
    const qualifyingDropDown = (
      <Select
				defaultValue={qrounds}
			
				style={{ width: '100%' }}
			>
				<SelectOption value="qtable" disabled={true}>Language</SelectOption>
				<SelectOption value="1">English</SelectOption>
        <SelectOption value="2">French</SelectOption>
      
			</Select>
    );
    const groupDropDown = (
      <Select
				defaultValue={qrounds}
				onChange={this.handleQualifyingChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="qtable" disabled={true}>College Year</SelectOption>
				<SelectOption value="1"> None </SelectOption>
        <SelectOption value="2"> Freshman </SelectOption>
        <SelectOption value="3"> Sophomore </SelectOption>
        <SelectOption value="4"> Junior </SelectOption>
        <SelectOption value="4"> Senior </SelectOption>
			</Select>
    );
    // this.handleDataSource();
    // this.props.tabledataSource(this.state.dataSource);
    console.log("state dataSource",this.state.dataSource);

    return (
      <Box title="">
        <div className="isoInvoiceTableBtn">
          <Col md={6} sm={12} xs={12} xl={6} style={colStyle}>
              {selectDropDown}
          </Col>
          <Col md={6} sm={12} xs={12} xl={6} style={colStyle}>
              {qualifyingDropDown}
          </Col>
          <Col md={6} sm={12} xs={12} xl={6} style={colStyle}>
              {groupDropDown}
          </Col>
         
        </div>
      </Box>
    );
  }
}
