import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionAddCard from './SectionAddCard'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAddCard', () => (
    <SectionAddCard
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      addCard={action('addCard')}
    />
  ))
