import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import SectionCartHeader from './SectionCartHeader'

storiesOf('Organisms/Sections/cartlist', module)
  .add('SectionCartHeader', () => (
    <SectionCartHeader
      className={text('Class', '')}
      totalCount={text('Total Count', '4')}
      originalSubTotal={text('Original SubTotal', '1,228')}
      isHidden={boolean('isHidden', false)}
    />
  ))
