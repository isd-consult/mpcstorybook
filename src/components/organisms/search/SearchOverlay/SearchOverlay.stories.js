import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SearchOverlay from './SearchOverlay'

storiesOf('Organisms/Search', module).add('SearchOverlay', () => (
  <SearchOverlay
    isSearchLoading={boolean('Search loading', false)}
    recommendations={object('Recommendations', [
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
    onSuggest={action('On suggest')}
    onClose={action('On close')}
    onRemoveRecommendation={action('On remove recommendation')}
    suggestions={object('Opened', [
      { label: 'apple' },
      { label: 'banana' },
      { label: 'pear' },
    ])}
    className={text('Class', '')}
  />
))
