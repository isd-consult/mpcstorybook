import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionRequestReturnOrder from './SectionRequestReturnOrder'

storiesOf('/Organisms/Sections/Returns', module)
  .add('SectionRequestReturnOrder', () => (
    <SectionRequestReturnOrder
      className={text('Class', '')}
      data={object('data', data)} 
      theme={select('Theme', [null, 'men', 'women'])}
      onAddItem={action('onAddItem')}
      onRemoveItem={action('onRemoveItem')}
    />
  ))

const data =  {
  order_number: "20012103973841",
  ordered_at: "2020-01-21 18:32:30",
  items: [
    {
      simple_sku: "THE_2UAO_URBANNAVY-S",
      product_name: "Mens Urban Navy Shadow Jacket",
      img_url: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
              +"Images/THE_2UAO_URBANNAVY/THE_2UAO_URBANNAVY%7C0.jpeg",
      costs: [{qty: 1, cost: 311.96}],
      qty_can_return: 1
    }
  ]
}
