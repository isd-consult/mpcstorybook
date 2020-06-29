import React from 'react'
import { storiesOf } from '@storybook/react'
import { text,select,object } from '@storybook/addon-knobs'

import SectionOrderSummary from './SectionOrderSummary'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionOrderSummary', () => (
    <SectionOrderSummary
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      items={object('Items', items)}
      saveSubTotal={text('Save Total', '0')}
      currentSubTotal={text('Current Total', '0')}
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
