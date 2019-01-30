import React, { Component } from "react";
import Box from '../../components/utility/box';
import './spider.css'

export default class Putting extends Component {
  render() {
    return (
      <Box title="">
        <h1>List of Tables</h1>
        <ul>
          <li>Average putt</li>
          <li>Putts/hole</li>
          <li>Putts/hole GIR</li>
          <li>Putts/hole non GIR</li>
        </ul>

        <br/>

        <ul>
          <li>Average 1 Putt</li>
          <li>Average 3 putts +</li>
          <li>Birdie conversion %</li>
        </ul>

        <br/>

        <ul>
          <li>Dist. First putt (from grs)</li>
          <li>Avr. Meter putts made</li>
        </ul>

        <br/>

        <ul>
          <li>1 putts per distance (all distance)</li>
        </ul>
      </Box>
    );
  }
}
