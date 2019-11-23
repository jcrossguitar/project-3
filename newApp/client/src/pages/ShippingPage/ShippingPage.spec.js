import React from 'react';
import { shallow } from 'enzyme';
import { Shipping } from '.';

describe('Shipping Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Shipping />
    );
  });

  it('should render Shipping', () => {
    expect(wrapper).toBeDefined();
  });
});
