import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import SectionDeliveryProducts from './SectionDeliveryProducts'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionDeliveryProducts', () => (
    <SectionDeliveryProducts
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      items={object('Items', items)}
    />
  ))
  const items = [
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
    {
      name: 'Jeans',
      href: '/',
      image_url: 'https://placeimg.com/155/134/arch',
    },
  ]
  