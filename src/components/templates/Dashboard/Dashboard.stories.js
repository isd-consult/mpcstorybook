import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Dashboard from './Dashboard'

storiesOf('Templates', module).add('Dashboard', () => (
  <Dashboard
    theme={select('Theme', [null, 'men', 'women'])}
    currentUser={object('currentUser', currentUser)}
    menuInfo={object('MenuInfo', menuInfo)}
    bannerItems={object('Banner items', bannerItems)}
    categoryTopItems={object('Category top items', categoryTopItems)}
    categoryItems={object('Category items', categoryItems)}
    lastChanceLink={object('Last chance link', lastChanceLink)}
    lastChanceItems={object('Last chance items', lastChanceItems)}
    dressesLink={object('Dresses link', dressesLink)}
    dressesItems={object('Dresses items', dressesItems)}
    newInItems={object('New In items', newInItems)}
    newInLink={object('New In link', newInLink)}
    topBrandsInfo={object('Brands items', brandsItems)}
    brandsLink={object('Brands link', brandsLink)}
    sizeItems={object('Shop size items', sizeItems)}
    sizeLink={object('Shop size link', sizeLink)}
    priceDefaultValue={text('Price filter default value', '400')}
    onFavoriteChange={action('On favorite change')}
    priceOnChange={action('Price filter change')}
    priceOptions={object('Price filter Options', priceOptions)}
    cartCount={number('Cart count', 5)}
  />
))
const currentUser = {
  name: "Mpc Admin"
}
const bannerItems = [
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
        "url": "/shop/shoes",
        "text": "Shop Shoes"
      },
      {
        "colour": "blue_hexcode",
        "url": "/shop/dresses",
        "text": "Shop Dresses"
      }
    ],
    "end_date": null,
    "image": "https://placeimg.com/155/135/developer",
    "start_date": null,
    "banner_id": 3,
    "heading": "Hot sale!",
    "url": null,
    "position": 2,
    "gender": [
      "mens",
      "womens"
    ],
    "title": "SPRING COLLECTION"
  },
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
        "url": "/shop/shoes",
        "text": "Shop Shoes"
      },
      {
        "colour": "blue_hexcode",
        "url": "/shop/dresses",
        "text": "Shop Dresses"
      }
    ],
    "end_date": null,
    "image": "https://placeimg.com/155/137/arch",
    "start_date": null,
    "banner_id": 2,
    "heading": "Hot sale!",
    "url": null,
    "position": 2,
    "gender": [
      "womens"
    ],
    "title": "SPRING COLLECTION"
  },
  {
    "subheading": "Shop bestsellers on sale in your size",
    "active": 1,
    "buttons": [
      {
        "colour": "#ffffff",
        "url": "/shop/shoes",
        "text": "Shop Shoes"
      },
      {
        "colour": "blue_hexcode",
        "url": "/shop/dresses",
        "text": "Shop Dresses"
      }
    ],
    "end_date": "null",
    "image": "http://lorempixel.com/300/200/people/",
    "start_date": "null",
    "banner_id": 1,
    "heading": "Hot sale!",
    "url": "null",
    "position": 1,
    "gender": [
      "mens"
    ],
    "title": "SPRING COLLECTION"
  }
]
// ============================================================
// Category
// ============================================================
const categoryTopItems = [
  {
    product_type_name: 'Shoes',
    name: 'Shoes',
    href: '/',
    image: { src: 'https://placeimg.com/155/135/arch', title: 'Shoes' },
  },
  {
    product_type_name: 'Shoes',
    name: 'Clothes',
    href: '/',
    image: { src: 'https://placeimg.com/155/136/arch', title: 'Clothes' },
  },
]

const categoryItems = [
  {
    product_type_name: 'Shoes',
    name: 'Jeans',
    href: '/',
    image: { src: 'https://placeimg.com/155/134/arch', title: 'Jeans' },
  },
  {
    product_type_name: 'Outwear',
    name: 'Dresses',
    href: '/',
    image: { src: 'https://placeimg.com/156/135/arch', title: 'Dresses' },
  },
  {
    product_type_name: 'Swimwear',
    name: 'Activewear',
    href: '/',
    image: { src: 'https://placeimg.com/154/134/arch', title: 'Activewear' },
  },
  {
    product_type_name: 'Body & Face',
    name: 'Jackets',
    href: '/',
    image: { src: 'https://placeimg.com/155/137/arch', title: 'Jackets' },
  },
]

// ============================================================
// Dresses
// ============================================================
const dressesLink = {
  href: '/',
  text: 'Shop all Dresses',
}

const dressesItems = [
  {
    name: 'Maxi',
    href: '/',
    image: { src: 'https://placeimg.com/155/135/arch', title: 'Maxi' },
  },
  {
    name: 'Edgy',
    href: '/',
    image: { src: 'https://placeimg.com/155/136/arch', title: 'Edgy' },
  },
  {
    name: 'Midi',
    href: '/',
    image: { src: 'https://placeimg.com/156/136/arch', title: 'Midi' },
  },
  {
    name: 'Jumpy',
    href: '/',
    image: { src: 'https://placeimg.com/155/133/arch', title: 'Jumpy' },
  },
  {
    name: 'Other',
    href: '/',
    image: { src: 'https://placeimg.com/155/132/arch', title: 'Other' },
  },
]

// ============================================================
// Last chance
// ============================================================
const lastChanceLink = {
  href: '/',
  text: 'Shop all Bestsellers',
}

const lastChanceItems = [
  {
    name: 'Shop Shoes',
    href: '/',
    image: { src: 'https://placeimg.com/155/135/arch', title: 'Shoes' },
  },
  {
    name: 'Shop Tops',
    href: '/',
    image: { src: 'https://placeimg.com/155/136/arch', title: 'Tops' },
  },
  {
    name: 'Shop Dresses',
    href: '/',
    image: { src: 'https://placeimg.com/156/136/arch', title: 'Dresses' },
  },
  {
    name: 'Shop Bottoms',
    href: '/',
    image: { src: 'https://placeimg.com/155/133/arch', title: 'Bottoms' },
  },
  {
    name: 'Shop Shirts',
    href: '/',
    image: { src: 'https://placeimg.com/155/132/arch', title: 'Shirts' },
  },
]

// ============================================================
// Price
// ============================================================
const priceOptions = [
  { value: '200', label: 'R200' },
  { value: '400', label: 'R400' },
  { value: '800', label: 'R800' },
  { value: '1000', label: 'R1000' },
]

// ============================================================
// New in
// ============================================================
const newInLink = {
  href: '/',
  text: 'See all',
}

const newInItems = [
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
    name: 'Ladies Light Pink Slip On Shoes',
    price: 23,
    badge: null,
    href: '/',
    favorite: true,
    image: {
      src: 'https://placeimg.com/155/137/arch',
      title: 'Shoes',
    },
  },
  {
    id: '3',
    name: 'Ladies Champagne Classic Pumps',
    price: 234,
    badge: null,
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
    price: 321,
    badge: null,
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
    favorite: true,
    image: {
      src: 'https://placeimg.com/154/135/arch',
      title: 'Shoes',
    },
  },
  {
    id: '7',
    name: 'Rose Boity High Waisted Flare Trousers',
    price: 1788,
    badge: null,
    href: '/',
    favorite: true,
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
// Brands
// ============================================================
const brandsLink = {
  href: '/',
  text: 'Edit your Brands',
}

const brandsItems = [
  {
      "id": "517",
      "name": "nike",
      "brand_name": "Nike",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Nike",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "191",
      "name": "triumph",
      "brand_name": "Triumph",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Triumph",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "172",
      "name": "guess",
      "brand_name": "GUESS",
      "new": false,
      "favorite": true,
      "image": {
          "title": "GUESS",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "1352",
      "name": "style republic",
      "brand_name": "Style Republic",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Style Republic",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "534",
      "name": "polo",
      "brand_name": "Polo",
      "new": true,
      "favorite": false,
      "image": {
          "title": "Polo",
          "src": "https://placeimg.com/155/136/arch"
      },
      "new_items_count": 11
  },
  {
      "id": "552",
      "name": "soviet",
      "brand_name": "Soviet",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Soviet",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "505",
      "name": "revlon",
      "brand_name": "Revlon",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Revlon",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "707",
      "name": "daily finery",
      "brand_name": "Daily Finery",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Daily Finery",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "680",
      "name": "skone",
      "brand_name": "Skone",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Skone",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "544",
      "name": "puma",
      "brand_name": "PUMA",
      "new": false,
      "favorite": false,
      "image": {
          "title": "PUMA",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "240",
      "name": "polo belts",
      "brand_name": "Polo Belts",
      "new": false,
      "favorite": false,
      "image": {
          "title": "Polo Belts",
          "src": "https://placeimg.com/155/136/arch"
      }
  },
  {
      "id": "232",
      "name": "sole candy",
      "brand_name": "Sole Candy",
      "new": false,
      "favorite": true,
      "image": {
          "title": "Sole Candy",
          "src": "https://placeimg.com/155/136/arch"
      }
  }
]

// ============================================================
// Shop size
// ============================================================
const sizeLink = {
  href: '/',
  text: 'See all',
}

const sizeItems = [
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