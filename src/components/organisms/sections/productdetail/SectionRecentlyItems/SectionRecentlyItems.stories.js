import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select, number } from '@storybook/addon-knobs'

import SectionRecentlyItems from './SectionRecentlyItems'

storiesOf('Organisms/Sections/ProductDetail', module)
.add('SectionRecentlyItems', () => (
  <SectionRecentlyItems
    theme={select('Theme', [null, 'men', 'women'])}
    title={text('Title', 'Shop size 6 dresses')}
    rowCount={number('Row Count', 2)}
    link={object('Link', link)}
    itemsType={select('Items type', [null, 'rounded', 'small'])}
    items={object('Items', items)}
    className={text('Class', '')}
  />
))

const link = {
  href: '/',
  text: 'See all',
}

const items = [
  {
    portal_config_id: '1',
    product_name: 'Ladies Black Detailed Slip On Shoes',
    rs_selling_price: 399,
    rs_sku: 'SOL_MESSINA_BLACK',
    images: [
      {
        delete: 0,
        position: "SOL_MESSINA_BLACK|1",
        s3_filepath: "https://cdn-static.runwaysale.co.za/"
        +"media/catalog/product//m/e/messina_-_black.jpg"
      }
    ]
  },
  {
    portal_config_id: '2',
    product_name: 'Ladies Black Detailed Slip On Shoes',
    rs_selling_price: 399,
    rs_sku: 'SOL_MESSINA_BLACK',
    images: [
      {
        delete: 0,
        position: "SOL_MESSINA_BLACK|1",
        s3_filepath: "https://cdn-static.runwaysale.co.za/"
        +"media/catalog/product//m/e/messina_-_black.jpg"
      }
    ]
  },
  {
    portal_config_id: '3',
    product_name: 'Ladies Black Detailed Slip On Shoes',
    rs_selling_price: 399,
    rs_sku: 'SOL_MESSINA_BLACK',
    images: [
      {
        delete: 0,
        position: "SOL_MESSINA_BLACK|1",
        s3_filepath: "https://cdn-static.runwaysale.co.za/"
        +"media/catalog/product//m/e/messina_-_black.jpg"
      }
    ]
  },
  {
    portal_config_id: '4',
    product_name: 'Ladies Black Detailed Slip On Shoes',
    rs_selling_price: 399,
    rs_sku: 'SOL_MESSINA_BLACK',
    images: [
      {
        delete: 0,
        position: "SOL_MESSINA_BLACK|1",
        s3_filepath: "https://cdn-static.runwaysale.co.za/"
        +"media/catalog/product//m/e/messina_-_black.jpg"
      }
    ]
  },
  {
    portal_config_id: '5',
    product_name: 'Ladies Black Detailed Slip On Shoes',
    rs_selling_price: 399,
    rs_sku: 'SOL_MESSINA_BLACK',
    images: [
      {
        delete: 0,
        position: "SOL_MESSINA_BLACK|1",
        s3_filepath: "https://cdn-static.runwaysale.co.za/"
        +"media/catalog/product//m/e/messina_-_black.jpg"
      }
    ]
  }
]
