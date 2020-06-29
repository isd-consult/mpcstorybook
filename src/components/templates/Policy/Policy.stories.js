import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Policy from './Policy'

storiesOf('Templates', module)
  .add('Policy', () => (
    <Policy
      className={text('Class', '')}
    />
  ))
