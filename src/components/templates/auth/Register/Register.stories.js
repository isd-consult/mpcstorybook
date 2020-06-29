import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Register from './Register'

storiesOf('Templates/auth', module)
  .add('Register', () => (
    <Register
      className={text('Class', '')}
    />
  ))
