import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import CartList from './CartList'

storiesOf('Templates', module)
  .add('CartList', () => (
    <CartList
      theme={select('Theme', [null, 'men', 'women'])}
      menuInfo={object('MenuInfo', menuInfo)}
      cartList={object('CartList', cartList)}
      totalCount={text('TotalCount', '4')}
      originalSubTotal={text('Original SubTotal', 'R 1,228')}
      currentSubTotal={text('Current SubTotal', 'R 1,190')}
      title={text('Title', 'Your promotions')}
      onCloseItem={action('Close Item')}
      setProductQty={action('Set Product Qty')}
      dtd={object('Delivery Time', dtd)}
    />
  ))
  const cartList = [
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      discount:200,
      size_name: 8,
      sku: 'Queue_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
              "Products marked as Xmas Delivery will be delivered "+
              "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    },
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      discount:200,
      size_name: 8,
      sku: 'Pewter_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
              "Products marked as Xmas Delivery will be delivered "+
              "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    },
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      discount:200,
      size_name: 8,
      sku: 'Slip_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
              "Products marked as Xmas Delivery will be delivered "+
              "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    }
  ]
  
  const dtd = {
    "occasion": {
      "name": "Xmas",
      "description": "Xmas is around the corner, get gifting! "+
        "Products marked as Xmas Delivery will be delivered "+
        "by 24 December 2019."
    },
    "date_from": "2019-12-26",
    "date_to": "2019-12-30",
    "working_days_from": 23,
    "working_days_to": 25
  }
  const menuInfo = {
    categoryItems: [
      {
        link: '/',
        image: 'https://placeimg.com/155/135/women',
        name: 'Shop Women'
      },
      {
        link: '/',
        image: 'https://placeimg.com/155/135/men',
        name: 'Shop Men'
      },
      {
        link: '/',
        image: 'https://placeimg.com/155/135/kid',
        name: 'Shop Kids'
      }
    ],
    linkItems: [
      {
        link: '/my_account',
        name: 'My Account'
      },
      {
        link: '/track_order',
        name: 'Track Order'
      },
      {
        link: '/refine_style',
        name: 'Refine your Style'
      },
      {
        link: '/invite_friends',
        name: 'Invite Friends'
      }
    ]
  }
