import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import SectionStickyBottom from './SectionStickyBottom'

storiesOf('Organisms/Sections/Cartlist', module)
  .add('SectionStickyBottom', () => (
    <SectionStickyBottom
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      total={text('Total', '1,228')}
    />
  ))
