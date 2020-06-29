import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CardItem from './CardItem'

storiesOf('Molecules/Cards', module).add('CardItem', () => (
  <div style={{ background: '#8B5D5D', padding: '15px' }}>
    <CardItem
      onFavoriteChange={action('Favorite change')}
      theme={select('Theme', [null, 'men', 'women'])}
      image={object('Image', {
        src: 'https://placeimg.com/155/135/arch',
        title: 'Shoes',
      })}
      id={text('ID', '54321')}
      type={select('Type', [null, 'rounded', 'small'])}
      price={number('Price', 24.3)}
      isFavoriteShow={boolean('Favorite show', true)}
      isFavorite={boolean('Favorite', false)}
      name={text('Name', 'Shop Shoes')}
      badge={text('Badge name', 'New')}
      isUnseen={boolean('IsUnseen', true)}
      href={text('Href', '/')}
      className={text('Class', '')}
    />
  </div>
))
