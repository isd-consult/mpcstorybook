import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Preferences from './Preferences'

storiesOf('Templates/Accounts', module)
  .add('Preferences', () => (
    <Preferences
      className={text('Class', '')}
    />
  ))
