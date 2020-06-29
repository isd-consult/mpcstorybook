import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CardUpdates from './CardUpdates'

storiesOf('Molecules/Cards', module)
  .add('CardUpdates', () => (
    <CardUpdates
      theme={select('Theme', [null, 'men', 'women'])}
      heading={text('Heading', 'Heading')}
      message={text('Message', 'message')}
      onButtonClick={action('On button click')}
      className={text('Class', '')}
    />
  ))
