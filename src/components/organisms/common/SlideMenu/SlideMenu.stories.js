import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import SlideMenu from './SlideMenu'

storiesOf('Organisms/Common', module)
  .add('SlideMenu', () => (
    <SlideMenu
      className={text('Class', '')}
      isOpen={boolean('isOpen', false)}
      direction={select('direction', [null, 'right', 'left'])}
    />
  ))
