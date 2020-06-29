import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SectionSortFilter from './SectionSortFilter'

storiesOf('Organisms/Sections/ProductList', module)
  .add('SectionSortFilter', () => (
    <SectionSortFilter
      theme={select('Theme', [null, 'men', 'women'])}
      title={text('Title', 'Shoes')}
      sortOptions={object('SortOptions', sortOptions)}
      onSortChange={action('SortChange')}
      onFilterChange={action('FilterChange')}
      typeList={object('types', typeList)}
      subTypeList={object('types', subTypeList)}
      brandList={object('brands', brandList)}
      genderList={object('genders', genderList)}
      sizeList={object('sizes', sizeList)}
      colorList={object('colors', colorList)}
      priceList={object('prices', priceList)}
      className={text('Class', '')}
    />
  ))

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
    'Sneakers',
    'Sandals',
    'Heals',
    'Wedges',
    'Sports Shoes'
  ]

  const subTypeList = [
    'subTypeList1',
    'subTypeList2',
    'subTypeList3',
    'subTypeList4',
    'subTypeList5'
  ]

  const brandList = [
    'Nike',
    'Adidas',
    'Fila',
    'Sumsong',
    'G'
  ]

  const genderList = [
    "MENS",
    "LAIDES"
  ]
  const sizeList = [
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL'
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