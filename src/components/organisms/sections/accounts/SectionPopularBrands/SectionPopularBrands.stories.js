import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionPopularBrands from './SectionPopularBrands'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionPopularBrands', () => (
    <SectionPopularBrands
      className={text('Class', '')}
      title={text('Title', 'Popular brands')}
      items={object('Items', items)}
      onAddBrand={action('AddBrand')}
    />
  ))

  const items= [
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
