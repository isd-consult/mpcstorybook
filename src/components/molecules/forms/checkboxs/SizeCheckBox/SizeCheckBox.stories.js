import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean} from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SizeCheckBox from './SizeCheckBox'

storiesOf('Molecules/Forms/CheckBoxs', module)
  .add('SizeCheckBox', () => (
    <SizeCheckBox
      className={text('Class', '')}
      label={text('Label', 'label1')}
      value={text('Value', 'value1')}
      checked={boolean('checked', false)}
      onChange={action('onChange')}
    />
  ))
