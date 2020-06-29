import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import InviteFriends from './InviteFriends'

storiesOf('Templates', module)
  .add('InviteFriends', () => (
    <InviteFriends
      className={text('Class', '')}
    />
  ))
