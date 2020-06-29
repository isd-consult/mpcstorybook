import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionCategory from './SectionCategory'

storiesOf('Organisms/Sections/Dashboard', module).add('SectionCategory', () => (
  <SectionCategory
    theme={select('Theme', [null, 'men', 'women'])}
    title="Shop by Category"
    titleCategory={select('Title category', [
      null,
      'secondary',
      'tertiary',
      'quinary',
    ])}
    bgColor={select('Background color', [null, 'wildsand'])}
    link={object('Link', link)}
    itemsType={select('Items type', [null, 'rounded', 'small'])}
    topItems={object('Top items', topItems)}
    items={object('Items', items)}
    className={text('Class', '')}
  />
))

const link = {
  href: '/',
  text: 'View all products',
}

const topItems = [
  {
    product_type_name: 'Shoes',
    name: 'Shoes',
    href: '/',
    image: { src: 'https://placeimg.com/155/135/arch', title: 'Shoes' },
  },
  {
    product_type_name: 'Shoes',
    name: 'Clothes',
    href: '/',
    image: { src: 'https://placeimg.com/155/136/arch', title: 'Clothes' },
  },
]

const items = [
  {
    product_type_name: 'Shoes',
    name: 'Jeans',
    href: '/',
    image: { src: 'https://placeimg.com/155/134/arch', title: 'Jeans' },
  },
  {
    product_type_name: 'Outwear',
    name: 'Dresses',
    href: '/',
    image: { src: 'https://placeimg.com/156/135/arch', title: 'Dresses' },
  },
  {
    product_type_name: 'Swimwear',
    name: 'Activewear',
    href: '/',
    image: { src: 'https://placeimg.com/154/134/arch', title: 'Activewear' },
  },
  {
    product_type_name: 'Body & Face',
    name: 'Jackets',
    href: '/',
    image: { src: 'https://placeimg.com/155/137/arch', title: 'Jackets' },
  },
]
