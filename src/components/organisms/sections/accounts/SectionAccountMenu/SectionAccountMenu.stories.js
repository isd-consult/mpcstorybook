import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SectionAccountMenu from './SectionAccountMenu'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAccountMenu', () => (
    <SectionAccountMenu
      className={text('Class', '')}
      items={object('Items', items)}
    />
  ))

const items = [
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
    href: "/",
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
