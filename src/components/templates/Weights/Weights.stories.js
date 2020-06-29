import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Weights from './Weights'

storiesOf('Templates', module)
  .add('Scoring Weights', () => (
    <Weights
      className={text('Class', '')}
    />
  ))
