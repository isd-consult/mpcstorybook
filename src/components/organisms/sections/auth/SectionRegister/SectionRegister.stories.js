import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionRegister from './SectionRegister'

storiesOf('Organisms/Sections/Auth', module)
  .add('SectionRegister', () => (
    <SectionRegister
      className={text('Class', '')}
    />
  ))
