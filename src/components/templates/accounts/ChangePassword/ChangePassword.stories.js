import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import ChangePassword from './ChangePassword'

storiesOf('Templates/Accounts', module)
  .add('ChangePassword', () => (
    <ChangePassword
      className={text('Class', '')}
    />
  ))
