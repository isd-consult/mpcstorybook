import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, number } from '@storybook/addon-knobs'

import ProgressBar from './ProgressBar'

storiesOf('Molecules/Panels', module)
  .add('ProgressBar', () => (
    <ProgressBar
      className={text('Class', '')}
      stepItems={object('Step Items', stepItems)}
      current={number('Index', 1)}
    />
  ))
  const stepItems = [
    {
      name: 'Delivery'
    },
    {
      name: 'Payment'
    },
    {
      name: 'Confirmation'
    },
  ]
