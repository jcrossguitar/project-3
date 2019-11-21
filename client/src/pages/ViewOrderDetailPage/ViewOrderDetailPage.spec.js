import React from 'react';
import { shallow } from 'enzyme';
import { ViewOrderDetail } from '.';

describe('ViewOrderDetail Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ViewOrderDetail />
    );
  });

  it('should render ViewOrderDetail', () => {
    expect(wrapper).toBeDefined();
  });
});
