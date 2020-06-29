import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import Container from 'components/atoms/layout/Container'
import SectionCreditPayment from './SectionCreditPayment'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionCreditPayment', () => (
    <Container>
      <SectionCreditPayment
        className={text('Class', '')}
        creditsAvailable={number('creditsAvailable', 1000)}
        creditsInUse={number('creditsInUse', 120)}
      />
    </Container>
  ))
