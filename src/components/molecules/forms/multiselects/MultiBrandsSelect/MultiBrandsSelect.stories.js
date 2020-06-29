import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Container from 'components/atoms/layout/Container'
import MultiBrandsSelect from './MultiBrandsSelect'

storiesOf('Molecules/Forms/Multiselects', module)
  .add('MultiBrandsSelect', () => (
    <Container>
      <MultiBrandsSelect
        id={text('id', 'brands')}
        mode={select('mode', [null, 'multiple', 'single'])}
        className={text('class', '')}
        options={object('options', options)}
        selected={object('selected', selected)}
        onChange={action('onChange')}
      />
    </Container>
  ))
const options = [
  { 
    id: 1, 
    type: "text", 
    value: "Addidas",
    image: "https://moraga.se/network/uploads/monthly_2018_11/"
    +"large.ADIDAS-min.png.0d7e6e3ff2dadb2eb19160910d5c2d6b.png"
  },
  { 
    id: 2, 
    type: "text", 
    value: "Puma",
    image: "https://nuvali.ph/wp-content/"
    +"uploads/sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 3, 
    type: "text", 
    value: "Polo",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  },
  { 
    id: 4, 
    type: "text", 
    value: "Fila",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  },
  { 
    id: 5, 
    type: "text", 
    value: "Sumsong",
    image: "https://nuvali.ph/wp-content/uploads/"
    +"sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 6,
    type: "text", 
    value: "Grand",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  },
  { 
    id: 7, 
    type: "text", 
    value: "Ping",
    image: "https://nuvali.ph/wp-content/"
    +"uploads/sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 8,
    type: "text", 
    value: "Voll",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  },
  { 
    id: 9, 
    type: "text", 
    value: "Mizuno",
    image: "https://nuvali.ph/wp-content/uploads/sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 10,
    type: "text", 
    value: "Neo",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  },
  { 
    id: 11, 
    type: "text", 
    value: "Fight",
    image: "https://nuvali.ph/wp-content/"
    +"uploads/sites/8/2018/04/Puma-Logo.png"
  },
  { 
    id: 12,
    type: "text", 
    value: "Sing",
    image: "https://encrypted-tbn0.gstatic.com/images?"
    +"q=tbn:ANd9GcRQmLl1brTtiaowf7ArssCUXBoCZm_Juwc35sAWj7Tjqj9ChEUm"
  }
]

const selected=[
  "Puma", "Polo"
]