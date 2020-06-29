import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import AddCard from './AddCard'

storiesOf('Templates/Accounts', module)
  .add('AddCard', () => (
    <AddCard
      className={text('Class', '')}
    />
  ))
