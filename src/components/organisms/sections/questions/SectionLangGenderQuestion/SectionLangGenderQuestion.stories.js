import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionLangGenderQuestion from './SectionLangGenderQuestion'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionLangGenderQuestion', () => (
    <SectionLangGenderQuestion
      className={text('Class', '')}
    />
  ))
