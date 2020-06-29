import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from '@storybook/addon-knobs'

import Col from './Col'

const cols = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf('Atoms/Layout', module).add('Col', () => (
  <Col
    isAutoWidth={boolean('Auto width', false)}
    isDebug={boolean('Debug', true)}
    xs={select('xs', cols, null)}
    tag={text('Tag', 'div')}
    xsOffset={select('Offset xs', cols, null)}
  >
    Col
  </Col>
))
