import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import CategoryCheckBox from './CategoryCheckBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('CategoryCheckBox', () => (
    <div style={{width: 110}}>
      <CategoryCheckBox
        className={text('Class', '')}
        name={text('Name', 'name')}
        label={text('Label', 'puma')}
        image={text('Brand Image', 
        'https://encrypted-tbn0.gstatic.com/images?'
        +'q=tbn:ANd9GcRfHGdmPxLPP3W9FlUR9huYUvIe7_buFjJiCYGuSWe8Jjam6vy-Bg')}
        value={text('Value', 'puma')}
        checked={boolean('Checked', false)}
        onChange={action('onChange')}
      />
    </div>
  ))
