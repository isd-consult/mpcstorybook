import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import Credit from './Credit'

storiesOf('Templates/Credit', module)
  .add('Credit', () => (
    <Credit
      className={text('Class', '')}
      fbucksInfo={object('Fbucks Info', fbucksInfo)}
      theme={select('Theme', [null, 'men', 'women'])}
    />
  ))

  const fbucksInfo = {
    fbucks_amount: 320,
    cache_out_balance: 210,
    fbucks_changes: [
      {
        amount: 230,
        changed_at: "2020-20-10",
        order_number: "12345"
      },
      {
        amount: 130,
        changed_at: "2020-20-30",
        order_number: "12346"
      },
      {
        amount: -20,
        changed_at: "2020-20-8",
        order_number: "12347"
      },
      {
        amount: -50,
        changed_at: "2020-20-11",
        order_number: "12348"
      }
  ]}