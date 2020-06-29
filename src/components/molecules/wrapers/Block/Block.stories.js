import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import Block from './Block'

storiesOf('Molecules/Wrapers', module)
  .add('Block', () => (
    <Block
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
    />
  ))
