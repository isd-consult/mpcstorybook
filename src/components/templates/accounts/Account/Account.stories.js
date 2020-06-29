import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import Account from './Account'

storiesOf('Templates/Accounts', module)
  .add('Account', () => (
    <Account
      className={text('Class', '')}
      user={object('User', user)}
      userInfo={object('UserInfo', userInfo)}
      accountMenuInfo={object('accountMenuInfo', accountMenuInfo)}
    />
  ))

  const user = {
    name: 'MPC Admin'
  }

  const userInfo = {
    first_name: "MPC",
    last_name: "MPC",
    identification_number: "1234567890"
  }

  const accountMenuInfo = [
    {
      href: "/",
      label: "Account info",
      lefticon: "settings",
      righticon: "arrow-small"
    },
    {
      href: "/",
      label: "My Credit",
      lefticon: "credit-card",
      righticon: "arrow-small"
    },
    {
      href: "/",
      label: "My Orders and Returns",
      lefticon: "truck",
      righticon: "arrow-small"
    },
    {
      href: "/accounts/closet",
      label: "My Closet",
      lefticon: "heart-bone",
      righticon: "arrow-small"
    },
    {
      href: "/",
      label: "My Rewards",
      lefticon: "gift",
      righticon: "arrow-small"
    }
  ]