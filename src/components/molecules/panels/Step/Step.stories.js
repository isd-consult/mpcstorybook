import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Step from './Step'

storiesOf('Molecules/Panels', module)
  .add('Step', () => (
    <Step
      className={text('Class', '')}
    />
  ))
