import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import ProductDetail from './ProductDetail'

storiesOf('Templates', module)
  .add('ProductDetail', () => (
    <ProductDetail
      theme={select('Theme', [null, 'men', 'women'])}
      menuInfo={object('MenuInfo', menuInfo)}
      slideItems={object('Slide Items', slideItems)}
      product={object('Product', product)}
      sizeOptions={object('Size Options', sizeOptions)}
      qtyOptions={object('Qty Options', qtyOptions)}
      onSizeChange={action('OnSizeChange')}
      onQtyChange={action('OnQtyChange')}
      dtd={object('Delivery Time', dtd)}
      fitMeLink={text('FitMeLink', '/')}
      onAddCartClick={action('onAddCartClick')}
      availableItems={object('Available Items', availableItems)}
      lookLink={object('Look link', lookLink)}
      lookItems={object('Look items', lookItems)}
      onFavoriteChange={action('On favorite change')}
      similarItems={object('similar Style Items', similarItems)}
    />
  ))

// ============================================================
// Product Detail
// ============================================================
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
// ============================================================
// Slide Items
// ============================================================
const slideItems = [
  {
    image: 'https://placeimg.com/155/136/arch',
    title: 'ARCH',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/shoe',
    title: 'SHOE',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/sandal',
    title: 'SANDAL',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/shirt',
    title: 'SHIRT',
    link: '/',
  },
  {
    image: 'https://placeimg.com/155/136/gloves',
    title: 'Gloves',
    link: '/',
  }
]

// ============================================================
// Size Options
// ============================================================
const sizeOptions = [
  {
    label: 'S',
    value: '1',
  },
  {
    label: 'M',
    value: '2',
  },
  {
    label: 'L',
    value: '3',
  },
  {
    label: 'XL',
    value: '4',
  },
  {
    label: 'XXL',
    value: '5',
  },
  {
    label: 'XXXL',
    value: '6',
  },
]

// ============================================================
// Qty Options
// ============================================================
const qtyOptions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
]

// ============================================================
// Look Items
// ============================================================
const lookLink = {
  href: '/',
  text: 'See all',
}

const lookItems = [
  {
    id: '1',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/136/arch',
      title: 'Shoes',
    },
  },
  {
    id: '2',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: true,
    image: {
      src: 'https://placeimg.com/155/137/arch',
      title: 'Shoes',
    },
  },
  {
    id: '3',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/138/arch',
      title: 'Shoes',
    },
  },
  {
    id: '4',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/139/arch',
      title: 'Shoes',
    },
  },
  {
    id: '5',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/155/140/arch',
      title: 'Shoes',
    },
  },
  {
    id: '6',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/154/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '7',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/153/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '8',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/152/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '9',
    name: 'Ladies Black Detailed Slip On Shoes',
    price: 399,
    badge: 'new',
    href: '/',
    favorite: false,
    image: {
      src: 'https://placeimg.com/151/135/arch',
      title: 'Shoes',
    },
  },
]

// ============================================================
// Similar Styles Items
// ============================================================
const similarItems = [
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/154/151/arch',
      title: 'Shoes',
    },
    isInCart:false,
    title:'Queue shoes',
    subTitle:'Pewter Slip On Style',
    price:249
  },
  {
    href:'/',
    image:{
      src: 'https://placeimg.com/154/151/happy',
      title: 'Shoes',
    },
    isInCart:false,
    title:'Girl shoes',
    subTitle:'Navy Printed Slip On Moccori',
    price:249,
    discount:200
  }
]

const availableItems = [
  {
    image: {
      src: 'https://placeimg.com/154/151/happy',
      title: "Shoes"
    },
    id: '158702',
    sku: 'MAD_MDN1651_BLACKFLORAL1'
  },
  {
    image: {
      src: 'https://placeimg.com/154/151/happy',
      title: "Shoes"
    },
    id: '158703',
    sku: 'MAD_MDN1651_BLACKFLORAL2'
  },
  {
    image: {
      src: 'https://placeimg.com/154/151/happy',
      title: "Shoes"
    },
    id: '158704',
    sku: 'MAD_MDN1651_BLACKFLORAL3'
  }
]

const menuInfo = {
  categoryItems: [
    {
      link: '/',
      image: 'https://placeimg.com/155/135/women',
      name: 'Shop Women'
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/men',
      name: 'Shop Men'
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/kid',
      name: 'Shop Kids'
    }
  ],
  linkItems: [
    {
      link: '/my_account',
      name: 'My Account'
    },
    {
      link: '/track_order',
      name: 'Track Order'
    },
    {
      link: '/refine_style',
      name: 'Refine your Style'
    },
    {
      link: '/invite_friends',
      name: 'Invite Friends'
    }
  ]
}
// ============================================================
// Delivery Time
// ============================================================
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
