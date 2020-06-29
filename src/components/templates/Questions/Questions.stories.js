import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Questions from './Questions'

storiesOf('Templates', module)
  .add('Questions', () => (
    <Questions
      className={text('Class', '')}
    />
  ))
