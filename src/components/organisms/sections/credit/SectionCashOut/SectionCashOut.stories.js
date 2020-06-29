import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionCashOut from './SectionCashOut'

storiesOf('Organisms/Credit', module)
  .add('SectionCashOut', () => (
    <SectionCashOut
      className={text('Class', '')}
    />
  ))
