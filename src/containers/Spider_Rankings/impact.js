import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Impact extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>TOTAL</li>
          <li>TEE</li>
          <li>LONG SHOT LAY UP</li>
          <li>TO THE GREEN</li>
          <li>GREENSIDE</li>
          <li>PUTTING</li>
        </ul>
      </Box>
    );
  }
}
