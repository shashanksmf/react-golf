import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import Tabs, { TabPane } from "../../../components/uielements/tabs";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper.js";
import ContentHolder from "../../../components/utility/contentHolder";
import {
  DateRangePicker,
  SingleDatePicker
} from "../../../components/uielements/reactDates";
import basicStyle from "../../../settings/basicStyle";
import configs from "./config";
import {  ReactDatesWrapper } from "./reactDates.style";

class ReactDates extends Component {
  constructor(props) {
    super(props);
    this.renderDatePicker = this.renderDatePicker.bind(this);
    
    this.state = {
      isRangePicker: false,
      configsValue: configs,
      singleFocused: true,
      singleResult: null,
      focusedInput: "startDate",
      startDate: null,
      endDate: null
    };
  }
 
  renderDatePicker(config) {
    const {
      isRangePicker,
      startDate,
      endDate,
      focusedInput,
     
    } = this.state;
    let options;
    if (isRangePicker) {
      options = {
        startDate,
        endDate,
        onDatesChange: ({ startDate, endDate }) =>
          this.setState({ startDate, endDate }),
        focusedInput,
        onFocusChange: focusedInput => {
          this.setState({ focusedInput });
        }
      };
    } 
    if (this.props.view === "MobileView") {
      options.numberOfMonths = 1;
    }
    return (
      <div className="isoReactDate">
        <DateRangePicker isOutsideRange={() => false} {...options} />
      </div>
    );
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
    
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box>
              <ContentHolder>
                <Tabs
                  onChange={() => {
                    this.setState({
                      isRangePicker: !this.state.isRangePicker
                    });
                  }}
                >
                  {configs.map(config => (
                    <TabPane tab={config.title} key={config.id} />
                  ))}
                </Tabs>
              
                <ReactDatesWrapper>
                  {this.renderDatePicker(configs[1])}
                </ReactDatesWrapper>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default connect(state => ({
  view: state.App.view
}))(ReactDates);
