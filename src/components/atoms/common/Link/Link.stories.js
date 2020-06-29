import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Link from './Link'

storiesOf('Atoms/Common', module)
  .add('Link', () => (
    <Link
      className={text('Class', '')}
      to={text('To', '/')}
      label={text('Label', 'Account Info')}
      leftIcon={text('LeftIcon', 'truck')}
      rightIcon={text('RightIcon', 'arrow-small')}
    />
  ))
