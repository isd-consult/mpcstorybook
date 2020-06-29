import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Button from 'components/molecules/buttons/Button'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'
import Select from 'components/molecules/forms/Select'
import './SectionRefundExtraEdit.scss'
import Text from 'components/atoms/common/Text'
import Block from 'components/molecules/wrapers/Block'
import PaymentMethods from 'components/molecules/forms/PaymentMethods'

class SectionRefundExtraEdit extends Component {

  render () {
    const {
      className,
      deliveryMethods,
      refundMethods,
      onRMChange,
      onDMChange,
      onSubmit,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'section-refund-extra-edit',
          className
        )}
      >
        <Text className="mt-20">
          How will you be returning the order?
        </Text>
        <Select
          placeholder="-Please Select-"
          options={deliveryMethods}
          onChange={onDMChange}
        />
        <Text className="mt-20">
          How will you like to be refunded?
        </Text>
        <PaymentMethods
          methods={refundMethods}
          onChange={onRMChange}
        />
        <Text className="mt-20" size="xl" fw="bold">
          Return Policy
        </Text>
        <Text color="grey" lh="1-6">
          If you would like to do a return, please log a return request
          within 30 days of receiving your order. You can choose to return 
          your order with your own courier or the Post Office, or 
          alternatively, we can arrange for our couriers to collect it 
          from your delivery address. A shipping fee of R60 will be charged 
          for returns collected by us and will be deducted from the 
          refund due.
        </Text>
        <Text fw="bold" lh="1-6">
          Please note: Delivery fees are none refundable.
        </Text>
        <Text color="grey" lh="1-6">
          Refunds can be processed in RunwaySale Credit or refunded to 
          the card or bank account that was used to place the order.
          Once your order arrives at our warehouse, please allow 1-5 
          working days for your refund to be processed.
        </Text>
        <Block className="mt-10 pt-10 pr-10 pb-10 pl-10">
          <Checkbox
            label="I agree"
            theme={theme}
            value="I agreed"
            checked
          />
        </Block>
        <Button
          className="section-refund-extra-edit__submitbtn"
          category="grey"
          onClick={onSubmit}
        >
          SUBMIT REQUEST
        </Button>
      </div>
    )
  }
}

SectionRefundExtraEdit.defaultProps = {
  className: '',
  deliveryMethods: null,
  refundMethods: null,
  onDMChange: null,
  onRMChange: null,
  onSubmit: null,
  theme: null
}

SectionRefundExtraEdit.propTypes = {
  className: PropTypes.string,
  deliveryMethods: PropTypes.array,
  refundMethods: PropTypes.array,
  onDMChange: PropTypes.func,
  onRMChange: PropTypes.func,
  onSubmit: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionRefundExtraEdit
