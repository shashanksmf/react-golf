import React, { Component } from "react";
import Box from '../../components/utility/box';
import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import './spider.css'

export default class Proximity extends Component {
  render() {
    return (
      <Box title="">
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="2">
            <h3>Filters:</h3>
          </Col>
          <Col span="4">
            <Input defaultValue="%" />
          </Col>
          <Col span="4">
            <Input defaultValue="m,yards" />
          </Col>
        </InputGroup>
        <h1>List of Tables</h1>
        <ul>
          <li>All distances in dispersion->Target/Flag</li>
          <li>From 30 to 250</li>
        </ul>
      </Box>
    );
  }
}
