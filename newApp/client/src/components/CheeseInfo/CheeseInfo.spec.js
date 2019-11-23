import React from 'react';
import { shallow } from 'enzyme';
import { CheeseInfo } from '.';

describe('CheeseInfo Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheeseInfo />
    );
  });

  it('should render CheeseInfo', () => {
    expect(wrapper).toBeDefined();
  });
});
