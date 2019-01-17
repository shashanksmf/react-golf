import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarNotification from "./topbarNotification";
import TopbarMessage from "./topbarMessage";
import TopbarSearch from "./topbarSearch";
import TopbarUser from "./topbarUser";
import TopbarAddtoCart from "./topbarAddtoCart";
import TopbarWrapper from "./topbar.style";
import IsoDropDown from "../Uielements/Dropdown/dropdown"
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../components/uielements/dropdown';
import message from '../../components/uielements/message';
import { Icon, Row, Col } from 'antd';
import Buttons from '../../components/uielements/button';
import ContentHolder from '../../components/utility/contentHolder';
import { rtl } from '../../settings/withDirection';
import * as TableViews from './tableViews/';
import fakeData from '../Tables/fakeData';
import { tableinfos } from '../Tables/antTables/configs';
const Button = Buttons;
const DropdownButton = DropdownButtons;
let Component = TableViews.SimpleView;
const dataList = new fakeData(10);

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  handleMenuClickToLink = e => {
    message.info('Click on menu item.');
  };

  render() {
    const { toggleCollapsed, url, customizedTheme, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    const menuClicked = (
      <DropdownMenu onClick={this.handleMenuClickToLink}>
        <MenuItem key="1">1st menu item</MenuItem>
        <MenuItem key="2">2nd menu item</MenuItem>
        <MenuItem key="3">3d menu item</MenuItem>
      </DropdownMenu>
    );


    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <div>
            <label>Base:</label>
            <Dropdown overlay={menuClicked}>
              <Button
                style={{
                  margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                }}
              >
                Drop Down Menu1 <Icon type="down" />
              </Button>
            </Dropdown>
          </div>

          <div>
            <label>Compare To:</label>
            <Dropdown overlay={menuClicked}>
              <Button
                style={{
                  margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                }}
              >
                Drop Down Menu2 <Icon type="down" />
              </Button>
            </Dropdown>
          </div>

          <ul className="isoRight">
            <li
              onClick={() => this.setState({ selectedItem: "notification" })}
              className="isoNotify"
            >
              <TopbarNotification locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "message" })}
              className="isoMsg"
            >
              <TopbarMessage locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App,
    locale: state.LanguageSwitcher.language.locale,
    customizedTheme: state.ThemeSwitcher.topbarTheme
  }),
  { toggleCollapsed }
)(Topbar);
