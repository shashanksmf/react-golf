import React, { Component } from 'react';
import ContentHolder from '../../components/utility/contentHolder';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import Box from '../../components/utility/box';

export default class extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
  }
  render() {
    return (
      <Box>
      <ContentHolder>
      <Input placeholder="Basic usage" />

      <Input placeholder="Basic usage" />

      <Input placeholder="Basic usage" />

      <Input placeholder="Basic usage" />
    </ContentHolder>
    </Box>
    );
  }
}


  // <div className="isoContactCard sc-jzJRlG jaMgbw ">
    
      //     <div className="isoContactInfoWrapper edit-contact-wrapper">
            
      //       <div className="editcontact-field">
      //           <label>First Name</label>
      //           <input type="text" value="shashank" onChange={this.handleChange}  />
      //       </div>
      //       <div className="editcontact-field">
      //           <label>Last Name</label>
      //           <input type="text" value="Jaiswal" onChange={this.handleChange}  />
      //       </div>
      //       <div className="editcontact-field">
      //           <label>First Name</label>
      //           <input type="text" value="shashank@gmail.com" onChange={this.handleChange}  />
      //       </div>
      //       <div className="editcontact-field">
      //           <label>First Name</label>
      //           MALE<input type="radio" name="gender" value="male"  onChange={this.handleChange} />
      //           Female<input type="radio" name="gender" value="female"  onChange={this.handleChange} />
      //       </div>
      //       <div className="editcontact-field">
      //           <label>SG Handicap</label>
      //           Yes<input type="radio" name="handicap" value="Yes"  onChange={this.handleChange}/>
      //           No<input type="radio" name="handicap" value="No"  onChange={this.handleChange}/>
      //       </div>
         
      //       <div className="editcontact-field">
      //           <label>Status </label>
      //          <select  onChange={this.handleChange}>
      //               <option value="grapefruit">AMATEUR</option>
      //               <option value="lime">PRO</option>
      //               <option value="coconut">COACH</option>
      //               <option value="mango">TEAM COACH</option>
      //               <option value="mango">INSTITUTIONS</option>
      //           </select>
      //       </div>
      //   </div>
      //   </div>