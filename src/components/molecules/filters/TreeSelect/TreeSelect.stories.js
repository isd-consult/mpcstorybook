import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import TreeSelect from './TreeSelect'

storiesOf('Molecules/Filters', module)
  .add('TreeSelect', () => (
    <TreeSelect
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      items={object('items', items)}
      onChange={action('onChange')}
    />
  ))

const items = [
    {
      "label": "Sneakers",
      "checked": true,
      "children": [
        { "label": "High Heel" },
        { "label": "Mid Heel", checked: true },
        { "label": "Flat Heel" }
      ]
    },
    {
      "label": "Sandals",
      "checked": true,
      "children": [
        { "label": "Great" },
        { "label": "Poor" }
      ]
    },
    {
      "label": "Drinks",
      "checked": true,
      "children": [
        { "label": "Beer" },
        { "label": "Alcolhol" },
        { "label": "Tansan" }
      ]
    },
    {
      "label": "Mango",
      "checked": true,
      "children": [
        { "label": "Coffee" },
        { "label": "Sandwitch" },
        { "label": "Tomato" }
      ]
    }
  ]