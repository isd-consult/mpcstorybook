import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionWishList from './SectionWishList'

storiesOf('Organisms/Sections/WishList', module)
  .add('SectionWishList', () => (
    <SectionWishList
      theme={select('Theme', [null, 'men', 'women'])}
      wishList={object('WishList', wishList)}
      totalCount={text('TotalCount', 2)}
      onMoreClick={action('More Click')}
      addProductToCart={action('Add To Cart')}
      removeProductFromWish={action('Remove From Wish')}
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
        "src": "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Images/HAP_ATFLG279000Q2A_BLACKANDWHITE/"
        +"HAP_ATFLG279000Q2A_BLACKANDWHITE%7C0.jpeg",
        "title": "Underwear & Sleepwear"
    }
  },
  {
    "id": "139254",
    "sku": "STY_B62Q9DZ_BURGUNDY",
    "event_code": null,
    "title": "Mens Burgundy Coated Straight Leg Jeans",
    "subtitle": "Straight-fit\nRegular fit\nBurgundy\nDenim\n"
    +"Medium rise\nRegular length\nJeans",
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
  }
]

