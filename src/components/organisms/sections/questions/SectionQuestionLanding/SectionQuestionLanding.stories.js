import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionQuestionLanding from './SectionQuestionLanding'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionQuestionLanding', () => (
    <SectionQuestionLanding
      className={text('Class', '')}
    />
  ))
