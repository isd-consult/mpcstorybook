import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsLayout from './QuestionsLayout'

storiesOf('Layouts', module)
  .add('QuestionsLayout', () => (
    <QuestionsLayout
      className={text('Class', '')}
    />
  ))
