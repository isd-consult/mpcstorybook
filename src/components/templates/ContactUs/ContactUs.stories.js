import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import ContactUs from './ContactUs'

storiesOf('Templates', module)
  .add('ContactUs', () => (
    <ContactUs
      className={text('Class', '')}
    />
  ))
