import React from 'react';
import { shallow } from 'enzyme';
import { CheeseDetail } from '.';

describe('CheeseDetail Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheeseDetail />
    );
  });

  it('should render CheeseDetail', () => {
    expect(wrapper).toBeDefined();
  });
});
