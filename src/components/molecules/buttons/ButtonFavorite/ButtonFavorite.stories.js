import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ButtonFavorite from './ButtonFavorite'

storiesOf('Molecules/Buttons', module)
  .add('ButtonFavorite', () => (
    <ButtonFavorite
      id={text('ID', '12345')}
      theme={select('Theme', [null, 'men', 'women'])}
      onChange={action('Change')}
      isFavorite={boolean('Favorite', false)}
      className={text('Class', '')}
    />
  ))
