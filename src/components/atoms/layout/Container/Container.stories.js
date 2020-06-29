import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Container from './Container'

storiesOf('Atoms/Layout', module).add('Container', () => (
  <Container className={text('Class', '')}>
    {text('Children', 'Content inside container')}
  </Container>
))
