import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Sg extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>Total</li>
          <li>Tee to green</li>
          <li>Off the tee</li>
          <li>Long shot and layup</li>
          <li>To the green</li>
          <li>Greenside</li>
        </ul>

        <br/>

        <ul>
          <li>All putting distances +</li>
          <li>30-60</li>
          <li>60-90</li>
          <li>90-120</li>
          <li>120-150</li>
          <li>150-180</li>
          <li>180-210</li>
          <li>210-250</li>
          <li>250+</li>
        </ul>
      </Box>
    );
  }
}
