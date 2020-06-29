import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, number } from '@storybook/addon-knobs'

import SectionPoPRequest from './SectionPoPRequest'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionPoPRequest', () => (
    <SectionPoPRequest
      className={text('Class', '')}
      orderNumber={text('orderNumber', "2002020304050")}
      dtd={object('Dtd', dtd)}
      total={number('total', 120)}
    />
  ))

  const dtd = {
    occasion : null,
    date_from: "2020-03-13",
    date_to: "2020-03-17",
    working_days_from: 23,
    working_days_to: 25
  }