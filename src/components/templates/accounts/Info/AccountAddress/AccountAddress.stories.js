import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import AccountAddress from './AccountAddress'

storiesOf('Templates/Accounts/Info', module)
  .add('AccountAddress', () => (
    <AccountAddress
      className={text('Class', '')}
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