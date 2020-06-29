import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionCartList from './SectionCartList'

storiesOf('Organisms/Sections/cartlist', module)
  .add('SectionCartList', () => (
    <SectionCartList
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      items={object('Items', items)}
      onCloseItem={action('CloseItem')}
      setProductQty={action('Set Product Qty')}
    />
  ))
  const items = [
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      final_cost:200,
      size_name: 8,
      sku: 'Queue_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
            "Products marked as Xmas Delivery will be delivered "+
            "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    },
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      final_cost:200,
      size_name: 8,
      sku: 'Pewter_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
            "Products marked as Xmas Delivery will be delivered "+
            "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    },
    {
      href:'/',
      image_url:'https://placeimg.com/155/135/arch',
      brand_name:'Queue shoes',
      name:'Pewter Slip On Style',
      original_cost:249,
      final_cost:200,
      size_name: 8,
      sku: 'Slip_8',
      "dtd": {
        "occasion": {
            "name": "Xmas",
            "description": "Xmas is around the corner, get gifting! "+
            "Products marked as Xmas Delivery will be delivered "+
            "by 24 December 2019."
        },
        "date_from": "2019-11-27",
        "date_to": "2019-11-29",
        "working_days_from": 1,
        "working_days_to": 3
      }
    }
  ]

