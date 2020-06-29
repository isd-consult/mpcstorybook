import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import SectionProductSlider from './SectionProductSlider'

storiesOf('Organisms/Sections/ProductDetail', module)
  .add('SectionProductSlider', () => (
    <SectionProductSlider
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      items={object('Items', items)}
    />
  ))

const items = [
  {
    image: 'https://placeimg.com/155/136/arch',
    title: 'ARCH',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/shoe',
    title: 'SHOE',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/sandal',
    title: 'SANDAL',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/shirt',
    title: 'SHIRT',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/gloves',
    title: 'Gloves',
    link: '/',
  }
]
