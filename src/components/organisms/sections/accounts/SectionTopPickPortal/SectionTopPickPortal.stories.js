import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionTopPickPortal from './SectionTopPickPortal'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionTopPickPortal', () => (
    <SectionTopPickPortal
      className={text('Class', '')}
      title={text('Title', 'My Recommendations')}
      backgroundImage={text('BackgroundImage', 
      'https://encrypted-tbn0.gstatic.com/images?'
      +'q=tbn:ANd9GcTsqa075E4LDvU9xli7uCBtZge5xVbXttH93SvAQCnziMEVhifU')}
    />
  ))
