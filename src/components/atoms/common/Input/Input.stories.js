import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Input from './Input'

storiesOf('Atoms/Common', module).add('Input', () => (
  <Input
    className={text('Class', '')}
    placeholder={text('PlaceHolder', 'Type something here...')}
    type={select('Type', ['text', 'email', 'password', 'number'])}
    onChange={action('Change')}
  />
))
