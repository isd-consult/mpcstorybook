/* eslint-disable max-len */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import QuestionsItemCheckbox from '../../../atoms/questions/QuestionsItemCheckbox'
import QuestionsRow from './QuestionsRow'
import Image from '../../../../assets/images/questions/Bags.png'

storiesOf('Molecules/Questions', module).add('QuestionsRow', () => (
  <>
    <div style={{ backgroundColor: '#7BBED9', paddingBottom: 30 }}>
      <QuestionsRow title="Primary" className={text('Class', '')}>
        <QuestionsItemCheckbox id="1" label="One" image={Image} />
        <QuestionsItemCheckbox id="2" label="Two" image={Image} />
        <QuestionsItemCheckbox id="3" label="Three" image={Image} />
        <QuestionsItemCheckbox id="4" label="Four" image={Image} />
        <QuestionsItemCheckbox id="5" label="Five" image={Image} />
        <QuestionsItemCheckbox id="6" label="Six" image={Image} />
      </QuestionsRow>
    </div>
    <div style={{ backgroundColor: '#7BBED9', paddingBottom: 30 }}>
      <QuestionsRow isSecondary title="Secondary" className={text('Class', '')}>
        <QuestionsItemCheckbox id="7" label="One" image={Image} />
        <QuestionsItemCheckbox id="8" label="Two" image={Image} />
        <QuestionsItemCheckbox id="9" label="Three" image={Image} />
        <QuestionsItemCheckbox id="10" label="Four" image={Image} />
        <QuestionsItemCheckbox id="11" label="Five" image={Image} />
        <QuestionsItemCheckbox id="12" label="Six" image={Image} />
      </QuestionsRow>
    </div>
  </>
))
