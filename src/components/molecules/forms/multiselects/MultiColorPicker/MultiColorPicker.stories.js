import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import MultiColorPicker from './MultiColorPicker'

storiesOf('Molecules/Forms/Multiselects', module)
  .add('MultiColorPicker', () => (
    <MultiColorPicker
      className={text('Class', '')}
      options={object('Options', options)}
      onChange={action('onChange')}
    />
  ))

const options = [
  'Black',
  'Blue',
  'Purple',
  'Brown',
  'White',
  'Red',
  'Orange',
  'Pink',
  'Grey',
  'Yellow',
  'Green',
  'MultiColour'
]