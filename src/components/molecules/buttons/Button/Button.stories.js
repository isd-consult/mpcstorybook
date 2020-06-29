import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'

storiesOf('Molecules/Buttons', module).add('Button', () => (
  <Button
    onClick={action('Click')}
    theme={select('Theme', [null, 'men', 'women'])}
    auto={boolean('Auto width', false)}
    isSmall={boolean('Small', false)}
    full={boolean('Full', false)}
    isCentered={boolean('Centered', false)}
    isDisabled={boolean('Disabled', false)}
    isLoading={boolean('IsLoading', false)}
    category={select('Category', ['', 'secondary', 'tertiary', 'grey'])}
    icon={text('Icon', 'arrow')}
    isIconLeft={boolean('Icon Left', false)}
    isIconRight={boolean('Icon Right', false)}
    leftIcon={boolean('leftIcon', false)}
    fw={select('Font weight', ['', 'bold', 'medium', 'light'], 'bold')}
    tag={text('Tag', 'div')}
  >
    {text('Text', 'Button')}
  </Button>
))
