import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'

import QuestionsPaginationArrow from './QuestionsPaginationArrow'

storiesOf('Atoms/Questions', module).add('QuestionsPaginationArrow', () => (
  <QuestionsPaginationArrow
    to="/"
    theme={number('Theme', 1)}
    isPrevious={boolean('Previous', false)}
    className={text('Class', '')}
  />
))
