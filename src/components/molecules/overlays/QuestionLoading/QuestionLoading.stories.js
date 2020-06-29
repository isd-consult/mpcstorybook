import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionLoading from './QuestionLoading'

storiesOf('Molecules/Overlays', module)
  .add('QuestionLoading', () => (
    <QuestionLoading
      className={text('Class', '')}
    />
  ))
