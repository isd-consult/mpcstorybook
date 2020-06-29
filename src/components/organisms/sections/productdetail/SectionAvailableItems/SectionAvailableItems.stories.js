import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionAvailableItems from './SectionAvailableItems'

storiesOf('Organisms/Sections/ProductDetail', module)
  .add('SectionAvailableItems', () => (
    <SectionAvailableItems
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      items={object('Available Items', items)}
      title={text('Text', 'Also available in')}
    />
  ))

  const items = [
    {
      image: {
        src: 'https://placeimg.com/154/151/happy',
        title: "Shoes"
      },
      id: '158702',
      sku: 'MAD_MDN1651_BLACKFLORAL1'
    },
    {
      image: {
        src: 'https://placeimg.com/154/151/happy',
        title: "Shoes"
      },
      id: '158703',
      sku: 'MAD_MDN1651_BLACKFLORAL2'
    },
    {
      image: {
        src: 'https://placeimg.com/154/151/happy',
        title: "Shoes"
      },
      id: '158704',
      sku: 'MAD_MDN1651_BLACKFLORAL3'
    }
  ]