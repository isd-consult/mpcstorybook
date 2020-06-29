import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionPreferences from './SectionPreferences'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionPreferences', () => (
    <SectionPreferences
      className={text('Class', '')}
      preferencesInfo={object('PreferencesInfo', preferencesInfo)}
      theme={select('Theme', [null, 'men', 'women'])}
      onSave={action('onSave')}
    />
  ))

  const preferencesInfo = {
    on_site_popups: "None",
    emails: "None",
    off_site_notifications: "None",
  }