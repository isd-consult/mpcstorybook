import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionSimilarStyles from './SectionSimilarStyles'

storiesOf('Organisms/Sections/ProductDetail', module)
  .add('SectionSimilarStyles', () => (
    <SectionSimilarStyles
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
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
      title:'Girl shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
      discount:200
    }
  ]