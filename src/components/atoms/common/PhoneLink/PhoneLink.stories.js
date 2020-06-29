import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import PhoneLink from './PhoneLink'

storiesOf('Atoms/Common', module)
  .add('PhoneLink', () => (
    <PhoneLink
      className={text('Class', '')}
      to={text('To', '5551234567')}
    >
      Call to +5551234567
    </PhoneLink>
  ))
