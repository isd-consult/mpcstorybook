import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { debounce } from 'utils'

import Searchbar from './Searchbar'

storiesOf('Molecules/Forms', module).add('Searchbar', () => (
  <Searchbar
    isLoading={boolean('Loading', false)}
    isAutocomplete={boolean('Autocomplete', false)}
    onClose={action('On close')}
    onSuggest={debounce(action('On suggest'), 350)}
    suggestions={object('Suggestions', [
      { label: 'apple' },
      { label: 'banana' },
      { label: 'pear' },
    ])}
    onSearch={value => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          // eslint-disable-next-line no-alert
          alert(`Search for: ${value}`)
        }, 3000)
      })
    }}
    isFocused={boolean('Focused', true)}
    placeholder={text('Placeholder', 'Search')}
    className={text('Class', '')}
  />
))
