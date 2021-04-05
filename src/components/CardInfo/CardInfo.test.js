import React from 'react';
import { render } from '@testing-library/react';
import CardInfo from './CardInfo';


const sale = {
    "id": 1,
    "date": "2020-11-19",
    "totalValue": "955.47",
    "totalValueCashback": "456.71",
    "totalPercentCashback": "47.8",
    "status": "approved",
    "sellerId": 1
}

describe('Card Info', () => {
  it('Should be able to check Card Info', () => {
    const { debug } = render(
        <CardInfo sale={sale}/>
    );
    debug();
  });
});