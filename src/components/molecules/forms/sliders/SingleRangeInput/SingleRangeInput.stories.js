import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SingleRangeInput from './SingleRangeInput'

storiesOf('Molecules/Forms/Sliders', module)
  .add('SingleRangeInput', () => (
    <div style={style}>
      <SingleRangeInput
        className={text('Class', '')}
        name={text('Name', 'singlerangeinput')}
        minValue={number('MinValue', 0)}
        maxValue={number('MaxValue', 10)}
        step={number('Step', 1)}
        value={object('value', 3)}
        onChange={action('onChange')}
        orient={select('orient', ["vertical", "horizantal"])}
      />
    </div>
  ))

const style = {
  backgroundColor: `#7BBED9`,
  width: `100%`,
  height: `100vh`,
  padding: `30px 50px`
}