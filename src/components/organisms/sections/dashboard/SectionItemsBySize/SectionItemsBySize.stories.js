import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionItemsBySize from './SectionItemsBySize'

storiesOf('Organisms/Sections/Dashboard', module)
.add('SectionItemsBySize', () => (
  <SectionItemsBySize
    theme={select('Theme', [null, 'men', 'women'])}
    title={text('Title', 'Shop size 6 dresses')}
    rowCount={number('Row Count', 2)}
    link={object('Link', link)}
    itemsType={select('Items type', [null, 'rounded', 'small'])}
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
