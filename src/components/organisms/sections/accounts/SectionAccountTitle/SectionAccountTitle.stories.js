import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionAccountTitle from './SectionAccountTitle'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAccountTitle', () => (
    <SectionAccountTitle
      className={text('Class', '')}
      title={text('Title', 'My Brands')}
      link={text('Link', 'Back to My Closet')}
      href={text('Href', '/account/closet')}
      description={text('Description', 'Product from your' 
      + ' favorite brands will rise to the top of your results')}
    />
  ))
