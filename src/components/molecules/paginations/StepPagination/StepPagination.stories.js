import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import StepPagination from './StepPagination'

storiesOf('Molecules/Paginations', module)
  .add('StepPagination', () => (
    <StepPagination
      className={text('Class', '')}
      total={number('total', 6)}
      cur={number('cur', 3)}
    />
  ))
