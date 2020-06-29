import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, boolean, select } from '@storybook/addon-knobs'

import Price from './Price'

storiesOf('Molecules/Texts', module)
  .add('Price', () => (
    <Price
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      price={number('Price', 500)}
      discount={number('Discount', 300)}
      credit={number('Credit', 50)}
      isCenter={boolean('Is Center', false)}
      isVertical={boolean('Is Vertical', false)}
    />
  ))
