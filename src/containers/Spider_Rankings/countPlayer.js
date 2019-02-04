import React, { Component } from 'react';
import basicStyle from '../../settings/basicStyle';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    countPlayer:-1
  }
  componentWillReceiveProps(newProps) {
     let selectedName=this.props.selectedPlayer;
     console.log("selectedPlayer",selectedName);
     let tableArray=this.props.dataSourceArray;
     let cnt=0;
     tableArray.map((table)=>{
       if (selectedName==table[0].Name) {
         cnt+=1;
       }
     })
     this.setState({countPlayer:cnt},()=>{console.log(this.state.countPlayer);});
  }
  render() {
    return (
      <>
      {this.state.countPlayer==-1?'':<h1>Count:{this.state.countPlayer}</h1>}
      </>
    );
  }
}
