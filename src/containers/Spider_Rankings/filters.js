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
    srounds:"stable",
    qrounds:"qtable",
    dataSource:DATA.dataSource
  }
  handleSelectedChange = e => {
    this.setState({ srounds: e });
    var arr;
    if(e==1){
      arr=DATA.dataSource.sort(function(a,b) {
        return b.Score - a.Score;
      });
      arr=arr.slice(0,5);
    }
    else if (e==2) {
      arr=DATA.dataSource.sort(function(a,b) {
        return a.Score - b.Score;
      });
      arr=arr.slice(0,5);
    }
    else {
      arr=DATA.dataSource;
    }
    this.setState({dataSource:arr});
    this.props.dataChange(arr)
    // this.props.dataSource(this.state.dataSource);
  };
  handleQualifyingChange = e => {
    this.setState({ qrounds: e });
  };
  handleDataSource=()=>{
    this.props.tabledataSource(this.state.dataSource);
  };
  render() {
    // const newData = data[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];
    const srounds= this.state.srounds;
    const qrounds= this.state.qrounds;
    const { rowStyle, colStyle } = basicStyle;
    const selectDropDown = (
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
    const qualifyingDropDown = (
      <Select
				defaultValue={qrounds}
				onChange={this.handleQualifyingChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="qtable" disabled={true}>Qualifying rounds</SelectOption>
				<SelectOption value="1"> 1 </SelectOption>
        <SelectOption value="2"> 2 </SelectOption>
        <SelectOption value="3"> 3 </SelectOption>
        <SelectOption value="4"> 4 </SelectOption>
			</Select>
    );
    const groupDropDown = (
      <Select
				defaultValue={qrounds}
				onChange={this.handleQualifyingChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="qtable" disabled={true}>Groups</SelectOption>
				<SelectOption value="1"> abcd </SelectOption>
        <SelectOption value="2"> qwer </SelectOption>
        <SelectOption value="3"> asdf </SelectOption>
        <SelectOption value="4"> zxcv </SelectOption>
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
          <Col md={6} sm={12} xs={12} xl={6} style={colStyle}>
            <input type="date" name="bday" style={{ width: '100%', height:'33px' }}/>
          </Col>
        </div>
      </Box>
    );
  }
}
