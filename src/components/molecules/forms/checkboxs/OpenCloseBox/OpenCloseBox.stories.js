import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OpenCloseBox from './OpenCloseBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('OpenCloseBox', () => (
    <div style={{width: 100}}>
      <OpenCloseBox
        className={text('Class', '')}
        openImage={text('Open Image', 
          'round-plus-button')}
        closeImage={
          text('Close Image',
          'round-close-button')}
        checked={boolean('checked', false)}
        onChange={action('onChange')}
        iconSize={text('Icon Size', '40')}
      />
    </div>
  ))
