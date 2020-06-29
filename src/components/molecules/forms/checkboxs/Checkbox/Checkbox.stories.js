import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select} from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import Checkbox from './Checkbox'

storiesOf('Molecules/Forms/CheckBoxs', module)
  .add('Checkbox', () => (
    <Checkbox
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      label={text('Label', 'label1')}
      value={text('Value', 'value1')}
      type={select('Type', ['round', 'rect'])}
      checked={boolean('checked', true)}
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    />
  ))
