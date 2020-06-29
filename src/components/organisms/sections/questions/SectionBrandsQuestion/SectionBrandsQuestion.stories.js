import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionBrandsQuestion from './SectionBrandsQuestion'

storiesOf('Organisms/Sections/Questions', module)
  .add('SectionBrandsQuestion', () => (
    <SectionBrandsQuestion
      className={text('Class', '')}
    />
  ))
