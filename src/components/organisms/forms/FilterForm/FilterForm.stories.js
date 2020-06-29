import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, object } from '@storybook/addon-knobs'

import FilterForm from './FilterForm'

storiesOf('Organisms/Forms', module)
  .add('FilterForm', () => (
    <FilterForm
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      filterOptions={object('Filter Options', filterOptions)}
    />
  ))

const filterOptions = {
  product_type: [
    {
      "label": "Sneakers",
      "checked": true,
      "children": [
        {"label": "High Heel"},
        {"label": "Mid Heel", "checked": true},
        {"label": "Flat Heel"}
      ]
    },
    {
      "label": "Sandals",
      "children": [
        {"label": "Great"},
        {"label": "Poor"}
      ]
    },
    {
      "label": "Drinks",
      "children": [
        {"label": "Beer"},
        {"label": "Alcolhol"},
        {"label": "Tansan"}
      ]
    },
    {
      "label": "Mango",
      "children": [
        {"label": "Coffee"},
        {"label": "Sandwitch"},
        {"label": "Tomato"}
      ]
    }
  ],
  brand: [
    {label: "Style Republic"},
    {label: "Brave Soul"},
    {label: "Daily Finery"},
    {label: "Only & Sons"},
    {label: "Tokyo Laundry"},
    {label: "Butan"},
    {label: "Camille"},
    {label: "CapeStorm"},
    {label: "Original Penguin"},
    {label: "PROCESS BLACK"},
    {label: "Polo"}
  ],
  color: [
    {label: "BLUE"},
    {label: "GREEN"},
    {label: "BROWN"},
    {label: "MULTI"},
    {label: "ORANGE"},
    {label: "PRINT"},
    {label: "RED"},
    {label: "WHITE"},
    {label: "BLACK"}
  ]
}