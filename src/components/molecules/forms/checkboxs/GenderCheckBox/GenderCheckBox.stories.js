import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import GenderCheckBox from './GenderCheckBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('GenderCheckBox', () => (
    <div style={{paddingLeft: "10%"}}>
      <GenderCheckBox
        className={text('Class', '')}
        name={text('name', 'puma')}
        value={text('value', 'value')}
        image={text('Brand Image', 
'https://nuvali.ph/wp-content/uploads/sites/8/2018/04/Puma-Logo.png')}
        checked={boolean('checked', false)}
        onChange={action('onChange')}
      />
    </div>
  ))
