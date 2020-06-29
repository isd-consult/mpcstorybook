import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import Divider from './Divider'

storiesOf('Atoms/Common', module)
  .addDecorator(withInfo)
  .add(
    'Divider', 
    () => (
      <Divider
        className={text('Class', '')}
        width={select('Width', [null, 'thick', 'medium', 'strong'])}
      />
    ),
    {
      info: {
        propTables: [Divider]
      }
    }
  )