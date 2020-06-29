import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SearchNewIn from './SearchNewIn'

storiesOf('Organisms/Search', module).add('SearchNewIn', () => (
  <SearchNewIn
    items={object('Items', [
      { label: 'Jeans', value: '/jeans' },
      { label: 'Dresses', value: '/dresses' },
      { label: 'Activewear', value: '/activewear' },
      { label: 'Jackets', value: '/jackets' },
      { label: 'Shoes', value: '/shoes' },
    ])}
    className={text('Class', '')}
  />
))
