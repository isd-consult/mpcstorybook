import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderCancelConfirm.scss'
import Text from 'components/atoms/common/Text'
import Block from 'components/molecules/wrapers/Block'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'
import Button from 'components/molecules/buttons/Button'

class SectionOrderCancelConfirm extends Component {
  render () {
    const {
      className,
      order
    } = this.props

    return (
      <div
        className={clsx(
          'section-order-cancel-confirm',
          className
        )}
      >
        <Text fw="bold" size="xl">
          The cancellation has been successfully submitted
        </Text>
        <Text className="mt-10">
          Your cancellation request has been successfully submitted
          Please allow 1~5 working days for your refund to be processed.
        </Text>
        <Text className="mt-10" fw="bold" size="xl">
          Request Information
        </Text>
        <Block className="mt-10 pt-5 pr-10 pb-15 pl-10">
          <Row>
            <Col><Text>Cancellation: </Text></Col>
            <Col><Text>#100038590 </Text></Col>
          </Row>
          <Row>
            <Col><Text>Date Requested: </Text></Col>
            <Col><Text>09/03/2019 </Text></Col>
          </Row>
          <Row>
            <Col><Text>Status: </Text></Col>
            <Col><Text>Approved </Text></Col>
          </Row>
          <Text fw="bold">
            Items Cancellation Requested For
          </Text>
          <div className="section-order-cancel-confirm__table-head">
            <Text className="section-order-cancel-confirm__table-head-product">
              Product/Order
            </Text>
            <Text className="section-order-cancel-confirm__table-head-qty">
              Qty
            </Text>
          </div>
          <div>
            {order && order.order_items && order.order_items.map((item, idx)=>(
              <div
                key={idx.toString()}
                className="section-order-cancel-confirm__table-row"
              >
                <img 
                  className="section-order-cancel-confirm__table-row-image"
                  src={StringUtils.getThumbnail(item.image_url)}
                  alt='production'
                  onError={
                    (e)=>{
                      e.target.onerror = null 
                      e.target.src = noimage
                    }
                  }
                />
                <Text className="section-order-cancel-confirm__table-row-desc">
                  {item.name}
                </Text>
                <Text>
                  {item.qty}
                </Text>
              </div>
            ))}
          </div>
          <div className="section-order-cancel-confirm__table-footer">
            <Text
              className="section-order-cancel-confirm__table-footer-reasons"
            >
              Reasons: 
            </Text>
            <Text
              className="section-order-cancel-confirm__table-footer-content"
            >
              {'I don\'t like it'}
            </Text>
          </div>
        </Block>
        <Button
          className="mt-10 mb-10"
          category="grey"
        >
          Go To Cancellation
        </Button>
      </div>
    )
  }
}

SectionOrderCancelConfirm.defaultProps = {
  className: '',
  order: null
}

SectionOrderCancelConfirm.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object
}

export default SectionOrderCancelConfirm
