import React, { Component } from "react";
import { connect } from "react-redux";
import basicStyle from '../../settings/basicStyle';
import FriendDt from "./friendsDt";
import { Row, Col, Icon } from 'antd';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import actions from './../../redux/Friends/actions';



 class Friends extends Component {
	state = {
	
		loading: false,
	
	};

	componentDidMount() {
    this.props.getDataFriends();
  }
	
	render(){

		 const {
      Overview:
      {
        recollectionData:
        {
          data_recollection,
      
        } = []
      } = []
    } = this.props;

    // console.log("redux friends",  data_recollection,)
    
		
    const gutter = 0;
		// const antTable = AntTable.renderTable('sortView');

		const iconImg = {height:'25px','margin':'0 5px'}
		const mt0 = {'margin':0,'display':'flow-root'}
		const { rowStyle, colStyle } = basicStyle;
		return(
		<Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box title="">
              <ContentHolder style={mt0}>
              	<FriendDt />
              </ContentHolder>
             </Box>
           </Col>
          </Row>
			);
	}
}
const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, actions)(Friends);