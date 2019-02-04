import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from '../../components/uielements/popover';
import IntlMessages from '../../components/utility/intlMessages';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';
import { Link } from 'react-router-dom';


const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  
  }
  
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    console.log("topbar user",this.props)
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
      
         <Link to="/dashboard/profile" className="isoDropdownLink" hidden={this.props.isAdmin || false}>
         
          {"Profile"}
        </Link>

        <Link to="/dashboard/settings" className="isoDropdownLink" hidden={this.props.isAdmin || false}>
          <IntlMessages id="themeSwitcher.settings" />
        </Link>
        <Link to="/dashboard/adminsettings" className="isoDropdownLink" hidden={this.props.isAdmin || false} >
          {"Change password"}
        </Link>
        <Link to="/dashboard/help" className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </Link>
        <a className="isoDropdownLink" onClick={this.props.logout} href="# ">
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(
  state => ({isAdmin:state.Auth.isAdmin || false}),
  { logout }
)(TopbarUser);
