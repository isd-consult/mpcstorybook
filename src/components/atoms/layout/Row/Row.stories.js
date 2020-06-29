import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Col from 'components/atoms/layout/Col'
import Container from 'components/atoms/layout/Container'

import Row from './Row'

storiesOf('Atoms/Layout', module).add('Row', () => (
  <Container>
    <Row
      isDebug={boolean('debug', true)}
      isReverse={boolean('Reverse', false)}
      isNoWrap={boolean('No wrap', false)}
    >
      <Col xs={6} isDebug={boolean('debug', true)}>1</Col>
      <Col xs={6} isDebug={boolean('debug', true)}>2</Col>
      <Col xs={6} isDebug={boolean('debug', true)}>3</Col>
      <Col xs={6} isDebug={boolean('debug', true)}>4</Col>
    </Row>
  </Container>
))
