import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Input from './Input'

storiesOf('Molecules/Forms/Inputs', module)
  .add('Input', () => (
    <Input
      className={text('Class', '')}
      placeholder={text('PlaceHolder', 'Input something')}
      type={select('Type', [null, 'text', 'password'])}
      onChange={action('onChange')}
    />
  ))
