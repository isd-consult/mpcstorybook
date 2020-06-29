import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionContactUS from './SectionContactUS'

storiesOf('Organisms/Sections/Others', module)
  .add('SectionContactUS', () => (
    <SectionContactUS
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      contact={action('contact')}
    />
  ))
