import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionHead from './SectionHead'

storiesOf('Organisms/Sections/Dashboard', module).add('SectionHead', () => (
  <SectionHead
    theme={select('Theme', [null, 'men', 'women'])}
    onActionClick={action('On action click')}
    bannerList={object('BannerList', bannerList)}
    className={text('Class', '')}
  />
))

const bannerList = [
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
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
    "image": "https://placeimg.com/155/135/developer",
    "start_date": null,
    "banner_id": 3,
    "heading": "Hot sale!",
    "url": null,
    "position": 2,
    "gender": [
      "mens",
      "womens"
    ],
    "title": "SPRING COLLECTION"
  },
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
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
    "image": "https://placeimg.com/155/137/arch",
    "start_date": null,
    "banner_id": 2,
    "heading": "Hot sale!",
    "url": null,
    "position": 2,
    "gender": [
      "womens"
    ],
    "title": "SPRING COLLECTION"
  },
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
        "url": "/shop/shoes",
        "text": "Shop Shoes"
      },
      {
        "colour": "blue_hexcode",
        "url": "/shop/dresses",
        "text": "Shop Dresses"
      }
    ],
    "end_date": "null",
    "image": "http://lorempixel.com/300/200/people/",
    "start_date": "null",
    "banner_id": 1,
    "heading": "Hot sale!",
    "url": "null",
    "position": 1,
    "gender": [
      "mens"
    ],
    "title": "SPRING COLLECTION"
  }
]
