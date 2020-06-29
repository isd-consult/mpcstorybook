import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import Notification from './Notification'

storiesOf('Organisms/Common', module).add('Notification', () => (
  <Notification
    notification={object('Notification', {
      category: 'danger',
      icon: 'warning',
      duration: 10000,
      position: 'bottom',
      message: 'Danger notification!',
    })}
  />
))
