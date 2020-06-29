import React from 'react'
import { storiesOf } from '@storybook/react'
import { text,select,object } from '@storybook/addon-knobs'

import OrderConfirmation from './OrderConfirmation'

storiesOf('Templates/Checkout', module)
  .add('OrderConfirmation', () => (
    <OrderConfirmation
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      stepItems={object('Step Items', stepItems)}
      subTotal={text('Sub Total', '0')}
      items={object('Items', items)}
      currentSubTotal={text('Current Sub Total', '0')}
      dtd={text('Delivery Date', '29 Nov - 2 Dec 2019')}
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