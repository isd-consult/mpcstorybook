import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionCheckOut from './SectionCheckOut'

storiesOf('Organisms/Sections/Cartlist', module)
  .add('SectionCheckOut', () => (
    <SectionCheckOut
      className={text('Class', '')}
      theme={select('Theme', [null, 'men', 'women'])}
      isDisabled={boolean('isDisabled', false)}
      dtd={object('Dtd', dtd)}
      handle={action('handle')}
    />
  ))

  const dtd = {
    occasion : null,
    date_from: "2020-03-13",
    date_to: "2020-03-17",
    working_days_from: 23,
    working_days_to: 25
  }