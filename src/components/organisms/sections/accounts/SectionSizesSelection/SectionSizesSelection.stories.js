import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionSizesSelection from './SectionSizesSelection'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionSizesSelection', () => (
    <SectionSizesSelection
      className={text('Class', '')}
    />
  ))
