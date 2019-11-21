import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '.';

describe('Form Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Form />
    );
  });

  it('should render Form', () => {
    expect(wrapper).toBeDefined();
  });
});
