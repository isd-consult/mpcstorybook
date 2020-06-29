import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../../../../assets/images/questions/Bags.png'
import QuestionsItemCheckbox from './QuestionsItemCheckbox'

storiesOf('Atoms/Questions', module).add(
  'QuestionsItemCheckbox default',
  () => <QuestionsItemCheckbox theme={1} image={Image} label="Default" />,
)

storiesOf('Atoms/Questions', module).add(
  'QuestionsItemCheckbox disabled',
  () => <QuestionsItemCheckbox image={Image} isDisabled label="Disabled" />,
)
