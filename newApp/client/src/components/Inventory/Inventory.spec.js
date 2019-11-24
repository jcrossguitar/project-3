import React from 'react';
import { shallow } from 'enzyme';
import { Inventory } from '.';

describe('Inventory Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Inventory />
    );
  });

  it('should render Inventory', () => {
    expect(wrapper).toBeDefined();
  });
});
