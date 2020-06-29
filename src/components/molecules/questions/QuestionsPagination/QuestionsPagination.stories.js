import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import QuestionsPagination from './QuestionsPagination'

storiesOf('Molecules/Questions', module).add('QuestionsPagination', () => (
  <QuestionsPagination
    data={[
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
    className={text('Class', '')}
    onPaging={action('Paging')}
    theme={number('Theme', 1)}
  />
))
