import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import TextArea from './TextArea'

storiesOf('Molecules/Forms/TextArea', module)
  .add('TextArea', () => (
    <TextArea
      className={text('Class', '')}
      name={text('Name', 'textarea')}
      placeholder={text('TextArea', 'TextArea')}
      onChange={action('onChange')}
      value={text('Value', '')}
      block={boolean('block', false)}
    />
  ))
