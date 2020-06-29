/* eslint-disable max-len */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsQuiz from './QuestionsQuiz'

storiesOf('Templates', module).add('QuestionsQuiz', () => (
  <QuestionsQuiz
    onSubmit={action('Submit')}
    className={text('Class', '')}
    isLoading={boolean('Loading', false)}
    pagination={[
      {
        ids: [12, 11],
        label: '1',
        isAnswered: true,
        isCurrent: false,
      },
      {
        ids: [13],
        label: '2',
        isAnswered: false,
        isCurrent: false,
      },
      {
        ids: [14],
        label: '3',
        isAnswered: true,
        isCurrent: false,
      },
      {
        ids: [14],
        label: '4',
        isAnswered: true,
        isCurrent: true,
      },
      {
        ids: [14],
        label: '5',
        isAnswered: true,
        isCurrent: false,
      },
      {
        ids: [14],
        label: '6',
        isAnswered: true,
        isCurrent: false,
      },
      {
        ids: [14],
        label: '7',
        isAnswered: false,
        isCurrent: false,
      },
    ]}
    theme={1}
    data={object('data', [
      {
        options: [
          { question: 'Who do you shop for in Men?', png_image: null, value: 'Men' },
          { question: 'Who do you shop for in Girls?', png_image: null, value: 'Girls' },
        ],
        number: '9',
        attribute: { type: 'customer', value: 'names_shop4' },
        question: 'Please add the names of those you want to shop for:',
      },
    ])}
  />
))
