import React from 'react';
import { shallow } from 'enzyme';
import { Form2 } from '.';

describe('Form2 Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Form2 />
    );
  });

  it('should render Form2', () => {
    expect(wrapper).toBeDefined();
  });
});
