import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import RequestReturnOrder from './RequestReturnOrder'

storiesOf('/Templates/Returns', module)
  .add('RequestReturnOrder', () => (
    <RequestReturnOrder
      className={text('Class', '')}
      orderobjs={object('OrderObjs', orderobjs)}
    />
  ))

const orderobjs =  [
  {
    orderId: '19080600589685',
    orderDate: '08/26/2019',
    description: 'items can be returned during next 9 days',
    totalPrice: 'R618.60',
    status: 'Delievered',
    products: 
    [
      {
        productId: '111',
        name: 'Mens Navy Winter',
        imageUrl: 'https://cdn-static.runwaysale.co.za' 
            + '/media/catalog/product/h/u/huda2navy.jpg',
        brand: 'Warmer Scarf',
        price: 'R169.00',
        qty: '1'
      },
      { 
        productId: '222',
        name: 'Ladies Navy',
        imageUrl: 'https://cdn-static.runwaysale.co.za' 
            + '/media/catalog/product/h/u/huda2navy.jpg',
        brand: 'Neck Blouse',
        price: 'R99.00',
        qty: '2'
      }
    ]
  }
  ,
  {
    orderId: '19080600589685',
    orderDate: '08/23/2019',
    description: 'items can be returned during next 6 days',
    totalPrice: 'R389.60',
    status: 'Awaiting Courier Collection',
    products: 
    [
      {
        productId: '111',
        name: 'Mens Navy Winter',
        imageUrl: 'https://cdn-static.runwaysale.co.za' 
            + '/media/catalog/product/h/u/huda2navy.jpg',
        brand: 'Warmer Scarf',
        price: 'R169.00',
        qty: '1'
      },
      { 
        productId: '222',
        name: 'Ladies Navy',
        imageUrl: 'https://cdn-static.runwaysale.co.za' 
            + '/media/catalog/product/h/u/huda2navy.jpg',
        brand: 'Neck Blouse',
        price: 'R99.00',
        qty: '2'
      }
    ]
  }
]