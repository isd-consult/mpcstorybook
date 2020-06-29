import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionAccountName from './SectionAccountName'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAccountName', () => (
    <SectionAccountName
      className={text('Class', '')}
      firstName={text('FirstName', 'first')}
      lastName={text('LastName', 'last')}
      email={text('Email', 'test@mail.com')}
      gender={select('Gender', ['male', 'female'])}
      saveInfo={action('saveInfo')}
    />
  ))
