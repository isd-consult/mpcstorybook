import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'

import Text from './Text'

storiesOf('Atoms/Common', module).add('Text', () => (
  <Text
    theme={select('Theme', [null, 'men', 'women'])}
    align={select('Align', ['left', 'center', 'right'])}
    tag={select('Tag', ['div', 'h1', 'h2', 'h3', 'h4', 'h5'])}
    color={select('Color', [
      null,
      'coral',
      'chico',
      'white',
      'silver',
      'cerulean',
      'ziggurat',
    ])}
    lh={select('Line height', ['1-4', '1-5', '1-6'])}
    size={select('Size', ['xxs', 'xs', 'small', 'h1', 'h2', 'xl', 'xxxl'])}
    fw={select('Font weight', ['', 'bold', 'medium', 'light'])}
    isUppercase={boolean('Uppercase', false)}
    isUnderline={boolean('Underline', false)}
    isLineThrough={boolean('isLineThrough', false)}
  >
    {text('Text', 'Your children text')}
  </Text>
))
