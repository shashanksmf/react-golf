import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Grs extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>Scrambling %</li>
          <li>Up down %</li>
          <li>Up down Fw %</li>
          <li>Up down Rgh %</li>
        </ul>

        <br/>

        <ul>
          <li>Greenside shot distance average</li>
          <li>Greenside dispersion</li>
          <li>Average Hole outs</li>
        </ul>
      </Box>
    );
  }
}
