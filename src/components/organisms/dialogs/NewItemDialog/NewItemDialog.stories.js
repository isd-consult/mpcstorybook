import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import NewItemDialog from './NewItemDialog'

storiesOf('Organisms/Dialogs', module)
  .add('NewItemDialog', () => (
    <NewItemDialog
      className={text('Class', '')}
    />
  ))
