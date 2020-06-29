import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select, number, boolean } from '@storybook/addon-knobs'

import CardProduct from './CardProduct'

storiesOf('Molecules/Cards', module)
  .add('CardProduct', () => (
    <div style={{width: '150px'}}>
      <CardProduct
        className={text('Class', '')}
        theme={select('Theme', [null, 'men', 'women'])}
        href={text('Link', '/')}
        image={object('Image', {
          src: 'https://placeimg.com/155/135/people',
          title: 'Shoes',
        })}
        trackingInfo={object('trackingInfo', {is_read: true})}
        badge={text('Badge', '')}
        isUnseen={boolean('Is Unseen', true)}
        isSoldOut={boolean('Is Sold Out?', true)}
        isInCart={boolean('Is Already In Cart', true)}
        title={text('Title', 'Queue shoes')}
        subTitle={text('SubTitle', 'Pewter Slip On Style')}
        price={number('Price', 249)}
        discount={number('Discount', 200)}
      />
    </div>
  ))
