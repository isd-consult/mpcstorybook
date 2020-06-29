import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Loading from './Loading'

storiesOf('Molecules/Overlays', module)
  .add('Loading', () => (
    <Loading
      className={text('Class', '')}
    />
  ))
