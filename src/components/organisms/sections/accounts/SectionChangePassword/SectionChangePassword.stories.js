import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionChangePassword from './SectionChangePassword'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionChangePassword', () => (
    <SectionChangePassword
      className={text('Class', '')}
    />
  ))
