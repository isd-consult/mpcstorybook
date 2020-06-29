import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object, number } from '@storybook/addon-knobs'

import DeliveryCheckout from './DeliveryCheckout'

storiesOf('Templates/Checkout', module)
  .add('DeliveryCheckout', () => (
    <DeliveryCheckout
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      stepItems={object('Step Items', stepItems)}
      subTotal={text('Sub Total', '0')}
      creditsAvailable={number('creditsAvailable', 100)}
      creditsInUse={number('creditsInUse', 80)}
      items={object('Items', items)}
      title={text('Title', 'Select a payment method:')}
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
