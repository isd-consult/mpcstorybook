import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPoPRequest.scss'
import StringUtils from 'utils/StringUtils'
import Container from 'components/atoms/layout/Container'
import Text from 'components/atoms/common/Text'
import Block from 'components/molecules/wrapers/Block'
import { Link } from 'react-router-dom'
import Button from 'components/molecules/buttons/Button'

class SectionPoPRequest extends Component {
  render () {
    const {
      className,
      orderNumber,
      dtd,
      total,
      totalFbucks,
    } = this.props
    const dtdStr = dtd
      ? `${StringUtils.formatData1(dtd.date_from)}-${
        StringUtils.formatData2(dtd.date_to)}`
      : ``
    return (
      <div
        className={clsx(
          'section-pop-request',
          className
        )}
      >
        <Container>
          <Text className="mt-15 mb-15" size="xxl">
            Order successful
          </Text>
          <Block className="pt-10 pr-15 pb-10 pl-15">
            <Text className="mr-10">
              {`Order number: ${orderNumber || ''}`}
            </Text>
            <Text className="mr-10 mt-5">
              {`Estimated delivery date: ${dtdStr}`}
            </Text>
            <Text className="mr-10 mt-5">
              {`Fbucks earned: ${StringUtils.formatPrice(totalFbucks, 2)}`}
            </Text>
          </Block>
          <Text className="mt-20 pl-10 pr-10" lh="1-6">
            Please make your EFT payment and upload your Proof of 
            Payment within 2 hours to secure your order.
          </Text>
          <Text className="ml-10 mt-10">
            Bank: FNB
          </Text>
          <Text className="ml-10 mt-5">
            Amount Number: 62345047915
          </Text>
          <Text className="ml-10 mt-5">
            Branch Code: 250655
          </Text>
          <Text className="ml-10 mt-5">
            Branch Name: Thibault Square
          </Text>
          <Text className="ml-10 mt-5">
            Account Type: Cheque
          </Text>
          <Text className="ml-10 mt-5">
            Account Holder: RunwaySale
          </Text>
          <Text className="ml-10 mt-5">
            {`Amount to pay: ${StringUtils.formatPrice(total, 2)}`}
          </Text>
          <Text className="ml-10 mt-5">
            Payment Reference: 20021800008638
          </Text>
          <Link to={`/order/confirmation/uploadpop/${orderNumber}`}>
            <Button className="mt-15" category="grey" fw="bold">
              Upload PoP
            </Button>
          </Link>
        </Container>
      </div>
    )
  }
}

SectionPoPRequest.defaultProps = {
  className: '',
  orderNumber: null,
  dtd: null,
  total: 0,
  totalFbucks: 0
}

SectionPoPRequest.propTypes = {
  className: PropTypes.string,
  orderNumber: PropTypes.string,
  dtd: PropTypes.object,
  total: PropTypes.number,
  totalFbucks: PropTypes.number
}

export default SectionPoPRequest
