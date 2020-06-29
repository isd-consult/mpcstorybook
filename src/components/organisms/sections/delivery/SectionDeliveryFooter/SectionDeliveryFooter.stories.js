import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionDeliveryFooter from './SectionDeliveryFooter'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionDeliveryFooter', () => (
    <SectionDeliveryFooter
      className={text('Class', '')}
    />
  ))
