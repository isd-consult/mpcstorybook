import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionForgotPassword from './SectionForgotPassword'

storiesOf('Organisms/Sections/Auth', module)
  .add('SectionForgotPassword', () => (
    <SectionForgotPassword
      className={text('Class', '')}
    />
  ))
