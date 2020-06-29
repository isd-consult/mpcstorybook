import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import { reasons } from 'constants/returns'
import SectionReturnItemEdit from './SectionReturnItemEdit'

storiesOf('Organisms/Sections/Returns', module)
  .add('SectionReturnItemEdit', () => (
    <SectionReturnItemEdit
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      data={object('data', data)} 
      reasons={object('reasons', reasons)}
    />
  ))

const data = {
  order_number: "20020303812210",
  ordered_at: "2020-02-03 20:22:37",
  can_be_returned_till: "2020-02-18 13:12:59",
  simple_sku: "BRA_L9I27KP_NAVY-L",
  product_name: "Mens Navy Greenfield Bomber Jacket",
  img_url: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/"
    +"BRA_MJKGREENFIELDB_NAVY/BRA_MJKGREENFIELDB_NAVY%7C0.jpeg?v=1573562815",
  costs: [
    {qty: 1, cost: 849}
  ],
  qty_can_return: 1
}