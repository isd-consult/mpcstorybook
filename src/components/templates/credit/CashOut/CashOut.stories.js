import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import CashOut from './CashOut'

storiesOf('Templates/Credit', module)
  .add('CashOut', () => (
    <CashOut
      className={text('Class', '')}
    />
  ))
