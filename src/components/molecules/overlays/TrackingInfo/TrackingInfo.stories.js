import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import TrackingInfo from './TrackingInfo'

storiesOf('Molecules/Overlays', module)
  .add('TrackingInfo', () => (
    <TrackingInfo
      className={text('Class', '')}
    />
  ))