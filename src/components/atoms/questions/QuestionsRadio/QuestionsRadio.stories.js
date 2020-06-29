import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsRadio from './QuestionsRadio'

storiesOf('Atoms/Questions', module).add('QuestionsRadio', () => (
  <QuestionsRadio
    onChange={action('Change')}
    name={text('Name', 'questions-checkbox')}
    checked={boolean('Checked', false)}
    value={text('Value', '')}
  >
    Radio
  </QuestionsRadio>
))
