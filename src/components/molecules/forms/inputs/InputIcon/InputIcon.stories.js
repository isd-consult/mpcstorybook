import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean } from '@storybook/addon-knobs'

import icons from 'components/atoms/common/Icon/icons.json'
import { action } from '@storybook/addon-actions'
import InputIcon from './InputIcon'

storiesOf('Molecules/Forms/Inputs', module)
  .add('InputIcon', () => (
    <InputIcon
      className={text('Class', '')}
      icon={select('Icon', Object.keys(icons))}
      placeholder={text('Placeholder', 'Please input any text')}
      onChange={action('onChange')}
      type={text('Type', 'password')}
      value={text('Text', '')}
      isMeter={boolean('Meter', false)}
    />
  ))
