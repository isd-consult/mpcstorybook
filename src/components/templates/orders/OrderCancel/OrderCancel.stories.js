import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import OrderCancel from './OrderCancel'

storiesOf('Templates/Orders', module)
  .add('OrderCancel', () => (
    <OrderCancel
      className={text('Class', '')}
    />
  ))
