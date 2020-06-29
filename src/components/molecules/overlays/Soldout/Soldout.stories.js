import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Soldout from './Soldout'

storiesOf('Molecules/Overlays', module)
  .add('Soldout', () => (
    <Soldout
      className={text('Class', '')}
    />
  ))
