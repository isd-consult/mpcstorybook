import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { boolean } from 'yup'
import Number from './Number'

storiesOf('Molecules/Forms', module)
  .add('Number', () => (
    <Number
      className={text('Class', '')}
      disabled={boolean('Disabled', false)}
      small={boolean('Small', false)}
      value={number('value', 0)}
      maxValue={number('maxValue', 10)}
      onChange={action('onChange')}
    />
  ))
