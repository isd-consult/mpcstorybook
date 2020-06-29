import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, number } from '@storybook/addon-knobs'

import SectionPricesCard from './SectionPricesCard'

storiesOf('Organisms/Sections/Others', module)
  .add('SectionPricesCard', () => (
    <SectionPricesCard
      className={text('Class', '')}
      data={object('Data', data)}
      total={number('Total', 500)}
      vat={number('Vat', 10)}
    />
  ))

  const data = [
    {
      label: "Subtotal", 
      value: 200
    },
    {
      label: "Delivery Amount",
      value: 30
    },
    {
      label: "Credit Used", 
      value: 20
    },
  ]