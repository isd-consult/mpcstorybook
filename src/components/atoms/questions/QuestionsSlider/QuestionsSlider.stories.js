import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsSlider from './QuestionsSlider'

storiesOf('Atoms/Questions', module).add('QuestionsSlider(multi)', () => (
  <div style={{ backgroundColor: '#7BBED9', padding: 30 }}>
    <QuestionsSlider
      isVertical={boolean('Vertical', false)}
      items={object('Items', ['One', 'Two', 'Three', 'Four', 'Five'])}
      value={object('value', ['One', 'Four'])}
      onChange={action('Change')}
    />
  </div>
))

storiesOf('Atoms/Questions', module).add('QuestionsSlider(single)', () => (
  <div style={{ backgroundColor: '#7BBED9', padding: 30 }}>
    <QuestionsSlider
      isVertical={boolean('Vertical', false)}
      items={object('Items', ['One', 'Two', 'Three', 'Four', 'Five'])}
      value={text('value', 'Four')}
      onChange={action('Change')}
    />
  </div>
))