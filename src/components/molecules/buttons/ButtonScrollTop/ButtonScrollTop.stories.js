import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import ButtonScrollTop from './ButtonScrollTop'

storiesOf('Molecules/Buttons', module)
  .add('ButtonScrollTop', () => (
    <div>
      <ButtonScrollTop
        theme={select('Theme', [null, 'men', 'women'])}
        className={text('Class', '')}
      />
    </div>
  ))
