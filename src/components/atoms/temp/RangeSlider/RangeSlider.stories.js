import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import RangeSlider from './RangeSlider'

storiesOf('Atoms/Temp', module)
  .add('RangeSlider', () => (
    <div style={{ backgroundColor: '#7BBED9', padding: 50 }}>
      <RangeSlider
        className={text('Class', '')}
        isVertical={boolean('Vertical', false)}
        category={select('category', [null, 'secondary', 'tertiary'])}
        items={object('Items', ['One', 'Two', 'Three', 'Four', 'Five'])}
        value={object('value', ['One', 'Four'])}
        onChange={action('Change')}
      />
    </div>
  ))
