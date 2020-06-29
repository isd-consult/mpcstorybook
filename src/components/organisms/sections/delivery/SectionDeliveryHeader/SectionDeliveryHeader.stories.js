import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SectionDeliveryHeader from './SectionDeliveryHeader'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionDeliveryHeader', () => (
    <SectionDeliveryHeader
      className={text('Class', '')}
      onBack={action('onBack')}
    />
  ))
