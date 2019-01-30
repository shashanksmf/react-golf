import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import notification from '../../components/notification';
// import Box from '../../components/utility/box';
import HelperText from '../../components/utility/helper-text';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import Scrollbars from '../../components/utility/customScrollBar';
import Button from '../../components/uielements/button';
import invoiceActions from '../../redux/invoice/actions';
import CardWrapper, { Box, StatusTag } from './invoice.style';
import TableWrapper from '../Tables/antTables/antTable.style';
import { rtl } from '../../settings/withDirection';
import { Icon, Row, Col } from 'antd';
import tableData from './data.js';

import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../components/uielements/dropdown';
import message from '../../components/uielements/message';

import { connect } from 'react-redux';
import actions from './../../redux/settingTwo/actions';

class Invoices extends Component {

  handleMenuClickToLink = e => {
    message.info('Click on menu item.');
  };

  handleMenuClickToLink = e => {
    message.info('Click on menu item.');
  };
  
  state = {
    selected: [],
  };
  componentDidMount() {

    this.props.getDataSetting();
    // const { initialInvoices, initData } = this.props;
    // if (!initialInvoices) {
    //   initData();
    // }
  }


  
  columns = [
    {
      title: '#',
      dataIndex: 'number',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'MEN',
      dataIndex: 'number',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'MEN (sr)',
      dataIndex: 'billFrom',
      rowKey: 'billFrom',
      width: '25%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'WOMEN',
      dataIndex: 'billTo',
      rowKey: 'billTo',
      width: '22%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'WOMEN (sr)',
      dataIndex: 'totalCost',
      rowKey: 'totalCost',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    
  ];

  columns_mature = [
    {
      title: '#',
      dataIndex: 'number',
      rowKey: 'number',
      width: '20%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'AMATEUR MEN',
      dataIndex: 'number',
      rowKey: 'number',
      width: '20%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'AMATEUR WOMEN',
      dataIndex: 'billFrom',
      rowKey: 'billFrom',
      width: '20%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'JUNIORS',
      dataIndex: 'billTo',
      rowKey: 'billTo',
      width: '31%',
      render: text => <span>{text}</span>,
    },
    
  ];

  

  getnewInvoiceId = () => new Date().getTime();
  render() {

    const {
      Overview:
      {
        recollectionData:
        {
          data_recollection,
        
        } = []
      } = []
    } = this.props;

    console.log("setting redux data", data_recollection)

    const dicClicked = (
      <DropdownMenu onClick={this.handleMenuClickToLink}>
        <MenuItem key="1">Yeards</MenuItem>
        <MenuItem key="2">Meters </MenuItem>
        
      </DropdownMenu>
    );

    const langClicked = (
      <DropdownMenu onClick={this.handleMenuClickToLink}>
        <MenuItem key="1">English</MenuItem>
        <MenuItem key="2">French </MenuItem>
        
      </DropdownMenu>
    );

    
   const { match, invoices, deleteInvoice } = this.props;
    const { selected } = this.state;
    const rowSelection = {
      hideDefaultSelections: true,
      selectedRowKeys: selected,
      onChange: selected => this.setState({ selected }),
      selections: [
        {
          key: 'all-data',
          text: 'Select All Invoices',
          onSelect: () =>
            this.setState({
              selected: this.props.invoices.map(invoice => invoice.key),
            }),
        },
        {
          key: 'no-data',
          text: 'Unselect all',
          onSelect: () => this.setState({ selected: [] }),
        },
        {
          key: 'delete-selected',
          text: 'Delete selected',
          onSelect: changableRowKeys => {
            if (selected.length > 0) {
              deleteInvoice(selected);
              this.setState({ selected: [] });
              notification('error', `${selected.length} invoices deleted`);
            }
          },
        },
      ],
      onSelection: selected => this.setState({ selected }),
      
    };
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.invoice" />
        </PageHeader>
        <Box>
          <div className="isoInvoiceTableBtn">
            
              
                
              <Dropdown overlay={dicClicked}>
              <Button
                style={{
                  margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                }}
              >
                Distance measurement  <Icon type="down" />
              </Button>
            </Dropdown>

            <Dropdown overlay={langClicked}>
              <Button
                style={{
                  margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                }}
              >
                Language <Icon type="down" />
              </Button>
            </Dropdown>
            
          </div>

          <CardWrapper title="Invoices">
            {/* {invoices.length === 0 ? (
              <HelperText text="No Invoices" />
            ) : (
              <div className="isoInvoiceTable">
                <Scrollbars style={{ width: '100%' }}>
                  <TableWrapper
                    rowSelection={rowSelection}
                    dataSource={tableData.dataSource.table1}
                    columns={tableData.columns.table1}
                    
                    pagination={false}
                    className="invoiceListTable"
                  />
                       
                  <TableWrapper
                    rowSelection={rowSelection}
                    dataSource={tableData.dataSource.table2}
                    columns={tableData.columns.table2}
                    
                    pagination={false}
                    className="invoiceListTable"
                  />
                </Scrollbars>
              </div>
            )} */}
          </CardWrapper>
        </Box>
      </LayoutWrapper>
    );
  }
}


const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, actions)(Invoices);


// function mapStateToProps(state) {
//   return {
//     ...state.Invoices,
//   };
// }
// export default connect(
//   mapStateToProps,
//   invoiceActions
// )(Invoices);
