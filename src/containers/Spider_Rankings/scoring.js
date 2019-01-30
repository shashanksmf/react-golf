import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Scoring extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>Strokes to par</li>
          <li>Birdies</li>
          <li>Par</li>
          <li>Bogeys</li>
          <li>Double or worse</li>
        </ul>
        <br/>
        <ul>
          <li>Par 3 scoring</li>
          <li>Par 4 scoring</li>
          <li>Par 5 scoring</li>
        </ul>
        <br/>
        <ul>
          <li>Front nine</li>
          <li>Back nine</li>
          <li>First 6</li>
          <li>Middle 6</li>
          <li>Last 6</li>
        </ul>
      </Box>
    );
  }
}
