import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import TogglePannel from './TogglePannel'

storiesOf('Molecules/Panels', module)
  .add('TogglePannel', () => (
    <div>
      <TogglePannel
        className={text('Class', '')}
        title={text('Title', 'title')}
        subtitle={text('subTitle', 'subTitle')}
        mode={select('Mode', [null, 'filter'])}
        active={boolean('Active', true)}
        icon={text('Icon', 'arrow-down')}
        theme={select('Theme', [null, 'men', 'women'])}
      >
        {text('Content', 'This is content')}
      </TogglePannel>
    </div>
  ))
