import { shallow } from 'enzyme';
import React from 'react';

import ProductList from './ProductList';

describe('ProductList', () => {
  it('renders without crashing', () => {
    shallow(<ProductList />);
  });
});
