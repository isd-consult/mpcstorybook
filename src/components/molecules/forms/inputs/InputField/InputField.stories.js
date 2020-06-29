import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import InputField from './InputField'

storiesOf('Molecules/Forms/Inputs', module)
  .add('InputField', () => (
    <InputField
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      label={text('Label', 'Label')}
      required={boolean('Required', true)}
      placeholder={text('Placeholder', 'Please input any text')}
      onChange={action('onChange')}
      value={text('Text', '')}
    />
  ))
