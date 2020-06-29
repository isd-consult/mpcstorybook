import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import MultiSelect from './MultiSelect'

storiesOf('Molecules/Forms/MultiSelects', module)
  .add('MultiSelect', () => (
    <MultiSelect
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      onChange={action('Change')}
      options={object('options', options)}
    />
  ))

const options = [
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL'
]