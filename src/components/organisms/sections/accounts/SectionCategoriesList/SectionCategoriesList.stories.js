import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SectionCategoriesList from './SectionCategoriesList'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionCategoriesList', () => (
    <SectionCategoriesList
      className={text('Class', '')}
      title={text('title', 'Ladies Categories')}
      items={object('items', items)}
    />
  ))

const items = [
  {
    category_id: 1,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
  {
    category_id: 2,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
  {
    category_id: 3,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
  {
    category_id: 1,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
  {
    category_id: 2,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
  {
    category_id: 3,
    gender_id: "LADIES",
    gender_name: "LADIES",
    name: "LADIES Dresses",
    product_type_id: 357,
    product_type_name: "Dresses",
  },
]
