import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import StepText from './StepText'

storiesOf('Molecules/Texts', module)
  .add('StepText', () => (
    <StepText
      className={text('Class', '')}
      total={number('Total Steps', 5)}
      current={number('Current Step', 3)}
    />
  ))
