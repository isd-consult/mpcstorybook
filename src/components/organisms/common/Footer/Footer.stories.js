import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, boolean} from '@storybook/addon-knobs'

import Footer from './Footer'

const items = [
  { href: '/', name: 'Orders and Deliveries' },
  { href: '/', name: 'About Us' },
  { href: '/', name: 'Terms of Use' },
  { href: '/', name: 'Contact us' },
  { href: '/', name: 'Privacy Policy' },
  { href: '/', name: 'Returns' }
]

storiesOf('Organisms/Common', module)
  .add('Footer', () => (
    <Footer
      menuItems={object('Menu items', items)}
      className={text('Class', '')}
      isAuthenticated={boolean('isAuthenticated', false)}
    />
  ))
