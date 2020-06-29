import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import OrderCancelSubmit from './OrderCancelSubmit'

storiesOf('Templates/Orders', module)
  .add('OrderCancelSubmit', () => (
    <OrderCancelSubmit
      className={text('Class', '')}
    />
  ))
