import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import WishList from './WishList'

storiesOf('Templates', module)
  .add('WishList', () => (
    <WishList
      theme={select('Theme', [null, 'men', 'women'])}
      wishList={object('WishList', wishList)}
      totalCount={text('TotalCount', 3)}
      onMoreClick={action('More Click')}
      removeProductFromWish={action('Remove Product From Wish')}
      menuInfo={object('Menu Info', menuInfo)}
      addProductToCart={action('Add Product To Cart')}
    />
  ))
  const wishList = [
  {
    "id": "135309",
    "sku": "HAP_ATFLG279000Q2A_BLACKANDWHITE",
    "event_code": null,
    "title": "Mens Black & White Athletic Flag Cotton Socks",
    "subtitle": "Dress socks\nCotton knit\nBlack and White",
    "price": 111,
    "discount": 38,
    "original_price": 111.0,
    "current_price": 68.82,
    "badge": null,
    "product_type": "Underwear & Sleepwear",
    "product_sub_type": "Socks",
    "gender": "MENS",
    "brand": "Happy Socks",
    "color": "ORANGE",
    "sizes": [
      {
        "size": "One Size",
        "qty": 0,
        "simple_sku": "HAP_ATFLG279000Q2A_BLACKANDWHITE-ONESIZE",
        "simple_id": "458802"
      },
      {
        "size": "41-46",
        "qty": 3,
        "simple_sku": "HAP_ATFLG279000Q2A_BLACKANDWHITE-4146",
        "simple_id": "577124"
      }
    ],
    "image": {
      "src": "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
      +"Images/HAP_ATFLG279000Q2A_BLACKANDWHITE/"
      +"HAP_ATFLG279000Q2A_BLACKANDWHITE%7C0.jpeg",
      "title": "Underwear & Sleepwear"
    }
  },
  {
    "id": "139254",
    "sku": "STY_B62Q9DZ_BURGUNDY",
    "event_code": null,
    "title": "Mens Burgundy Coated Straight Leg Jeans",
    "subtitle": "Straight-fit\nRegular fit\nBurgundy\nDenim\nMedium rise"+
    "\nRegular length\nJeans",
    "price": 79,
    "discount": 68,
    "original_price": 79.0,
    "current_price": 25.28,
    "badge": null,
    "product_type": "Bottoms",
    "product_sub_type": "Denim",
    "gender": "MENS",
    "brand": "Style Republic",
    "color": "BLUE",
    "sizes": [
    {
      "size": "32",
      "qty": 30,
      "simple_sku": "STY_B62Q9DZ_BURGUNDY-32",
      "simple_id": "469506"
    },
    {
      "size": "34",
      "qty": 22,
      "simple_sku": "STY_B62Q9DZ_BURGUNDY-34",
      "simple_id": "469507"
    },
    {
      "size": "36",
      "qty": 30,
      "simple_sku": "STY_B62Q9DZ_BURGUNDY-36",
      "simple_id": "469508"
    }
    ],
    "image": {
        "src": "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Images/STY_B62Q9DZ_BURGUNDY/STY_B62Q9DZ_BURGUNDY%7C0.jpeg",
        "title": "Bottoms"
    }
  },
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
      "src": "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
      +"/Images/HAP_OP01909Q2A_BLACKANDWHITE/"
      +"HAP_OP01909Q2A_BLACKANDWHITE%7C1.jpeg?v=1573644250",
      "title": "Underwear & Sleepwear"
    }
  }
  ]
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
