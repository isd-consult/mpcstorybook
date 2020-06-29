import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import ValidationError from './ValidationError'

storiesOf('Atoms/Common', module)
  .add('ValidationError', () => (
    <ValidationError
      className={text('Class', '')}
      error={object('Error', error)}
    />
  ))

  const error = {
    FirstName: "This is a required field",
    Email: "This is not valid email",
  }