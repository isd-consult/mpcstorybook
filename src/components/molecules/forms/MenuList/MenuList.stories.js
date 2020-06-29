import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import MenuList from './MenuList'

storiesOf('Molecules/Forms', module)
  .add('MenuList', () => (
    <MenuList
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      options={object('Options', options)}
      onChange={action('Change')}
    />
  ))

  const options = [
    {
      label: 'Price Low To High',
      value: '1',
    },
    {
      label: 'Price High To Low',
      value: '2',
    },
    {
      label: 'Newest',
      value: '3',
    }
  ]