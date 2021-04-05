import React from 'react';
import { render } from '@testing-library/react';
import FormNewSale from './FormNewSale';


describe('FormNewPAge', () => {
  it('Should be FormNewSale', () => {
    const { debug } = render(
        <FormNewSale/>
    );
    debug();
  });
});