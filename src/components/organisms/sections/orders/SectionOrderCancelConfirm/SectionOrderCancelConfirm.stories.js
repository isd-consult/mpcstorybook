import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionOrderCancelConfirm from './SectionOrderCancelConfirm'

storiesOf('Organisms/Sections/Orders', module)
  .add('SectionOrderCancelConfirm', () => (
    <SectionOrderCancelConfirm
      className={text('Class', '')}
    />
  ))
