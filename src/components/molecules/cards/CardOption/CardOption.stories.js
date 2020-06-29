import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import CardOption from './CardOption'

storiesOf('Molecules/Cards', module).add('CardOption', () => (
  <CardOption
    className={text('Class', '')}
    isLoading={boolean('Loading', false)}
    label={text('Label', 'label')}
    value={text('Value', 'value')}
    onClose={action('onClose')}
    mode={select('Mode', [null, 'grey'])}
  />
))
