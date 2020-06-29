import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionBrandsItems from './SectionBrandsItems'

storiesOf('Organisms/Sections/Dashboard', module)
.add('SectionBrandsItems', () => (
  <SectionBrandsItems
    theme={select('Theme', [null, 'men', 'women'])}
    title={text('Title', 'Top brands for you')}
    link={object('Link', link)}
    items={object('Items', items)}
    onFavoriteChange={action('On favorite change')}
    className={text('Class', '')}
  />
))

const link = {
  href: '/',
  text: 'See all',
}

const items = [
  {
      "id": "517",
      "name": "nike",
      "brand_name": "Nike",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Nike",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "191",
      "name": "triumph",
      "brand_name": "Triumph",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Triumph",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "172",
      "name": "guess",
      "brand_name": "GUESS",
      "new": false,
      "favorite": true,
      "image": {
          "title": "GUESS",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "1352",
      "name": "style republic",
      "brand_name": "Style Republic",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Style Republic",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "534",
      "name": "polo",
      "brand_name": "Polo",
      "new": true,
      "favorite": false,
      "image": {
          "title": "Polo",
          "src": "https://placeimg.com/155/136/arch"
      },
      "new_items_count": 11
  },
  {
      "id": "552",
      "name": "soviet",
      "brand_name": "Soviet",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Soviet",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "505",
      "name": "revlon",
      "brand_name": "Revlon",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Revlon",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "707",
      "name": "daily finery",
      "brand_name": "Daily Finery",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Daily Finery",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "680",
      "name": "skone",
      "brand_name": "Skone",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Skone",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "544",
      "name": "puma",
      "brand_name": "PUMA",
      "new": false,
      "favorite": false,
      "image": {
          "title": "PUMA",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "240",
      "name": "polo belts",
      "brand_name": "Polo Belts",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Polo Belts",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "232",
      "name": "sole candy",
      "brand_name": "Sole Candy",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Sole Candy",
          "src": "https://placeimg.com/155/136/arch"
      }
  }
]