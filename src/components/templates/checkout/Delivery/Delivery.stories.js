import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import Delivery from './Delivery'

storiesOf('Templates/checkout', module)
  .add('Delivery', () => (
    <Delivery
      className={text('Class', '')}
      stepItems={object('Step Items', stepItems)}
      subTotal={text('Sub Total', '0')}
      items={object('Items', items)}
      addressInfos={object('Address Infos', addressInfos)}
      dtd={object('Delivery Time', dtd)}
    />
  ))
  const stepItems = [
    {
      name: 'Delivery'
    },
    {
      name: 'Payment'
    },
    {
      name: 'Confirmation'
    },
  ]
  const items = [
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
  ]
  const addressInfos =  [
    {
      address_nickname: 'john@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash: ''
    },
    {
      address_nickname: 'james@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash: ''
    },
    {
      address_nickname: 'jane@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash: ''
    }
  ]

  const dtd = {
    "occasion": {
      "name": "Xmas",
      "description": "Xmas is around the corner, get gifting! "+
        "Products marked as Xmas Delivery will be delivered "+
        "by 24 December 2019."
    },
    "date_from": "2019-11-29",
    "date_to": "2019-12-03",
    "working_days_from": 4,
    "working_days_to": 6
  }
