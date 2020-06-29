import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionOrderCancel from './SectionOrderCancel'

storiesOf('Organisms/Sections/Orders', module)
  .add('SectionOrderCancel', () => (
    <SectionOrderCancel
      className={text('Class', '')}
    />
  ))
