import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Sizes from './Sizes'

storiesOf('Templates/Accounts', module)
  .add('Sizes', () => (
    <Sizes
      className={text('Class', '')}
    />
  ))
