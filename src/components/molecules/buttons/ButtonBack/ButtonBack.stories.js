import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import ButtonBack from './ButtonBack'

storiesOf('Molecules/Buttons', module)
  .add('ButtonBack', () => (
    <ButtonBack
      className={text('Class', '')}
      onBack={action('onBack')}
    />
  ))