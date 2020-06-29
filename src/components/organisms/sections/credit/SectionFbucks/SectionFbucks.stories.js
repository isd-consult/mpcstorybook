import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionFbucks from './SectionFbucks'

storiesOf('Organisms/Sections/Credit', module)
  .add('SectionFbucks', () => (
    <SectionFbucks
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      tierList={object('Tier List', tierList)}
    />
  ))

  const tierList = [
    {name: 'Silver', credit_back_percent: 10},
    {name: 'Gold', credit_back_percent: 20},
    {name: 'Platinum', credit_back_percent: 25},
    {name: 'Diamond', credit_back_percent: 30}
  ]