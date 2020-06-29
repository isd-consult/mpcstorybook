import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import Fbucks from './Fbucks'

storiesOf('Templates/Credit', module)
  .add('Fbucks', () => (
    <Fbucks
      className={text('Class', '')}
      tierList={object('TierList', tierList)}
      theme={select('Theme', [null, 'men', 'women'])}
    />
  ))

  const tierList = [
    {name: 'Silver', credit_back_percent: 10},
    {name: 'Gold', credit_back_percent: 20},
    {name: 'Platinum', credit_back_percent: 25},
    {name: 'Diamond', credit_back_percent: 30}
  ]