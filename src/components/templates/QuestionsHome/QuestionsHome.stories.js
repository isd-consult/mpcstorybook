import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsHome from './QuestionsHome'

storiesOf('Templates', module).add('QuestionsHome', () => (
  <QuestionsHome onSubmit={action('Submit')} className={text('Class', '')} />
))
