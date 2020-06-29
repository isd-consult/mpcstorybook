import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ButtonFile from './ButtonFile'

storiesOf('Molecules/Buttons', module).add('ButtonFile', () => (
  <ButtonFile
    onChange={action('onChange')}
    theme={select('Theme', [null, 'men', 'women'])}
    isDisabled={boolean('Disabled', false)}
    extensions={text('Exts', '.png, .jpg, .pdf')}
    type={select('Type', ['row', 'col'])}
    category={select('Category', ['', 'secondary', 'tertiary', 'grey'])}
    fw={select('FW', [null, 'bold', 'light', 'medium'])}
  >
    Choose File
  </ButtonFile>
))
