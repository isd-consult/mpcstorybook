import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import HrText from './HrText'

storiesOf('Molecules/Texts', module)
  .add('HrText', () => (
    <HrText
      className={text('Class', '')}
      title={text('Text', "hr text component")}
    />
  ))
