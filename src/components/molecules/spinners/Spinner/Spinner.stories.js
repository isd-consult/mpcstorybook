import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import Spinner from './Spinner'

storiesOf('Molecules/Spinners', module)
  .add('Spinner', () => (
    <Spinner
      theme={select('Theme', [null, 'men', 'women'])}
      size={select('Size', [null, 'small', 'normal', 'big', 'large'])}
      isCentered={boolean('Centered', true)}
      isLogo={boolean('Logo', false)}
      className={text('Class', '')}
    />
  ))
