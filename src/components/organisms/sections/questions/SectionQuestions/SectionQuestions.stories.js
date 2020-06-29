import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionQuestions from './SectionQuestions'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionQuestions', () => (
    <SectionQuestions
      className={text('Class', '')}
    />
  ))
