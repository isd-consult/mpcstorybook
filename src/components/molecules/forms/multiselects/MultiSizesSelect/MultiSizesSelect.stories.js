import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Container from 'components/atoms/layout/Container'
import MultiSizesSelect from './MultiSizesSelect'

storiesOf('Molecules/Forms/Multiselects', module)
  .add('MultiSizesSelect', () => (
    <Container>
      <MultiSizesSelect
        id={text('id', 'brands')}
        mode={select('mode', [null, 'multiple', 'single'])}
        className={text('class', '')}
        options={object('options', options)}
        selected={object('selected', selected)}
        onChange={action('onChange')}
        name="sizes"
      />
    </Container>
  ))
const options = [
  { 
    id: 1, 
    type: "text", 
    value: "XXS",
    label: "XXS",
    image: null
  },
  { 
    id: 2, 
    type: "text", 
    value: "XS",
    label: "XS",
    image: null
  },
  { 
    id: 4, 
    type: "text", 
    value: "S",
    label: "S",
    image: null
  },
  { 
    id: 5, 
    type: "text", 
    value: "M",
    label: "M",
    image: null
  },
  { 
    id: 6,
    type: "text", 
    value: "L",
    label: "L",
    image: null
  },
  { 
    id: 8,
    type: "text", 
    value: "XL",
    label: "XL",
    image: null
  },
  { 
    id: 9, 
    type: "text", 
    value: "XXL",
    label: "XXL",
    image: null,
  }
]

const selected=[
  "XXS", "XXL"
]