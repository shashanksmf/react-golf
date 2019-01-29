import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Tff extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>Fairways %</li>
          <li>Miss left</li>
          <li>Miss right</li>
          <li>Average Distance</li>
        </ul>

        <br/>

        <ul>
          <li>Average Score fairway hit</li>
          <li>Average score fairway missed</li>
          <li>Well hit -> miss fairway</li>
        </ul>
      </Box>
    );
  }
}
