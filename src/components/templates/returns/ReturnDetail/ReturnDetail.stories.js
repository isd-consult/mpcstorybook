import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import ReturnDetail from './ReturnDetail'

storiesOf('Templates/Returns', module)
  .add('ReturnDetail', () => (
    <ReturnDetail
      className={text('Class', '')}
      detail={object('Detail', detail)}
      theme={select('Theme', [null, 'men', 'women'])}
    />
  ))

  const detail =  
  {
    request_number: "2004103578363",
    requested_at: "2020-02-10 13:43:15",
    delivery_method: "Courier or Post Office",
    refund_method: "Store Credit",
    items: [
      {
        order_number: "20020303812210",
        simple_sku: "BRA_L9I27KP_NAVY-L",
        product_name: "Mens Navy Greenfield Bomber Jacket",
        size_name: "L",
        ordered_at: "2020-02-03 20:22:37",
        cost: 849,
        qty: 1,
        status: "Pending Approval",
        reason: "Too Small",
        attached_files: [
          {
            url: "https://mpc-uploads-dev.s3-eu-west-1.amazonaws.com/"
                +"0f137bd8129dca9920a0aaee69c09e19.png"
          }
        ],
        additional_comment: "test"
      },
      {
        order_number: "20020303812210",
        simple_sku: "BRA_L9I27KP_NAVY-L",
        product_name: "Mens Navy Greenfield Bomber Jacket",
        size_name: "L",
        ordered_at: "2020-02-03 20:22:37",
        cost: 849,
        qty: 1,
        status: "Pending Approval",
        reason: "Too Small",
        attached_files: [
          {
            url: "https://mpc-uploads-dev.s3-eu-west-1.amazonaws.com/"
                +"0f137bd8129dca9920a0aaee69c09e19.png"
          }
        ],
        additional_comment: "test"
      }
    ]
  }