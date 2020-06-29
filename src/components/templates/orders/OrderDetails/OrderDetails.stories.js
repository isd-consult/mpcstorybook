import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import OrderDetails from './OrderDetails'

storiesOf('Templates/Accounts', module)
  .add('OrderDetails', () => (
    <OrderDetails
      className={text('Class', '')}
    />
  ))
