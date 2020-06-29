import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionSelectedOptions from './SectionSelectedOptions'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionSelectedOptions', () => (
    <SectionSelectedOptions
      className={text('Class', '')}
      title={text('Title', 'My favorite brands')}
      items={object('Items', items)}
      onClose={action('onClose')}
    />
  ))

const items = [
  'Sissy Boy',
  'Steve Madden Heels',
  'Zara',
  'Nike', 
  'Puma', 
  'Steve Madden Heels'
]