import React, { Component } from 'react';
import ContentHolder from '../../components/utility/contentHolder';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import Box from '../../components/utility/box';

import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  StatusTag,
} from './froms.style';
import Select, {
  SelectOption as Option,
} from '../../components/uielements/select';
import clone from 'clone';


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
              <LayoutContentWrapper>
                <Box>
                  <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                      <Form>
                        <Fieldset>
                          <Label>Full Name</Label>
                          <Input
                            label="Full Name"
                            placeholder="Enter Full Namwe"
                            />
                        </Fieldset>

                        <Fieldset>
                          <Label>Handicap</Label>
                          <Select placeholder="Is Handicap" >
                            <Option value="yes">Yes</Option>
                            <Option value="no">No</Option>
                          </Select>
                        </Fieldset>

                        <Fieldset>
                          <Label>Rounds</Label>
                          <Input
                            label="Rounds"
                            placeholder="Enter Rounds"
                            />
                        </Fieldset>

                        <Fieldset>
                          <Label>Scoring Average</Label>
                          <Input
                            label="Scoring Average"
                            placeholder="Enter Scoring Average"
                            />
                        </Fieldset>
                      </Form>
                    </ContentHolder>
                  </Box>
                </LayoutContentWrapper>
      
    );
  }
}
