import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionLogin from './SectionLogin'

storiesOf('Organisms/Sections/Auth', module)
  .add('SectionLogin', () => (
    <SectionLogin
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      signIn={action('signIn')}
      error={text('Error', 'error message')}
    />
  ))
