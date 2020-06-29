import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Switch from './Switch'

storiesOf('Molecules/Forms', module)
  .add('Switch', () => (
    <div style={{
      backgroundColor: '#7BBED9', 
      padding: '30px',
      width: '100%',
      height: '100vh'}}
    >
      <Switch
        className={text('Class', '')}
        active={boolean('Active', false)}
      />
    </div>
  ))
