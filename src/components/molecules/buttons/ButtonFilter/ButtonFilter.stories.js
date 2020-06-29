import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ButtonFilter from './ButtonFilter'

storiesOf('Molecules/Buttons', module)
  .add('ButtonFilter', () => (
    <ButtonFilter
      onChange={action('Change')}
      theme={select('Theme', [null, 'men', 'women'])}
      id={text('ID', 'radio')}
      name={text('Name', 'radio')}
      value={text('Value', 'value')}
      isChecked={boolean('Checked', false)}
      isDisabled={boolean('Disabled', false)}
      text={text('Text', 'under')}
      textHighlighted={text('Text highlighted', 'R200')}
      className={text('Class', '')}
    />
  ))
