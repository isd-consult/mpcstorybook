import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Accountinfo from './Accountinfo'

storiesOf('Templates/Accounts/Info', module)
  .add('Accountinfo', () => (
    <Accountinfo
      className={text('Class', '')}
      firstName={text('FirstName', 'first')}
      lastName={text('LastName', 'last')}
      email={text('Email', 'test@mail.com')}
      gender={select('Gender', ['male', 'female'])}
      saveInfo={action('saveInfo')}
    />
  ))
