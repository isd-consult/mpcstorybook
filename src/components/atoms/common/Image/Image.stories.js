import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Image from './Image'

storiesOf('Atoms/Common', module)
  .add('Image', () => (
    <Image
      className={text('Class', '')}
    />
  ))
