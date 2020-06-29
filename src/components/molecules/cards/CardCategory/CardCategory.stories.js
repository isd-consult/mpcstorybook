import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import CardCategory from './CardCategory'

storiesOf('Molecules/Cards', module)
  .add('CardCategory', () => (
    <CardCategory
      image={object('Image', {
        src: 'https://placeimg.com/155/135/arch',
        title: 'Shoes'
      })}
      theme={select('Theme', [null, 'men', 'women'])}
      type={select('Type', [null, 'small', 'rounded'], 'rounded')}
      fontSize={select('fontSize', fontSizes)}
      name={text('Name', 'Shop Shoes')}
      href={text('Href', '/')}
      className={text('Class', '')}
    />
  ))

const fontSizes = [
  'xxs',
  'xs',
  's',
  'small',
  'h1',
  'h2',
  'h3',
  'xl',
  'xxl',
  'xxxl',
  'normal',
  'l',
]
