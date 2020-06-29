import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionGenderSelection from './SectionGenderSelection'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionGenderSelection', () => (
    <SectionGenderSelection
      className={text('Class', '')}
      gender={select('Gender', [null, 'mens', 'womens', 'kids'])}
      title={text('Title', 'title')}
      onGenderChange={action('onGenderChange')}
    />
  ))
