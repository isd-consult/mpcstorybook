import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import Title from './Title'

const link = {
  href: '/',
  text: 'View all products'
}

storiesOf('Molecules/Texts', module)
  .add('Title', () => (
    <Title
      theme={select('Theme', [null, 'men', 'women'])}
      title={text('Text', 'Last Chance!')}
      category={select('Category', [null, 'secondary', 'tertiary', 'quinary'])}
      subtitle={text('Subtitle', 'Bestsellers personalized for you')}
      link={object('Link', link)}
      mode={select('Mode', [null, 'account'])}
      className={text('Class', '')}
    />
  ))
