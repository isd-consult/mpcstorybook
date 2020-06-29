import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsThanks from './QuestionsThanks'

storiesOf('Molecules/Questions', module)
  .add('QuestionsThanks', () => (
    <QuestionsThanks
      className={text('Class', '')}
    />
  ))
