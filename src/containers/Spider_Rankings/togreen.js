import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Togreen extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>GIR% total</li>
          <li>Par 3 GIR</li>
          <li>Par 4 GIR</li>
          <li>Par 5 GIR</li>
        </ul>

        <br/>

        <ul>
          <li>Green attacks total %</li>
          <li>Green att. FW</li>
          <li>Green att. Rough</li>
          <li>Well hit > Miss green</li>
        </ul>
      </Box>
    );
  }
}
