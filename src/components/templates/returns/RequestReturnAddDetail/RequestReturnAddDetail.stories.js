import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import RequestReturnAddDetail from './RequestReturnAddDetail'

storiesOf('/Templates/Accounts', module)
  .add('RequestReturnAddDetail', () => (
    <RequestReturnAddDetail
      className={text('Class', '')}
    />
  ))
