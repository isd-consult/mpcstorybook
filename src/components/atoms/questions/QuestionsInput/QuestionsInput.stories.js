import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsInput from './QuestionsInput'

storiesOf('Atoms/Questions', module).add('QuestionsInput', () => (
  <div style={{ backgroundColor: '#7BBED9', padding: 15 }}>
    <QuestionsInput
      placeholder="Enter password"
      className={text('Class', '')}
    />
  </div>
))
