import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Snackbar from './Snackbar'

storiesOf('Molecules/Notifications', module).add('SnackbarNew', () => (
  <div>
    <Snackbar
      onClose={action('On close')}
      open={boolean('Opened', true)}
      autoHideDuration={number('Autohide duration', 5000)}
      isControlled={boolean('Close control', false)}
      icon={text('Icon', 'info')}
      href={text('Href', '#')}
      disabledPortal={boolean('Disable portal', false)}
      position={select('Position', ['top', 'bottom'], 'bottom')}
      category={select('Category', [null, 'success', 'warning', 'error'])}
      color={text('Background color', null)}
    >
      {text('Massage', 'Snackbar')}
    </Snackbar>
  </div>
))
