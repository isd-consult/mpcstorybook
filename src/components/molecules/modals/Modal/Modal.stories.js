import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Modal from './Modal'

storiesOf('Molecules/Modals', module)
.add('Modal', () => (
  <Modal
    onClose={action('Close')}
    disabledPortal={boolean('disabledPortal', true)}
    opened={boolean('opened', true)}
  >
    <div style={{ color: '#ffffff' }}>Content</div>
  </Modal>
))
