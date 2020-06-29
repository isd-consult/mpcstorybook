import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import DeliveryEditAddress from './DeliveryEditAddress'

storiesOf('Templates/Checkout', module)
  .add('DeliveryEditAddress', () => (
    <DeliveryEditAddress
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      stepItems={object('Step Items', stepItems)}
      subTotal={text('Sub Total', '0')}
      items={object('Items', items)}
      title={text('Title', 'Edit address:')}
      saveAddress={action('Save Address')}
      addressInfo={object('Address Info',addressInfo)}
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
  const addressInfo =  
  {
    addressNickname: 'john@gmail.com', 
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
    addressType: 'business'
  }