import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderCancelSubmit.scss'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'
import TextArea from 'components/molecules/forms/inputs/TextArea'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import Block from 'components/molecules/wrapers/Block'
import Button from 'components/molecules/buttons/Button'

class SectionOrderCancelSubmit extends Component {
  constructor(props) {
    super(props)
    this.state = {additionalInfo: ''}
    this.onTextChange = this.onTextChange.bind(this)

  }

  onTextChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    const {
      className,
      order,
      submit
    } = this.props
    const {
      additionalInfo
    } = this.state
    return (
      <div
        className={clsx(
          'section-order-cancel-submit',
          className
        )}
      >
        <Text fw="bold">
          Enter information for each item
        </Text>
        <div className="section-order-cancel-submit__table-head">
          <Text className="section-order-cancel-submit__table-head-product">
            Product/Order
          </Text>
          <Text className="section-order-cancel-submit__table-head-qty">
            Qty
          </Text>
        </div>
        <div>
          {order && order.order_items && order.order_items.map((item, idx)=>(
            <div
              key={idx.toString()}
              className="section-order-cancel-submit__table-row"
            >
              <img 
                className="section-order-cancel-submit__table-row-image"
                src={StringUtils.getThumbnail(item.image_url)}
                alt='production'
                onError={
                  (e)=>{
                    e.target.onerror = null 
                    e.target.src = noimage
                  }
                }
              />
              <Text className="section-order-cancel-submit__table-row-desc">
                {item.name}
              </Text>
              <Text>
                {item.qty}
              </Text>
            </div>
          ))}
        </div>
        <Text
          className="mt-10 mb-5"
          size="xl"
          fw="bold"
        >
          Additional Information
        </Text>
        <TextArea
          className="section-order-cancel-submit__additional-text"
          name="addionalInfo"
          value={additionalInfo}
          onChange={this.onTextChange}
        />
        <Text
          className="mt-10 mb-5"
          size="xl"
          fw="bold"
        >
          Refund Policy
        </Text>
        <Text>
          If you would like to do a return, please log a return request within
          30 days of receiving your order. You can choose to return your
          order with your own courner or the Post Office, or alternatively, we
          can arrange for our couriers to collect it from your delivery
          address. A shipping fee of R60 will be charged for returns
          collected by us and will be deducted from the refund due.
        </Text>
        <Block className="mt-10 pt-10 pr-10 pb-10 pl-10">
          <RadioBox
            label="I agree"
            value="agreed"
          />
        </Block>
        <Button
          className="mt-20 mb-20"
          category="grey"
          onClick={submit}
        >
          Submit Request
        </Button>
      </div>
    )
  }
}

SectionOrderCancelSubmit.defaultProps = {
  className: '',
  order: null,
  submit: null
}

SectionOrderCancelSubmit.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object,
  submit: PropTypes.func
}

export default SectionOrderCancelSubmit
