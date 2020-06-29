import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionCategoryByLastChance from './SectionCategoryByLastChance'

storiesOf('Organisms/Sections/Dashboard', module)
  .add('SectionCategoryByLastChance', () => (
    <SectionCategoryByLastChance
      theme={select('Theme', [null, 'men', 'women'])}
      title={text('Title', 'Last Chance!')}
      subtitle={text('SubTitle', 'Bestsellers personalized for you!')}
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
    name: 'Shoes',
    href: '/',
    image: { src: 'https://placeimg.com/155/135/arch', title: 'Shoes' },
  },
  {
    name: 'Clothes',
    href: '/',
    image: { src: 'https://placeimg.com/155/136/arch', title: 'Clothes' },
  },
]

const items = [
  {
    name: 'Jeans',
    href: '/',
    image: { src: 'https://placeimg.com/155/134/arch', title: 'Jeans' },
  },
  {
    name: 'Dresses',
    href: '/',
    image: { src: 'https://placeimg.com/156/135/arch', title: 'Dresses' },
  },
  {
    name: 'Activewear',
    href: '/',
    image: { src: 'https://placeimg.com/154/134/arch', title: 'Activewear' },
  },
  {
    name: 'Jackets',
    href: '/',
    image: { src: 'https://placeimg.com/155/137/arch', title: 'Jackets' },
  },
]
