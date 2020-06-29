import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import MultiRangeInput from './MultiRangeInput'

storiesOf('Molecules/Forms/Sliders', module)
  .add('MultiRangeInput', () => (
    <div style={style}>
      <MultiRangeInput
        className={text('Class', '')}
        minValue={number('MinValue', 0)}
        maxValue={number('MaxValue', 10)}
        step={number('Step', 1)}
        value={object('value', value)}
        onChange={action('onChange')}
      />
    </div>
  ))

const value = {
  min: 3,
  max: 5
}

const style = {
  backgroundColor: `#7BBED9`,
  width: `100%`,
  height: `100vh`,
  padding: `30px 50px`
}