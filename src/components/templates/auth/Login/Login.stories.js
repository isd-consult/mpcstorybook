import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Login from './Login'

storiesOf('Templates/auth', module)
  .add('Login', () => (
    <Login
      className={text('Class', '')}
    />
  ))
