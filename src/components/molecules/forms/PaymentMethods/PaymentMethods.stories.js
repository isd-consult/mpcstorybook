import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import PaymentMethods from './PaymentMethods'

storiesOf('Molecules/Forms', module)
  .add('PaymentMethods', () => (
    <PaymentMethods
      className={text('Class', '')}
      methods={object('methods', methods)}
      onChange={action('onChange')}
    />
  ))

  const methods = [
    {value: "store_credit", label: "Store Credit"},
    {value: "credit_card_eft", label: "Credit Card / EFT"}
  ]