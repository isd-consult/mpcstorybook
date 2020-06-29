import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import RadioBox from './RadioBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('RadioBox', () => (
    <RadioBox
      className={text('Class', '')}
      label={text('Label', 'label1')}
      value={text('Value', 'value1')}
      checked={boolean('checked', true)}
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
      fw={text('Font Weight', 'light')}
    />
  ))
