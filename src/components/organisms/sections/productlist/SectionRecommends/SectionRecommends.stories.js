import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionRecommends from './SectionRecommends'

storiesOf('Organisms/Sections/ProductList', module)
.add('SectionRecommends', () => (
  <SectionRecommends
    theme={select('Theme', [null, 'men', 'women'])}
    searchTerm={text('Search Term', 'Swimwear')}
    itemsType={select('Items type', [null, 'rounded', 'small'])}
    items={object('Items', items)}
    className={text('Class', '')}
  />
))

const items = [
  {
    id: '1',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/136/arch',
      title: 'Shoes',
    },
  },
  {
    id: '2',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: true,
    image: {
      src: 'https://placeimg.com/155/137/arch',
      title: 'Shoes',
    },
  },
  {
    id: '3',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/138/arch',
      title: 'Shoes',
    },
  },
  {
    id: '4',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/139/arch',
      title: 'Shoes',
    },
  },
  {
    id: '5',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/140/arch',
      title: 'Shoes',
    },
  },
  {
    id: '6',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/154/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '7',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/153/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '8',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/152/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '9',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/151/135/arch',
      title: 'Shoes',
    },
  },
]
