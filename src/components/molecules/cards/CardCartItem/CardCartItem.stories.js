/* eslint-disable max-len */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, number } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import CardCartItem from './CardCartItem'

storiesOf('Molecules/Cards', module)
  .add('CardCartItem', () => (
    <CardCartItem
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      href={text('Link', '/')}
      imageUrl={text('Image URl', 'https://rws-portal-global.s3.eu-west-1.amazonaws.com/Thumbnails/360x360/c4/JOY_6O5JZ96_BLACK|4.jpeg')}
      brandName={text('Title', 'Queue shoes')}
      name={text('SubTitle', 'Pewter Slip On Style')}
      sizeName={text('Size', 'XL')}
      originalCost={number('Price', 249)}
      discount={number('Discount', 200)}
      fbucks={number('Fbucks', 33)}
      onCloseItem={action('CloseItem')}
    />
  ))
