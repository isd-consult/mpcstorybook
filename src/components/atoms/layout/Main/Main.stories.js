import React from 'react'
import { storiesOf } from '@storybook/react'

import Main from './Main'

storiesOf('Atoms/Layout', module).add('Main', () => (
  <Main>Wrapper between header and footer</Main>
))
