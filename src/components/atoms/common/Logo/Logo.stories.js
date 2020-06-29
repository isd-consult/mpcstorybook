import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import Logo from './Logo'

storiesOf('Atoms/Common', module)
  .add('Logo', () => (
    <Logo
      className={text('Class', '')}
      type={select('Type', ['logo', 'icon'])}
      category={select('Category', categories)}
      size={select('Size', sizes)}
      align={select('Align', aligns)}
    />
  ))

  const categories = ['primary', 'secondary', 'tertiary']
  const sizes = ['xxs', 'xs', 'small', 'normal', 'large', 'xl', 'xxl']
  const aligns = ['left', 'center', 'right']