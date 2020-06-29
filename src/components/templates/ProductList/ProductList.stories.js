import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ProductList from './ProductList'

storiesOf('Templates', module)
  .add('ProductList', () => (
    <ProductList
      theme={select('Theme', [null, 'men', 'women'])}
      currentUser={object('currentUser', currentUser)}
      title={text('Title', 'Shoes')}
      cartCount={number('CartCount', 3)}
      menuInfo={object('MenuInfo', menuInfo)}
      category={text('Category', 'Shoes')}
      sortOptions={object('SortOptions', sortOptions)}
      onSortChange={action('SortChange')}
      totalCount={number('totalCount', 32345)}
      onFilterChange={action('FilterChange')}
      typeOptions={object('types', typeList)}
      brandOptions={object('brands', brandList)}
      sizeOptions={object('sizes', sizeList)}
      colorOptions={object('colors', colorList)}
      priceOptions={object('prices', priceList)}
      productList={object('ProductList', productList)}    
    />
  ))
  const currentUser = {
    name: "Mpc Admin"
  }
  const productList = [
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/animal',
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
        src: 'https://placeimg.com/155/135/arch',
        title: 'Shoes',
      },
      isInCart:true,
      title:'Girl shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
      discount:200
    },
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/man',
        title: 'Shoes',
      },
      isInCart:true,
      title:'Queue shoes',
      subTitle:'Pewter Slip On Style',
      price:249
    },
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/women',
        title: 'Shoes',
      },
      isInCart:false,
      title:'Queue shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
    },
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/student',
        title: 'Shoes',
      },
      isInCart:false,
      title:'Queue shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
      discount:200
    },
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/shoes',
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
        src: 'https://placeimg.com/155/135/sandal',
        title: 'Shoes',
      },
      isInCart:false,
      title:'Queue shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
      discount:200
    },
    {
      href:'/',
      image:{
        src: 'https://placeimg.com/155/135/shirt',
        title: 'Shoes',
      },
      isInCart:false,
      title:'Queue shoes',
      subTitle:'Pewter Slip On Style',
      price:249,
    },
  ]

  const sortOptions = [
    {
      label: 'Price Low To High',
      value: '1',
    },
    {
      label: 'Price High To Low',
      value: '2',
    },
    {
      label: 'Newest',
      value: '3',
    }
  ]

  const typeList = [
    'Shoes',
    'Tops',
    'Accessories',
    'Bottoms',
    'Outerwear'
  ]

  const brandList = [
    'Vans',
    'Madison',
    'Converse',
    'Diesel',
    'Polo',
    'Footwork',
    'Polo Jeans Co.',
  ]

  const sizeList = [
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    'L'
  ]

  const colorList = [
    'Black',
    'Blue',
    'Purple',
    'Brown',
    'White',
    'Red',
    'Orange',
    'Pink',
    'Grey',
    'Yellow',
    'Green',
    'MultiColour'
  ]

  const priceList = [
    'under R200',
    'under R400',
    'under R600',
    'under R800',
    'under R1000',
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