import React from 'react';
import { shallow } from 'enzyme';
import { Qc } from '.';

describe('Qc Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Qc />
    );
  });

  it('should render Qc', () => {
    expect(wrapper).toBeDefined();
  });
});
