import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionOrderItems from './SectionOrderItems'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionOrderItems', () => (
    <SectionOrderItems
      className={text('Class', '')}
    />
  ))
