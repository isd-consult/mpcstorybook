import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Container from 'components/atoms/layout/Container'
import SectionDeliveryAddress from './SectionDeliveryAddress'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionDeliveryAddress', () => (
    <Container>
      <SectionDeliveryAddress
        className={text('Class', '')}
        onChange={action('Change')}
        addressInfos={object('Address Infos', addressInfos)}
        dtd={object('Dtd', dtd)}
      />
    </Container>
  ))
  const addressInfos =  [
    {
      address_nickname: 'john@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash:''
    },
    {
      address_nickname: 'james@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash:''
    },
    {
      address_nickname: 'jane@gmail.com', 
      recipientName: 'Recipient Name', 
      mobileNumber: '999 999 9999',
      businessName: 'Business Name',
      complexBuilding: 'Complex/Building',
      street_address: 'Street Address',
      suburb: 'Suburb',
      postalCode: 'Postal Code',
      city: 'City',
      province: 'Province',
      specialInstructions: 'Special Instructions',
      addressType: '',
      hash:''
    }
]

const dtd = {
  occasion : null,
  date_from: "2020-03-13",
  date_to: "2020-03-17",
  working_days_from: 23,
  working_days_to: 25
}
