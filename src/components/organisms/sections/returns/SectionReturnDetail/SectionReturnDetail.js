import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionReturnDetail.scss'
import Text from 'components/atoms/common/Text'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'
import Block from 'components/molecules/wrapers/Block'

class SectionReturnDetail extends Component {
  render () {
    const {
      className,
      data,
      location,
      theme
    } = this.props

    const { success } = location.state || {}
    return ( 
      <div
        className={clsx(
          'section-return-detail',
          className
        )}
      >
        {success && (
          <>
            <Text size="xl" fw="bold">
              The return has been successfully submitted
            </Text>
            <Text className="mb-20" lh="1-6" color="grey">
              Your return request has been successfully submitted,
              Once your return arrives at our warehouse, please allow
              1-5 working days for your refund to be processed.
            </Text>
          </>
        )}
        <Block className="pt-15 pr-10 pb-15 pl-10">
          <Row>
            <Col xs={4}><Text color="grey">Return:</Text></Col>
            <Col xs={8}><Text>{`#${data && data.request_number}`}</Text></Col>
          </Row>
          <Row>
            <Col xs={4}><Text color="grey">Data Requested:</Text></Col>
            <Col xs={8}><Text>{`${data && data.requested_at}`}</Text></Col>
          </Row>
          <Row>
            <Col xs={4}><Text color="grey">Status:</Text></Col>
            <Col xs={8}>
              <Text>
                {`${data && data.status && data.status.label}`}
              </Text>
            </Col>
          </Row>

          <Text className="mt-20 mb-10" size="s" fw="bold">
            Items Return Requested for
          </Text>
          <div className="section-return-detail__header">
            <Text className="section-return-detail__header-product">
              Product/Order
            </Text>
            <Text className="section-return-detail__header-qty">
              Qty
            </Text>
          </div>
          <div className="section-return-detail__body">
            {
            data && data.items.map((item, index)=>(
              <div key={index.toString()}>
                <div className="section-return-detail__row">
                  <div className='section-return-detail__row-img'>
                    <img 
                      src={StringUtils.getThumbnail(item.product_image_url)}
                      alt='production'
                      onError={
                        (e)=>{
                          e.target.onerror = null 
                          e.target.src = noimage
                        }
                      }
                    />
                  </div>
                  <div className="section-return-detail__row-desc">
                    <Text>
                      {`${item.product_name} (Size: ${item.size_name})`}
                    </Text>
                    <Text theme={theme} size="xxs">
                      {`#${item.order_number} at ${item.ordered_at}`}
                    </Text>
                    <Text size="xxs">
                      {`Reasons: ${item.reason}`}
                    </Text>
                  </div>
                  <div className="section-return-detail__row-qty">
                    <Text>{item.qty}</Text>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </Block>
      </div>
    )
  }
}

SectionReturnDetail.defaultProps = {
  className: '',
  data: null,
  theme: null,
  location: null
}

SectionReturnDetail.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  location: PropTypes.object
}

export default SectionReturnDetail
