import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SlideNavigatorItem from './SlideNavigatorItem'

storiesOf('Molecules/Slider', module)
  .add('SlideNavigatorItem', () => (
    <SlideNavigatorItem
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('class', '')}
      onClick={action('Click')}
      active={boolean('active', true)}
    />
  ))
