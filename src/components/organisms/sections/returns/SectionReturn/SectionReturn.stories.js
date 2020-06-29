import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SectionReturn from './SectionReturn'

storiesOf('Organisms/Sections/Returns', module)
  .add('SectionReturn', () => (
    <SectionReturn
      className={text('Class', '')}
      data={object('Data', data)} 
    />
  ))

const data =  
{
  request_number: '100038590',
  requested_at: '09/03/2019',
  orderId: '#190823001071',
  orderDate: 'Aug 3 2019',
  price: 'R389.60',
  status: 'Pending Approval'
}
