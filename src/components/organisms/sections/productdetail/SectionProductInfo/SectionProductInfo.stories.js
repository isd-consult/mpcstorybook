import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SectionProductInfo from './SectionProductInfo'

storiesOf('Organisms/Sections/ProductDetail', module)
  .add('SectionProductInfo', () => (
    <SectionProductInfo
      className={text('Class', '')}
      product={object('Product', product)}
      dtd={object('Delivery Time', dtd)}
    />
  ))

const product = {
  "manufacturer": "PUMA",
  "season": null,
  "product_size_attribute": "Shoes",
  "rs_product_sub_type": "Sneakers",
  "rs_colour": "WHITE",
  "gender": "MENS",
  "product_name": "Mens Black & Silver Suede Ignite Staple Sneakers",
  "size_chart": "",
  "neck_type": null,
  "fit": null,
  "dimensions": null,
  "fabrication": null,
  "size_fit": null,
  "product_description": "For every interval of your day.",
  "rs_sku": "PUM_36439101_BLANK",
  "rrp_rounded": 2500,
  "rrp": 2500,
  "wsp": 650,
  "cost_price_excl_vat": 650,
  "cost_price_incl_vat": 747.5,
  "rs_price_with_mark_up": 801.5,
  "rs_selling_price": 1149,
  "discount": 54,
  "status": 0,
  "created_at": "2019-03-27 11:33:49",
  "updated_at": "2019-07-22 16:01:25",
  "sizes": [
      {
          "size": "6",
          "qty": 0,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-6",
          "portal_simple_id": "550504",
          "portal_config_id": "162600"
      },
      {
          "size": "7",
          "qty": 0,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-7",
          "portal_simple_id": "550505",
          "portal_config_id": "162600"
      },
      {
          "size": "8",
          "qty": 2,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-8",
          "portal_simple_id": "550506",
          "portal_config_id": "162600"
      },
      {
          "size": "9",
          "qty": 0,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-9",
          "portal_simple_id": "550507",
          "portal_config_id": "162600"
      },
      {
          "size": "10",
          "qty": 0,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-10",
          "portal_simple_id": "550508",
          "portal_config_id": "162600"
      },
      {
          "size": "11",
          "qty": 1,
          "status": 0,
          "rs_simple_sku": "PUM_36439101_BLANK-11",
          "portal_simple_id": "550509",
          "portal_config_id": "162600"
      }
  ],
  "brand_code": "puma"
}

const dtd = {
  "occasion": {
    "name": "Xmas",
    "description": "Xmas is around the corner, get gifting! "+
      "Products marked as Xmas Delivery will be delivered "+
      "by 24 December 2019."
  },
  "date_from": "2019-12-26",
  "date_to": "2019-12-30",
  "working_days_from": 23,
  "working_days_to": 25
}
