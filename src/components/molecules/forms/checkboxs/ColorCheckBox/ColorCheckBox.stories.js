import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import ColorCheckBox from './ColorCheckBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('ColorCheckBox', () => (
    <ColorCheckBox
      className={text('Class', '')}
      label={text('label', 'Color')}
      value={select('Value', colors)}
      checked={boolean('checked', true)}
    />
  ))

const colors = [
  "beige",
  "black",
  "blue",
  "brown",
  "coral",
  "darkblue",
  "darkgreen",
  "gold",
  "green",
  "grey",
  "khakigreen",
  "lime",
  "magenta",
  "maroon",
  "mint",
  "multicolour",
  "navy",
  "orange",
  "palepink",
  "peach",
  "pink",
  "purple",
  "red",
  "silver",
  "tan",
  "teal",
  "white",
  "yellow"
]
