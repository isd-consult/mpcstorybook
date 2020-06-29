import React from 'react'
import { storiesOf } from '@storybook/react'

import QuestionsCheckbox from './QuestionsCheckbox'

storiesOf('Atoms/Questions', module).add('QuestionsCheckbox default', () => (
  <div style={{ backgroundColor: '#7BBED9' }}>
    <QuestionsCheckbox label="Default" />
  </div>
))

storiesOf('Atoms/Questions', module).add('QuestionsCheckbox disabled', () => (
  <div style={{ backgroundColor: '#7BBED9' }}>
    <QuestionsCheckbox isDisabled label="Disabled" />
  </div>
))
