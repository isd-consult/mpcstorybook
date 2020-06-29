import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import SlideItem from './SlideItem'

storiesOf('Molecules/Slider', module)
  .add('SlideItem', () => (
    <SlideItem
      theme={select('Theme', [null, 'men', 'women'])}
      backgroundImage={text(
        'Background image', 'https://placeimg.com/1000/320/any'
      )}
      title={text('Title', 'GENUINE LEATHER')}
      link={text('Link', '/')}
      className={text('Class', '')}
      active={boolean('Active', true)}
    />
  ))
