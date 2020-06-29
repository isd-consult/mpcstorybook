import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderSummary.scss'
import StringUtils from 'utils/StringUtils'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Text from 'components/atoms/common/Text'
import CardCategory from 'components/molecules/cards/CardCategory'
import Button 
  from 'components/molecules/buttons/Button'
import Container from 'components/atoms/layout/Container'
import Divider from 'components/atoms/common/Divider'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'

class SectionOrderSummary extends Component {

  render () {
    const {
      className,
      theme,
      items,
      total,
      deliveryTotal,
      subTotal,
      totalVat,
      deliveryAddress,
      paymentMethod,
      dtd,
      history
    } = this.props
    return (
      <div
        className={clsx(
          'section-order-summary',
          className
        )}
      >
        <div className="section-order-summary__summary">
          <Text className="mb-5" size="xs" fw="bold">
            ORDER SUMMARY:
          </Text>
          <Text className="pl-10 pt-15 pb-10" size="xs" fw="bold">
            Delivery address:
          </Text>
          {
            deliveryAddress && (
            <Text className="pl-10" size="xs">
              {StringUtils.formatAddress(deliveryAddress)}
            </Text>
)
          }
          <Text className="pl-10 pt-15 pb-10" size="xs" fw="bold">
            Payment method:
          </Text>
          <Text className="pl-10" size="xs">
            {paymentMethod && paymentMethod.label}
          </Text>
          <Text className="pl-10 pt-15 pb-10" size="xs" fw="bold">
            Your items:
          </Text>
          {items && (
          <Row isNoWrap>
            {items.map((item, i) => (
              <Col isAutoWidth key={i.toString()}>
                <CardCategory
                  image={{src:item.image_url, title:'none'}}
                  href={`/product_list?product_type=${item.name}`}
                  theme={theme}
                  type="small"
                />
              </Col>
              ))}
          </Row>
          )}
          <Divider className="mt-20" />
          <Row className="pl-20 pr-20">
            <Col xs={7}><Text>Subtotal</Text></Col>
            <Col xs={5}>
              <Text>
                {StringUtils.formatPrice(subTotal)}
              </Text>
            </Col>
            <Col xs={7}><Text>Delivery</Text></Col>
            <Col xs={5}>
              <Text>
                {StringUtils.formatPrice(deliveryTotal)}
              </Text>
            </Col>
            <Col xs={7}><Text>Vat</Text></Col>
            <Col xs={5}>
              <Text>
                {StringUtils.formatPrice(totalVat)}
              </Text>
            </Col>
          </Row>
          <Divider />
          <Row className="pl-20 pr-20">
            <Col xs={7}><Text size="xl" fw="bold">TOTAL</Text></Col>
            <Col xs={5}>
              <Text size="xxl" fw="bold">
                {StringUtils.formatPrice(total)}
              </Text>
            </Col>
          </Row>
        </div>
        <Container>
          <Button
            className="mt-15 pl-15 pr-10"
            theme={theme}
            onClick={()=>{history.push('/')}}
          >
            CONTINUE SHOPPING
          </Button>
          {dtd && (
          <TextWithIcon
            className="section-check-out__dtd"
            iconName="truck"
            iconSize={30}
            title="Estimated Delivery Time:"
            description={`${
            `${StringUtils.formatData1(dtd.date_from)}-${
            StringUtils.formatData2(dtd.date_to)}`
          }`}
          />
)}
        </Container>
      </div>
    )
  }
}

SectionOrderSummary.defaultProps = {
  className: '',
  theme: null,
  items: null,
  total: 0,
  deliveryTotal: 0,
  subTotal: 0,
  totalVat: 0,
  deliveryAddress: null,
  paymentMethod: null,
  dtd: null,
  history: null
}

SectionOrderSummary.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  items: PropTypes.array,
  total: PropTypes.number,
  deliveryTotal: PropTypes.number,
  subTotal: PropTypes.number,
  totalVat: PropTypes.number,
  deliveryAddress: PropTypes.object,
  paymentMethod: PropTypes.object,
  dtd: PropTypes.object,
  history: PropTypes.object
}

export default SectionOrderSummary
