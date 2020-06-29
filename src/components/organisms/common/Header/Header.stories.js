import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, select, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Header from './Header'

storiesOf('Organisms/Common', module).add('Header', () => (
  <Header
    isSimpleSearch={boolean('Is simple search', false)}
    isSearchLoading={boolean('Is search loading', false)}
    theme={select('Theme', [null, 'men', 'women'])}
    onMenuToggle={action('Menu open')}
    onSearchToggle={action('Search open')}
    cartCount={number('Cart count', 5)}
    className={text('Class', '')}
    menuInfo={object('MenuInfo', menuInfo)}
    onSearch={value => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          // eslint-disable-next-line no-alert
          alert(value)
        }, 3000)
      })
    }}
    searchItems={object('Search', [
      { label: 'Jeans', value: '/jeans' },
      { label: 'Dresses', value: '/dresses' },
      { label: 'Activewear', value: '/activewear' },
      { label: 'Jackets', value: '/jackets' },
      { label: 'Shoes', value: '/shoes' },
    ])}
    searchRecommendations={object('Recommendations', [
      { label: 'Sneakers', value: '1', url: 'https://google.com' },
      { label: 'Steve Madden Heels', value: '2', url: 'https://google.com' },
      { label: 'Flats', value: '3', url: 'https://google.com' },
      { label: 'Nike', value: '4', url: 'https://google.com' },
      { label: 'Heels', value: '5', url: 'https://google.com' },
      { label: 'Steve Madden Heels', value: '6', url: 'https://google.com' },
      { label: 'Sneakers', value: '7', url: 'https://google.com' },
      { label: 'Sneakers', value: '8', url: 'https://google.com' },
      { label: 'Steve Madden Heels', value: '9', url: 'https://google.com' },
      { label: 'Stradivarius', value: '10', url: 'https://google.com' },
      { label: 'Nike', value: '11', url: 'https://google.com' },
      { label: 'Heels', value: '12', url: 'https://google.com' },
      { label: 'Steve Madden Heels', value: '13', url: 'https://google.com' },
    ])}
    onSearchSuggest={action('On suggest')}
    onRemoveRecommendation={action('On remove recommendation')}
    searchSuggestions={object('Opened', [
      { label: 'apple' },
      { label: 'banana' },
      { label: 'pear' },
    ])}
  />
))

const menuInfo = {
  categoryItems: [
    {
      link: '/',
      image: 'https://placeimg.com/155/135/women',
      name: 'Shop Women',
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/men',
      name: 'Shop Men',
    },
    {
      link: '/',
      image: 'https://placeimg.com/155/135/kid',
      name: 'Shop Kids',
    },
  ],
  linkItems: [
    {
      link: '/my_account',
      name: 'My Account',
    },
    {
      link: '/track_order',
      name: 'Track Order',
    },
    {
      link: '/refine_style',
      name: 'Refine your Style',
    },
    {
      link: '/invite_friends',
      name: 'Invite Friends',
    },
  ],
}
