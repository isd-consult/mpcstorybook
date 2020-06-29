import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionReturnHistory from './SectionReturnHistory'

storiesOf('Organisms/Sections/Returns', module)
  .add('SectionReturnHistory', () => (
    <SectionReturnHistory
      className={text('Class', '')}
    />
  ))
