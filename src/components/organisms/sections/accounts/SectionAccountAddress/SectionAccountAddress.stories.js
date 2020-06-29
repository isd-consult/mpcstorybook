import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SectionAccountAddress from './SectionAccountAddress'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionAccountAddress', () => (
    <SectionAccountAddress
      addressInfo={object('Address Info', addressInfo)}
      saveAddress={action('saveAddress')}
    />
  ))

const addressInfo =  
{
  addressNickname: 'Default Address NickName', 
  recipientName: 'Default Recipient Name', 
  mobileNumber: '1111111111',
  businessName: 'Default Business Name',
  complexBuilding: 'Default Complex/Building',
  streetAddress: 'Default Street Address',
  suburb: 'Default Suburb',
  postalCode: 'Default Postal Code',
  city: 'Default City',
  province: 'Default Province',
  specialInstructions: 'Default Sepcial Instructions',
  businessType: true
}
