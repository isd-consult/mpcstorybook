import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionAddToCart from './SectionAddToCart'

storiesOf('Organisms/Sections/ProductDetail', module)
  .add('SectionAddToCart', () => (
    <SectionAddToCart
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      product={object('Product', product)}
      getProductDtd={action('getProductDtd')}
      fitMeLink={text('FitMeLink','/')}
      onAddCartClick={action('OnAddCartClick')}
    />
  ))
  const product = {
    portal_config_id: '139507',
    manufacturer: 'POP CANDY',
    product_size_attribute: "Shoes",
    rs_product_sub_type: "Sandals & Flip Flops",
    rs_colour: "ORANGE",
    gender: "KIDS",
    product_name: "Pink Strappy Sandal",
    product_description: "PU↵Open Pink↵Flat↵SandalsBuckle detail",
    rs_sku: "POP_BR686J8_MIDPINK",
    rrp_rounded: 150,
    rrp: 150,
    wsp: 37,
    cost_price_excl_vat: 14.826086956521738,
    cost_price_incl_vat: 17.05,
    rs_price_with_mark_up: 380.05,
    rs_selling_price: 79,
    discount: 47,
    freebie: false,
    status: 0,
    created_at: "2018-11-21 19:24:43",
    updated_at: "2019-11-06 11:48:26",
    sizes: [
      {
        size: "8.5",
        qty: 10,
        status: 0,
        rs_simple_sku: "POP_BR686J8_MIDPINK-85",
        portal_simple_id: "470157",
        portal_config_id: "139507",
      },
      {
        size: "9.5",
        qty: 3,
        status: 0,
        rs_simple_sku: "POP_BR686J8_MIDPINK-95",
        portal_simple_id: "470158",
        portal_config_id: "139507",
      },
      {
        size: "11",
        qty: 5,
        status: 0,
        rs_simple_sku: "POP_BR686J8_MIDPINK-11",
        portal_simple_id: "470159",
        portal_config_id: "139507",
      }
    ],
    sold_out: false,
    images: [
      {
        s3_filepath: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
          +"Images/POP_BR686J8_MIDPINK/POP_BR686J8_MIDPINK%7C0.jpeg",
        position: "POP_BR686J8_MIDPINK|0",
        delete: 0,
      },
      {
        s3_filepath: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
          +"Images/POP_BR686J8_MIDPINK/POP_BR686J8_MIDPINK%7C1.jpeg",
        position: "POP_BR686J8_MIDPINK|1",
        delete: 0,
      }
    ],
    image: {
      media_gallery: {},
      images: {}
    },
    brand_code: "pop candy",
    tracking_info: {
      views: 18,
      visits: 0,
      clicks: 0,
      is_read: true
    },
    original_price: 79,
    current_price: 41.87,
    fbucks: 5,
  }