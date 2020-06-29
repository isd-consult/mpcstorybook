import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import SectionAddSizes from './SectionAddSizes'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAddSizes', () => (
    <SectionAddSizes
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      description={text('Description', 
        "We see you sometimes browse Men's items as well."
        +"Would you like to add Men's sizes to your profile?")}
    />
  ))
