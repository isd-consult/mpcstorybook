import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import Banner from './Banner'

storiesOf('Molecules/Banners', module)
.add('OldBanner', () => (
  <Banner
    theme={select('Theme', [null, 'men', 'women'])}
    className={text('Class', '')}
    items={object('Items', bannerItems)}
  />
))

const bannerItems = [
  {
      "subheading": "Shop bestsellers on sale in your size",
      "active": 1.0,
      "buttons": [
          {
              "colour": "#a5a5a5",
              "url": "/shop/shoes",
              "text": "Shop Shoes"
          },
          {
              "colour": "blue_hexcode",
              "url": "/shop/dresses",
              "text": "Shop Dresses"
          }
      ],
      "end_date": null,
      "image": "https://source.unsplash.com/random/?beauty,noon",
      "start_date": null,
      "banner_id": 3.0,
      "heading": "Hot sale!",
      "url": null,
      "position": 2.0,
      "gender": [
          "mens",
          "womens"
      ],
      "title": "SPRING COLLECTION"
  },
  {
      "subheading": "Living & gifts on sale",
      "active": 1.0,
      "buttons": {
          "1": {
              "colour": "#000000",
              "url": null,
              "text": "Shop now"
          }
      },
      "end_date": "2019-08-30 17:00:00",
      "image": "https://source.unsplash.com/random/?river,night",
      "start_date": "2019-08-22 14:00:00",
      "banner_id": 2.0,
      "heading": "Make your house a home",
      "url": null,
      "position": 1,
      "gender": [],
      "title": "Living example2"
  },
  {
      "subheading": "Subheading",
      "active": 1.0,
      "buttons": {
          "1": {
              "colour": "#aaabbb",
              "url": "/",
              "text": "First Banner Button 1"
          }
      },
      "end_date": "2019-07-31 00:00:00",
      "image": "https://source.unsplash.com/random/?girl,flower",
      "start_date": "2019-07-26 00:00:00",
      "banner_id": 1.0,
      "heading": "Heading",
      "url": "https://portal.runwaysale.local/admin/mpc/MPCBanner/add",
      "position": 2,
      "gender": [
          "men",
          "woman"
      ],
      "title": "Banner Tedsting 123"
  }
]