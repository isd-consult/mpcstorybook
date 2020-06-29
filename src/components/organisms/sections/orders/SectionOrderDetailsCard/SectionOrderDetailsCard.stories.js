import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionOrderDetailsCard from './SectionOrderDetailsCard'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionOrderDetailsCard', () => (
    <SectionOrderDetailsCard
      className={text('Class', '')}
    />
  ))
