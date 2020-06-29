import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ButtonHamburger from './ButtonHamburger'

storiesOf('Molecules/Buttons', module).add('ButtonHamburger', () => (
  <ButtonHamburger
    theme={select('Theme', [null, 'women'])}
    isOpened={boolean('Opened', false)}
    onClick={action('Click')}
  />
))
