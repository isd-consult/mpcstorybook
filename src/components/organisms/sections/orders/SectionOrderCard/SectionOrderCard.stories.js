import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, object } from '@storybook/addon-knobs'

import SectionOrderCard from './SectionOrderCard'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionOrderCard', () => (
    <SectionOrderCard
      theme={select('Theme', [null, 'men', 'women'])}
      item={object('item', item)}
    />
  ))

const item = {
  order_number: "19322510434339468482",
  payment_method: {
    descriptor: "regular_eft",
    label: "regular_eft"
  },
  status: {
    label: "Waiting for Payment",
    value: "waiting_for_payment"
  },
  subtotal: 115.84,
  created_at: "2019-11-18 10:43:44",
  delivery_address: {
    business_name: null,
    city: "1234",
    complex_building: null,
    phone_number: "1234",
    postal_code: null,
    province: "1234",
    recipient_name: "tttt",
    special_instructions: null,
    street_address: "1234",
    suburb: "1234",
  },
  delivery_cost: 60,
  order_items: [
    {
      brand_name: "Camille",
      dtd: {
        max: 25,
        min: 10 
      },
      event_code: "None",
      image_url: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
      +"Images/CAM_60_WHITE/CAM_60_WHITE%7C0.jpeg?ver=1",
      name: "Mens White Sleeveless Vest",
      product_current_price: 44.24,
      product_original_price: 79,
      qty: 1,
      simple_sku: "CAM_60_WHITE-S",
      size_name: "S",
      total_cost: 44.24
    },
    {
      brand_name: "Camille",
      dtd: {
        max: 25,
        min: 10 
      },
      event_code: "None",
      image_url: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
      +"Images/CAM_60_WHITE/CAM_60_WHITE%7C0.jpeg?ver=1",
      name: "Mens White Sleeveless Vest",
      product_current_price: 44.24,
      product_original_price: 79,
      qty: 1,
      simple_sku: "CAM_60_WHITE-S",
      size_name: "S",
      total_cost: 44.24
    }
  ]
}
