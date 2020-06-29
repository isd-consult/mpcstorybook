import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsExit from './QuestionsExit'

storiesOf('Atoms/Questions', module).add('QuestionsExit', () => (
  <div style={{ backgroundColor: '#7BBED9', padding: 15 }}>
    <QuestionsExit to="/" className={text('Class', '')} />
  </div>
))
