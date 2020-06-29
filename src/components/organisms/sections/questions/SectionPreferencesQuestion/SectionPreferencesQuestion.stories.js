import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionPreferencesQuestion from './SectionPreferencesQuestion'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionPreferencesQuestion', () => (
    <SectionPreferencesQuestion
      className={text('Class', '')}
    />
  ))
