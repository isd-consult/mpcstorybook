import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import WishItem from './WishItem'

storiesOf('Molecules/Wish', module).add('WishItem', () => (
  <WishItem
    item={object('WishItem', item)}
    addProductToCart={action('addProductToCart')}
    removeProductFromWish={action('removeProductFromWish')}
  />
))
const item = 
{
  "id": "146413",
  "sku": "HAP_OP01909Q2A_BLACKANDWHITE",
  "event_code": null,
  "title": "Black & White Optic Cotton Socks",
  "subtitle": "Dress socks\nFabrication: Cotton knit",
  "price": 89,
  "discount": 41,
  "original_price": 89.0,
  "current_price": 52.51,
  "badge": null,
  "product_type": "Underwear & Sleepwear",
  "product_sub_type": "Socks",
  "gender": "MENS",
  "brand": "Happy Socks",
  "color": "PRINT",
  "sizes": [
  {
    "size": "One Size",
    "qty": 0,
    "simple_sku": "HAP_OP01909Q2A_BLACKANDWHITE-ONESIZE",
    "simple_id": "489026"
  },
  {
    "size": "41-46",
    "qty": 40,
    "simple_sku": "HAP_OP01909Q2A_BLACKANDWHITE-4146",
    "simple_id": "577105"
  }
  ],
  "image": {
    "src": "https://rws-portal-global.s3.eu-west-1.amazonaws.com" +
    "/Images/HAP_OP01909Q2A_BLACKANDWHITE/" + 
    "HAP_OP01909Q2A_BLACKANDWHITE%7C1.jpeg?v=1573644250",
    "title": "Underwear & Sleepwear"
  }
}

