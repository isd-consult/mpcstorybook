import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAccountAddress.scss'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import Button from 'components/molecules/buttons/Button'
import InputLabel from 'components/molecules/forms/inputs/InputLabel'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'

import { Formik } from 'formik'
import { AddressSchema } from 'utils/formikValidation'
import ValidationError from 'components/atoms/common/ValidationError'

class SectionAccountAddress extends Component {

  constructor(props) {
    super(props)
    this.state = {
      defaultAddress: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.address && JSON.stringify(props.address)
      !== JSON.stringify(state.defaultAddress) )
      return { defaultAddress: props.address }
    
    if (props.address === null) {
      return {defaultAddress: {
        is_default_billing: true,
        is_default_shipping: false,
        business_type: false
      }}
    }
    return null
  }

  async handleSubmit(values) {
    const businessType = 
      !!(values.business_type === true || values.business_type === "business")

    const {saveAddress} = this.props
    this.setState({isLoading: true})
    await saveAddress({...values, business_type: businessType})
    this.setState({isLoading: false})
  }

  render () {
    const { theme } = this.props
    const { defaultAddress, isLoading } = this.state

    return (
      <div
        className={clsx(
          'section-account-address',
        )}
      >
        <Formik
          initialValues={defaultAddress || {}}
          enableReinitialize
          validationSchema={AddressSchema}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            // touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={{display: "flex"}}>
                <RadioBox
                  className="ml-10"
                  label="Residential"
                  value="residential"
                  name="business_type"
                  checked={
                    !!values && 
                    ( values.business_type === false || 
                      values.business_type === "residential")
                    }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fw="light"
                />
                <RadioBox
                  className="ml-10"
                  label="Business"
                  value="business"
                  name="business_type"
                  checked={
                    !!values && 
                    (values.business_type === true || 
                      values.business_type === "business")
                    }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fw="light"
                />
              </div>
              <div className="section-account-address__group mt-20">
                <InputLabel
                  label="Address Nickname"
                  required
                  name="address_nickname"
                  placeholder="example@gmail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.address_nickname}
                />
                <InputLabel
                  label="Recipient Name"
                  required
                  name="recipient_name"
                  placeholder="Recipient name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.recipient_name}
                />
                <InputLabel
                  label="Mobile Number"
                  required
                  name="mobile_number"
                  placeholder="082 123 4567"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.mobile_number}
                />
                {
                  !!values && (
                    values.business_type === true || 
                    values.business_type === "business") && (
                    <InputLabel
                      label="Business name"
                      required={false}
                      name="business_name"
                      placeholder="Business name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values && values.business_name}
                    />
                  )
                }
                <InputLabel
                  label="Complex/Building"
                  required={false}
                  name="complex_building"
                  placeholder="Complex/building"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.complex_building}
                />
                <InputLabel
                  label="Street Address"
                  required
                  name="street_address"
                  placeholder="Street address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.street_address}
                />
                <InputLabel
                  label="Suburb"
                  required
                  name="suburb"
                  placeholder="Suburb"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.suburb}
                />
                <InputLabel
                  label="Postal Code"
                  name="postal_code"
                  placeholder="Postal code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.postal_code}
                />
                <InputLabel
                  label="City"
                  required
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.city}
                />
                <InputLabel
                  label="Province"
                  required
                  name="province"
                  placeholder="Province"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.province}
                />
                <InputLabel
                  label="Special Instructions"
                  name="special_instructions"
                  placeholder="Special instructions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.special_instructions}
                />
                
                <Checkbox
                  className="mt-10 ml-10"
                  label="User as my default billing address"
                  name="is_default_billing"
                  value="is_default_billing"
                  type="rect"
                  checked={
                    !!values && 
                    (values.is_default_billing === true || 
                      values.is_default_billing === "is_default_billing")
                    }
                  onChange={handleChange}
                />
                <Checkbox
                  className="mt-10 ml-10 mb-10"
                  label="User as my default shipping address"
                  name="is_default_shipping"
                  value="is_default_shipping"
                  type="rect"
                  checked={
                    !!values && 
                    (values.is_default_shipping === true || 
                      values.is_default_shipping === "is_default_shipping")
                    }
                  onChange={handleChange}
                />
              </div>
              <ValidationError error={errors} />
              <Button
                className="mt-20"
                tag='button'
                type='submit'
                theme={theme}
                isCentered
                isLoading={isLoading}
              >
                SAVE ADDRESS
              </Button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

SectionAccountAddress.defaultProps = {
  theme: null,
  saveAddress: null,
}

SectionAccountAddress.propTypes = {
  saveAddress: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SectionAccountAddress
