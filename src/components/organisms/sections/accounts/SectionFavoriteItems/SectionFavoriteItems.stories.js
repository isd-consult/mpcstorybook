import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionFavoriteItems from './SectionFavoriteItems'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionFavoriteItems', () => (
    <SectionFavoriteItems
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      title={text('Title', 'My Sizes')}
      link={object('Link', link)}
      data={object('Data', data)}
    />
  ))

  const link = {
    href: '/',
    text: 'View all products'
  }

  const data = {
    "Shoes": ["6"],
    "Tops": ["10", "M", "38"]
  }
