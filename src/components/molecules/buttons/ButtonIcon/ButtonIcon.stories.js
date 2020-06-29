import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ButtonIcon from './ButtonIcon'

storiesOf('Molecules/Buttons', module).add('ButtonIcon', () => (
  <ButtonIcon
    theme={select('Theme', [null, 'men', 'women'])}
    isActive={boolean('Active', false)}
    isDisabled={boolean('Disabled', false)}
    icon={text('Icon', 'cart')}
    iconSize={number('IconSize', 15)}
    href={text('href', '')}
    badge={text('Badge', '1')}
    onClick={action('Click')}
    className={text('Class', '')}
  />
))
