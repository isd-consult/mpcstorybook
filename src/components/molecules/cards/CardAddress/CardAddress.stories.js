import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import CardAddress from './CardAddress'

storiesOf('Molecules/Cards', module)
  .add('CardAddress', () => (
    <CardAddress
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      iconName={text('iconName', 'invoice')}
      title={text('title', 'Address')}
      description={text('description', 'Description')}
      href={text('href', '/')}
      isCentered={boolean('isCentered', false)}
      deleteAddress={action('deleteAddress')}
    />
  ))
