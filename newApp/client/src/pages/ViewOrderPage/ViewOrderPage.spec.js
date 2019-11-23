import React from 'react';
import { shallow } from 'enzyme';
import { ViewOrder } from '.';

describe('ViewOrder Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ViewOrder />
    );
  });

  it('should render ViewOrder', () => {
    expect(wrapper).toBeDefined();
  });
});
