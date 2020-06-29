import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'

import Container from 'components/atoms/layout/Container'
import SectionPayment from './SectionPayment'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionPayment', () => (
    <Container>
      <SectionPayment
        className={text('Class', '')}
        title={text('Title', 'Select a payment method')}
        theme={select('Theme', [null, 'men', 'women'])}
        dtd={object('Dtd', dtd)}
      />
    </Container>
  ))

  const dtd = {
    occasion : null,
    date_from: "2020-03-13",
    date_to: "2020-03-17",
    working_days_from: 23,
    working_days_to: 25
  }
