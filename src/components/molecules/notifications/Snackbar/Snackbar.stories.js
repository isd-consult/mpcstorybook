import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Snackbar from './Snackbar'

storiesOf('Molecules/Notifications', module)
  .add('Snackbar', () => (
    <Snackbar
      className={text('Class', '')}
      message={text('Message', 'Message!')}
      status={select('Status', [null, 'success', 'warning', 'error'])}
      onClose={action('onClose')}
    />
  ))
