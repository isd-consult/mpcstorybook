import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Dialog from './Dialog'

storiesOf('Molecules/Modals', module)
  .add('Dialog', () => (
    <Dialog
      className={text('Class', '')}
      opened={boolean('opened', true)}
    >
      Dialog
    </Dialog>
  ))
