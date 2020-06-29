import React from 'react'
import { storiesOf } from '@storybook/react'

import QuestionsButton from './QuestionsButton'

storiesOf('Atoms/Questions', module).add('QuestionsButton', () => (
  <div style={{ backgroundColor: '#7BBED9', padding: 15 }}>
    <QuestionsButton className="mb-10" to="/" icon="plus" isSmall>
      <b>Yes </b>
      <span>button</span>
    </QuestionsButton>
    <QuestionsButton className="mb-10" to="/" isSecondary>
      <b>Yes </b>
      <span>button</span>
    </QuestionsButton>
    <QuestionsButton className="mb-10" to="/" icon="plus" isSecondary isSmall>
      <b>No </b>
      <span>button</span>
    </QuestionsButton>
  </div>
))
