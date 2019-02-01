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
  render() {
    // const newData = data[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];
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
    // console.log(this.props.dataSource);

    return (
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
    );
  }
}
