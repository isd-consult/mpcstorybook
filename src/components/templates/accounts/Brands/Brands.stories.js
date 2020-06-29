import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Brands from './Brands'

storiesOf('Templates/Accounts', module)
  .add('Brands', () => (
    <Brands
      theme={select('Theme', [null, 'men', 'women'])}
      currentUser={object('currentUser', currentUser)}
      menuInfo={object('MenuInfo', menuInfo)}
      className={text('Class', '')}
      title={text('Title', 'My Brands')}
      backLink={text('BackLink', 'Back to My Closet')}
      backHref={text('BackHref', '/account')}
      description={text('Description', 'Product from your'
        +'favourite brands will rise to the top of your results')}
      selectedBrands={object('selected brands', selectedBrands)}
      popularBrands={object('popularBrands', popularBrands)}
      brandCategories={object('brandCategories', brandCategories)}
      selectedCategory={object('selectedCategory', selectedCategory)}
      onChangeBrandCategory={action('onChangeBrandCategory')}
    />
  ))
  const currentUser = {
    name: "Mpc Admin"
  }
  const selectedBrands = [
    'Sissy Boy',
    'Steve Madden Heels',
    'Zara',
    'Nike', 
    'Puma', 
    'Steve Madden Heels'
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

  const brandCategories = [
    {
      label: "A - C",
      value: "A+B+C"
    },
    {
      label: "D - F",
      value: "D+E+F"
    },
    {
      label: "G - K",
      value: "G+H+I+J+K"
    },
    {
      label: "L - N",
      value: "L+M+N"
    },
    {
      label: "O - R",
      value: "O+P+Q+R"
    },
    {
      label: "S - T",
      value: "S+T"
    },
    {
      label: "U - Z",
      value: "U+V+W+X+Y+Z"
    }
  ]
  
  const selectedCategory =   {
    label: "A - C",
    value: "A+B+C"
  }

  const popularBrands= [
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    },
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    },
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    },
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    },
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    },
    {
      available_items: 80,
      brand_name: "nike",
      favorite: true,
      id: "517",
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com"
        +"/Brands/56de7cc1cab1e52f1f40ce40fdf57c3f.png",
        title: "nike"
      },
      name: "nike",
      new: false,
      new_items_count: 0
    }
  ]