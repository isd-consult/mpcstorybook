import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object, select } from '@storybook/addon-knobs'

import BaseLayout from './BaseLayout'

const items = [
  { href: '/', name: 'Orders and Deliveries' },
  { href: '/', name: 'About Us' },
  { href: '/', name: 'Terms of Use' },
  { href: '/', name: 'Contact us' },
  { href: '/', name: 'Privacy Policy' },
  { href: '/', name: 'Returns' }
]

storiesOf('Layouts', module).add('BaseLayout', () => (
  <BaseLayout
    theme={select('Theme', [null, 'men', 'women'])}
    menuInfo={object('menuInfo', menuInfo)}
    cartCount={number('Cart count', 5)}
    footerMenuItemsPerColumn={number('Menu items per column', 3)}
    footerMenuItems={object('Menu items', items)}
    className={text('Class', '')}
  >
    {text('Children', 'Main content')}
  </BaseLayout>
))

const menuInfo = {
  categoryItems: [
    {
      link: '/',
      image: 'https://placeimg.com/155/135/women',
      name: 'Shop Women'
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/men',
      name: 'Shop Men'
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/kid',
      name: 'Shop Kids'
    }
  ],
  linkItems: [
    {
      link: '/my_account',
      name: 'My Account'
    },
    {
      link: '/track_order',
      name: 'Track Order'
    },
    {
      link: '/refine_style',
      name: 'Refine your Style'
    },
    {
      link: '/invite_friends',
      name: 'Invite Friends'
    }
  ]
}
