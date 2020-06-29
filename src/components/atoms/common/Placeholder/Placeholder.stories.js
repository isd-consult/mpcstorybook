import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'

import Placeholder from './Placeholder'

storiesOf('Atoms/Common', module).add('Placeholder', () => (
  <Placeholder
    isCentered={boolean('Centered', false)}
    width={number('Width', null)}
    height={number('Height', null)}
    className={text('Class', '')}
  />
))
