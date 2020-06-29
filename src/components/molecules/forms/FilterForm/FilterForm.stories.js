import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import FilterForm from './FilterForm'

storiesOf('Molecules/Forms', module)
  .add('FilterForm', () => (
    <FilterForm
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      typeOptions={object('Type Options', typeOptions)}
      subTypeOptions={object('SubTypes Options', subTypeOptions)}
      brandOptions={object('Brand Options', brandOptions)}
      genderOptions={object('Gender Options', genderOptions)}
      sizeOptions={object('Size Options', sizeOptions)}
      colorOptions={object('Color Options', colorOptions)}
      priceOptions={object('Price Options', priceOptions)}
      onChange={action('onChange')}
    />
  ))

  const typeOptions = [
    'Sneakers',
    'Sandals',
    'Heals',
    'Wedges',
    'Sports Shoes'
  ]
  
  const subTypeOptions = [
    'subTypeList1',
    'subTypeList2',
    'subTypeList3',
    'subTypeList4',
    'subTypeList5'
  ]
  const genderOptions = [
    'Mens',
    'Ladies'
  ]
  const brandOptions = [
    'Nike',
    'Adidas',
    'Fila',
    'Sumsong',
    'G'
  ]

  const sizeOptions = [
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL'
  ]

  const colorOptions = [
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

  const priceOptions = [
    'under R200',
    'under R400',
    'under R600',
    'under R800',
    'under R1000',
  ]