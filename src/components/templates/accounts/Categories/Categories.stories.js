import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Categories from './Categories'

storiesOf('Templates/Accounts', module)
  .add('Categories', () => (
    <Categories
      className={text('Class', '')}
    />
  ))
