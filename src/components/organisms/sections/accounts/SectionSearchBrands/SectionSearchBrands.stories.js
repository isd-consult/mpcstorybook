import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionSearchBrands from './SectionSearchBrands'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionSearchBrands', () => (
    <SectionSearchBrands
      className={text('Class', '')}
      items={object('Items', items)}
      selected={object('Selected', selected)}
      onClick={action('onClick')}
    />
  ))

const items = [
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

const selected =   {
  label: "A - C",
  value: "A+B+C"
}