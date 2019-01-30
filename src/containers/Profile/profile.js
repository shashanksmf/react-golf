import React, { Component } from "react";

import contactAction from "../../redux/contacts/actions";
import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import ContactList from "../../components/contacts/contactList";
import SingleContactView from "../../components/contacts/singleView";
import EditContactView from "../../components/contacts/editView";
import DeleteButton from "../../components/contacts/deleteButton";
import { otherAttributes } from "./fakeData";
import IntlMessages from "../../components/utility/intlMessages";
import { ContactsWrapper } from "./contacts.style";
import Scrollbar from "../../components/utility/customScrollBar.js";
import EditProfile from "./editProfile";
import { connect } from "react-redux";
import actions from './../../redux/Profile/actions';
const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
} = contactAction;

const { Content } = Layout;
class Profile extends Component {

  componentDidMount() {
    this.props.getDataProfile();
  }

   
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

    console.log("redux profile data", data_recollection)


    const {
      contacts,
      seectedId,
      editView,
      changeContact,
      addContact,
      editContact,
      deleteContact,
      viewChange
    } = this.props;
    
    const selectedContact = seectedId
      ? contacts.filter(contact => contact.id === seectedId)[0]
      : null;
    const onVIewChange = () => viewChange(!editView);
    console.log("selectedContact",selectedContact,editContact);
    const myContact = {
        firstName:"asdasd",
        lastName:"aaa",
        email:"abc@gmail.com",
    };
    return (


      <ContactsWrapper
        className="isomorphicContacts"
        style={{ background: "none" }}
      >
       
        <Layout className="isoContactBoxWrapper">
          {/* {selectedContact ? (
            <Content className="isoContactBox">
              <div className="isoContactControl">
                <Button type="button" onClick={onVIewChange}>
                  {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                </Button>
                <DeleteButton
                  deleteContact={deleteContact}
                  contact={selectedContact}
                />
       
              </div>

              <Scrollbar className="contactBoxScrollbar">
                {editView ? (
                  <EditProfile contact={myContact} />
                ) : (
                  <SingleContactView
                    contact={selectedContact}
                    otherAttributes={otherAttributes}
                  />
                )}
              </Scrollbar>
            </Content>
          ) : (
            <div className="isoContactControl">
              <Button
                type="primary"
                onClick={addContact}
                className="isoAddContactBtn"
              >
                <IntlMessages id="contactlist.addNewContact" />
              </Button>
            </div>
          )} */}
        </Layout>
      </ContactsWrapper>

      
    );
  }
}

// function mapStateToProps(state) {
//     console.log("satte",state);
//   const { contacts, seectedId, editView } = state.Contacts;
//   return {
//     contacts,
//     seectedId,
//     editView
//   };
// }
// export default connect(mapStateToProps, {
//   changeContact,
//   addContact,
//   editContact,
//   deleteContact,
//   viewChange
// })(Profile);

const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, actions)(Profile);
