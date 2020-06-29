import React from 'react'
import { object, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import SectionAccountAddressBook from './SectionAccountAddressBook'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAccountAddressBook', () => (
    <SectionAccountAddressBook 
      theme={select('Theme', [null, 'men', 'women'])}
      addresses={object('Addresses', addresses)}
    />
  ))

  const addresses = [
    {
      address_nickname: "kkkkkk@asd.asd",
      business_name: null,
      business_type: false,
      city: "kkk",
      complex_building: null,
      is_default_billing: false,
      is_default_shipping: false,
      mobile_number: "34523452345",
      postal_code: null,
      province: "kkk",
      recipient_name: "kkk",
      special_instructions: null,
      street_address: "kkkkk",
      suburb: "kkkkkkkkkk"
    }
  ]