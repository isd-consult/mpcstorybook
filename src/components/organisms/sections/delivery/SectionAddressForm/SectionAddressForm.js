import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAddressForm.scss'
import RadioBox 
  from 'components/molecules/forms/checkboxs/RadioBox'
import Text from 'components/atoms/common/Text'
import InputLabel
  from 'components/molecules/forms/inputs/InputLabel'
import Button 
  from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'

class SectionAddressForm extends Component {
  constructor(props){
    super(props)
    this.state = { address: props.address, isSaving: false }
    this.onChange = this.onChange.bind(this)
    this.saveAddress = this.saveAddress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {address} = this.props
    if (JSON.stringify(address) !== JSON.stringify(nextProps.address)) {
      this.setState({address: nextProps.address})
    }
  }

  onChange(event) {
    let {address} = this.state
    address = {...address, [event.target.name]: event.target.value}
    this.setState({address})
  }

  async saveAddress(){
    const {address} = this.state
    const {saveAddress} = this.props
    this.setState({isSaving: true})
    await saveAddress(address)
    this.setState({isSaving: false})
  }

  render () {
    const { theme, title } = this.props
    const { address, isSaving } = this.state

    return (
      <div
        className={clsx(
          'section-address-form',
        )}
      >
        <Text className="mb-10" size="xxl">
          { title }
        </Text>
        <div style={{display: 'flex'}}>
          <RadioBox
            label="Residential"
            value="residential"
            name="address_type"
            fw={address&&address.address_type==='residential'?"bold":"light"}
            onChange={this.onChange}
            checked={!!(address && address.address_type==='residential')}
          />
          <RadioBox
            className="ml-10"
            label="Business"
            value="business"
            name="address_type"
            fw={address && address.address_type==='business'?"bold":"light"}
            onChange={this.onChange}
            checked={!!(address && address.address_type==='business')}
          />
        </div>
        <Block className="mt-10 mb-15">
          <InputLabel
            type="text"
            label="Address nickname"
            name="address_nickname"
            placeholder="example@gmail.com"
            value={address && address.address_nickname}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Recipient name*"
            name="recipient_name"
            placeholder="John Doe"
            value={address && address.recipient_name}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Mobile number*"
            name="phone_number"
            placeholder="Mobile number*"
            value={address && address.phone_number}
            onChange={this.onChange}
          />
          {address && address.address_type==="business" && (
            <InputLabel
              type="text"
              label="Business name"
              name="business_name"
              placeholder="Business name"
              value={address && address.business_name}
              onChange={this.onChange}
            />
            )
          }
          <InputLabel
            type="text"
            label="Complex/Building"
            name="complex_building"
            placeholder="Optional"
            value={address && address.complex_building}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Street Address*"
            name="street_address"
            placeholder="Street Address*"
            value={address && address.street_address}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Suburb*"
            name="suburb"
            placeholder="Suburb*"
            value={address && address.suburb}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Postal Code"
            name="postal_code"
            placeholder="Postal Code"
            value={address && address.postal_code}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="City*"
            name="city"
            placeholder="City*"
            value={address && address.city}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Province*"
            name="province"
            placeholder="Province*"
            value={address && address.province}
            onChange={this.onChange}
          />
          <InputLabel
            type="text"
            label="Special Instructions"
            name="special_instructions"
            placeholder="Special Instructions"
            value={address && address.special_instructions}
            onChange={this.onChange}
          />
        </Block>
        <Button
          onClick={this.saveAddress}
          className="section-address-form_save"
          theme={theme}
          isLoading={isSaving}
        >
          SAVE ADDRESS
        </Button>
      </div>
    )
  }
}

SectionAddressForm.defaultProps = {
  theme: null,
  title: null,
  address: null,
  saveAddress: null,
}

SectionAddressForm.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  title: PropTypes.string,
  address: PropTypes.object,
  saveAddress: PropTypes.func,
}

export default SectionAddressForm
