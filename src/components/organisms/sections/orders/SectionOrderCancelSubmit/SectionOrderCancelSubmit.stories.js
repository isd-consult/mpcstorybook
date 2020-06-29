import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionOrderCancelSubmit from './SectionOrderCancelSubmit'

storiesOf('Organisms/Sections/Orders', module)
  .add('SectionOrderCancelSubmit', () => (
    <SectionOrderCancelSubmit
      className={text('Class', '')}
    />
  ))
