import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Orders from './Orders'

storiesOf('Templates/Accounts', module)
  .add('Orders', () => (
    <Orders
      className={text('Class', '')}
    />
  ))