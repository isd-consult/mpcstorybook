import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import ForgotPassword from './ForgotPassword'

storiesOf('Templates/Auth', module)
  .add('ForgotPassword', () => (
    <ForgotPassword
      className={text('Class', '')}
    />
  ))
