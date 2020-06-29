import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import Returns from './Returns'

storiesOf('Templates/Accounts', module)
  .add('Returns', () => (
    <Returns
      className={text('Class', '')}
      returns={object('Returns', returns)}
    />
  ))

const returns =  
[
{
  returnId: '100038590',
  returnDate: '09/03/2019',
  orderId: '#190823001071',
  orderDate: 'Aug 3 2019',
  price: 'R389.60',
  status: 'Pending Approval'
},
{
  returnId: '100038590',
  returnDate: '09/03/2019',
  orderId: '#190823001071',
  orderDate: 'Aug 3 2019',
  price: 'R389.60',
  status: 'Pending Approval'
}
]