import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { deliveryMethods, refundMethods } from 'constants/returns'
import SectionRefundExtraEdit from './SectionRefundExtraEdit'

storiesOf('Organisms/Sections/Returns', module)
  .add('SectionRefundExtraEdit', () => (
    <SectionRefundExtraEdit
      className={text('Class', '')}
      deliveryMethods={object('DeliveryMethods', deliveryMethods)}
      refundMethods={object('RefundMethods', refundMethods)}
      onDMChange={action('onDMChange')}
      onRMChange={action('onRMChange')}
      theme={select('Theme', [null, 'men', 'women'])}
    />
  ))
