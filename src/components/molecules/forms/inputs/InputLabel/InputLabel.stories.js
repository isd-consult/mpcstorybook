import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import InputLabel from './InputLabel'

storiesOf('Molecules/Forms/Inputs', module)
  .add('InputLabel', () => (
    <InputLabel
      className={text('Class', '')}
      type={text('Type', 'email')}
      label={text('Label', 'Address nickname')}
      name={text('Name', 'addressNickname')}
      placeholder={text('Placeholder', 'example@gmail.com')}
      value={text('Value', 'Johndoe@gmail.com')}
      onChange={action('Text Change')}
      validationError={text('validationError', 'Please input valid email')}
    />
  ))
