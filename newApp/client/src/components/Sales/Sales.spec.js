import React from 'react';
import { shallow } from 'enzyme';
import { Sales } from '.';

describe('Sales Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Sales />
    );
  });

  it('should render Sales', () => {
    expect(wrapper).toBeDefined();
  });
});
