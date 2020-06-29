import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsUserField from './QuestionsUserField'

storiesOf('Molecules/Questions', module)
  .add('QuestionsUserField', () => (
    <QuestionsUserField
      className={text('Class', '')}
      onAdd={action('On add')}
      onRemove={action('On remove')}
      isRemove={boolean('Is remove', false)}
    />
  ))
