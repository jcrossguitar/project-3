import React from 'react';
import { shallow } from 'enzyme';
import { Assembly } from '.';

describe('Assembly Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Assembly />
    );
  });

  it('should render Assembly', () => {
    expect(wrapper).toBeDefined();
  });
});
