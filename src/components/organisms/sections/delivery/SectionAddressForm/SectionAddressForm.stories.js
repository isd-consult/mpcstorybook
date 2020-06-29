import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Container from 'components/atoms/layout/Container'
import SectionAddressForm from './SectionAddressForm'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionAddressForm', () => (
    <Container>
      <SectionAddressForm
        theme={select('Theme', [null, 'men', 'women'])}
        title={text('Title', 'Add new address')}
        saveAddress={action('Save Address')}
        addressInfo={object('Address Info', addressInfo)}
      />
    </Container>
  ))
  const addressInfo =  
  {
    addressNickname: 'john@gmail.com', 
    recipientName: 'Recipient Name', 
    mobileNumber: '999 999 9999',
    businessName: 'Business Name',
    complexBuilding: 'Complex/Building',
    streetAddress: 'Street Address',
    suburb: 'Suburb',
    postalCode: 'Postal Code',
    city: 'City',
    province: 'Province',
    specialInstructions: 'Special Instructions',
    addressType: 'business'
  }