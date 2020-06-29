import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import FbucksText from './FbucksText'

storiesOf('Molecules/Texts', module)
  .add('FbucksText', () => (
    <FbucksText
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      credit={text('Credit', '50')}
    />
  ))
