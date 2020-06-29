import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import MultiGendersSelect from './MultiGendersSelect'

storiesOf('Molecules/Forms/Multiselects', module)
  .add('MultiGendersSelect', () => (
    <MultiGendersSelect
      id={text('id', 'brands')}
      mode={select('mode', [null, 'multiple', 'single'])}
      className={text('class', '')}
      options={object('options', options)}
      selected={object('selected', selected)}
      onChange={action('onChange')}
      name="categories"
    />
  ))
const options = [
  { 
    id: 1, 
    type: "text", 
    value: "Men",
    label: "Men",
    image: "https://moraga.se/network/uploads/monthly_2018_11/"
    +"large.ADIDAS-min.png.0d7e6e3ff2dadb2eb19160910d5c2d6b.png"
  },
  { 
    id: 2, 
    type: "text", 
    value: "Women",
    label: "Women",
    image: "https://nuvali.ph/wp-content/"
    +"uploads/sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 3, 
    type: "text", 
    value: "Kids",
    label: "Kids",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  }
]

const selected=[
  "Puma", "Polo"
]