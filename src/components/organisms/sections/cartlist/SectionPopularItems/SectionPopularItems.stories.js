import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import SectionPopularItems from './SectionPopularItems'

storiesOf('Organisms/Sections/Cartlist', module)
  .add('SectionPopularItems', () => (
    <SectionPopularItems
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      items={object('Items', items)}
    />
  ))

const items = [
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/155/135/arch',
      title: 'Shoes',
    },
    isInCart:false,
    isSoldOut:false,
    title:'Queue shoes',
    subTitle:'Pewter Slip On Style',
    price:249
  },
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/155/135/arch',
      title: 'Shoes',
    },
    isInCart:true,
    isSoldOut:true,
    title:'Girl shoes',
    subTitle:'Pewter Slip On Style',
    price:249,
    discount:200
  },
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/155/135/arch',
      title: 'Shoes',
    },
    isInCart:true,
    title:'Queue shoes',
    subTitle:'Pewter Slip On Style',
    price:249
  },
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/155/135/arch',
      title: 'Shoes',
    },
    isSoldOut:true,
    isInCart:false,
    title:'Queue shoes',
    subTitle:'Pewter Slip On Style',
    price:249,
  }
]