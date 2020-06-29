import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import PasswordMeter from './PasswordMeter'

storiesOf('Atoms/Common', module)
  .add('PasswordMeter', () => (
    <PasswordMeter
      className={text('Class', '')}
      password={text('Password', '')}
    />
  ))
