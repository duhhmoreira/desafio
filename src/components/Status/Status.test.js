import React from 'react';
import { render } from '@testing-library/react';
import CardInfo from './CardInfo';
import Status from './Status';


const sale = {
    "status": "approved",
}

describe('Status', () => {
  it('Should be able to checkStatus', () => {
    const { debug } = render(
        <Status status={sale}/>
    );
    debug();
  });
});