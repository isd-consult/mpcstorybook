import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Closet from './Closet'

storiesOf('Templates/Accounts', module)
  .add('Closet', () => (
    <Closet
      className={text('Class', '')}
    />
  ))
