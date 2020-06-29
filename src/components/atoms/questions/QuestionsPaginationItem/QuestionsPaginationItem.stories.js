import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsPaginationItem from './QuestionsPaginationItem'

storiesOf('Atoms/Questions', module).add('QuestionsPaginationItem', () => (
  <QuestionsPaginationItem isR isCurrent to="/" className={text('Class', '')} />
))
