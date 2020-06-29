import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionCategoryBySubType from './SectionCategoryBySubType'

storiesOf('Organisms/Sections/Dashboard', module)
.add('SectionCategoryBySubType', () => (
  <SectionCategoryBySubType
    theme={select('Theme', [null, 'men', 'women'])}
    data={object('Data', data)}
    titleCategory={select('Title category', [
      null,
      'secondary',
      'tertiary',
      'quinary',
    ])}
    bgColor={select('Background color', [null, 'wildsand'])}
    itemsType={select('Items type', [null, 'rounded', 'small'])}
    className={text('Class', '')}
  />
))

const data = {
  product_type: {
      product_type_code: "ACCESSORIES",
      product_gender_id: 0.0,
      product_type_id: 350.0,
      image: {
          src: "http://lorempixel.com/100/100/people/",
          title: "Accessories"
      },
      product_type_name: "Accessories",
      sk: "350",
      pk: "PRODUCT_TYPE",
      parent_id: 0.0
  },
  sub_types: [
      {
          product_type_code: "Socks",
          product_gender_id: 10.0,
          product_type_id: 1043.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Socks"
          },
          product_type_name: "Socks",
          sk: "1043",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Purses",
          product_gender_id: 1.0,
          product_type_id: 1075.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Purses"
          },
          product_type_name: "Purses",
          sk: "1075",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Bottles",
          product_gender_id: 7.0,
          product_type_id: 1088.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Bottles"
          },
          product_type_name: "Bottles",
          sk: "1088",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Cufflinks",
          product_gender_id: 3.0,
          product_type_id: 1097.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Cufflinks"
          },
          product_type_name: "Cufflinks",
          sk: "1097",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Cufflinks",
          product_gender_id: 7.0,
          product_type_id: 1098.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Cufflinks"
          },
          product_type_name: "Cufflinks",
          sk: "1098",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Ties & Bowties",
          product_gender_id: 3.0,
          product_type_id: 1099.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Ties & Bowties"
          },
          product_type_name: "Ties & Bowties",
          sk: "1099",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      },
      {
          product_type_code: "Sets",
          product_gender_id: 1.0,
          product_type_id: 517.0,
          image: {
              src: "http://lorempixel.com/100/100/people/",
              title: "Sets"
          },
          product_type_name: "Sets",
          sk: "517",
          pk: "PRODUCT_TYPE",
          parent_id: 350.0
      }
  ]
}
