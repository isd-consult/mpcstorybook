import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionFavoriteCategories from './SectionFavoriteCategories'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionFavoriteCategories', () => (
    <SectionFavoriteCategories
      className={text('Class', '')}
      title={text('Title', 'My favorite categories')}
      items={object('Items', items)}
      onClose={action('onClose')}
    />
  ))

const items = [
  {
    category_id: 2,
    gender_id: "LADIES",
    gender_name: "LADIES",
    image: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
    +"Mpc/Categories/1571905361-pexels-photo-977908.jpg",
    name: "LADIES Shoes",
    product_type_id: 374,
    product_type_name: "Shoes",
  },
  {
    category_id: 2,
    gender_id: "LADIES",
    gender_name: "LADIES",
    image: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
    +"Mpc/Categories/1571905361-pexels-photo-977908.jpg",
    name: "LADIES Shoes",
    product_type_id: 374,
    product_type_name: "Tops",
  }
]