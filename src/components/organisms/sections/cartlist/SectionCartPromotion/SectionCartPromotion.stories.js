import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object, boolean } from '@storybook/addon-knobs'

import SectionCartPromotion from './SectionCartPromotion'

storiesOf('Organisms/Sections/cartlist', module)
  .add('SectionCartPromotion', () => (
    <SectionCartPromotion
      className={text('Class', '')}
      availableFbucks={number('Available Fbucks', 0)}
      totalFbucks={number('Total Fbucks', 0)}
      nextTierInfo={object('nextTierInfo', nextTierInfo)}
      isHidden={boolean('isHidden', false)}
    />
  ))

  const nextTierInfo = {
    currently_spent: 11000,
    next_tier: {
      name: 'Gold',
      amount_min: 12001
    }
  }