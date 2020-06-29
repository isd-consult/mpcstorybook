import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionThanksQuestion from './SectionThanksQuestion'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionThanksQuestion', () => (
    <SectionThanksQuestion
      className={text('Class', '')}
    />
  ))
