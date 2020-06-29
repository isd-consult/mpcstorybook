import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import ScoresInfo from './ScoresInfo'

storiesOf('Molecules/Overlays', module)
  .add('ScoresInfo', () => (
    <ScoresInfo
      className={text('Class', '')}
      data={object('data', data)}
    />
  ))

  const data = {
    qs: 331.33333333333326,
    rs: 142.8966303966304,
    ts: 460.31666666666666,
    total: 1401.5466303966302,
    percentage_score: 15.24,
  }