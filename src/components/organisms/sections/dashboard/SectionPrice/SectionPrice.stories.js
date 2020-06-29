import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionPrice from './SectionPrice'

storiesOf('Organisms/Sections/Dashboard', module)
  .add('SectionPrice', () => (
    <SectionPrice
      theme={select('Theme', [null, 'men', 'women'])}
      defaultValue={text('Default value', '400')}
      onChange={action('Change')}
      options={object('Options', options)}
      className={text('Class', '')}
    />
  ))

const options = [
  { value: '200', label: 'R200' },
  { value: '400', label: 'R400' },
  { value: '800', label: 'R800' },
  { value: '1000', label: 'R1000' }
]
