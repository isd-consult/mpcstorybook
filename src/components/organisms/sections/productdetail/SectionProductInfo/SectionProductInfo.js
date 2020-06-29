import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Container from 'components/atoms/layout/Container'
import TogglePannel from 'components/molecules/panels/TogglePannel'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import './SectionProductInfo.scss'

class SectionProductInfo extends Component {
  render() {
    const { className, product, dtd, theme } = this.props

    return (
      <div className={clsx('section-product-info', className)}>
        <Container>
          <div className="pb-20">
            <TogglePannel
              title="Delivery and returns"
              icon="arrow-down"
              mode="availitem"
              active
            >
              <div className="d-flex mt-15">
                <Icon theme={theme} name="truck" size={30} />
                <div className="d-flex fd-column pl-10">
                  <Text tag="span" fw="bold">
                    Estimated Delivery Time:
                  </Text>
                  {dtd ? (
                    <Text tag="span">
                      {StringUtils.formatData1(dtd.date_from)}
                      {' - '}
                      {StringUtils.formatData2(dtd.date_to)}
                    </Text>
                  ) : (
                    <Text tag="span">2-4 Working Days</Text>
                  )}
                </div>
              </div>
              <div className="d-flex mt-15">
                <Icon theme={theme} name="returns" size={30} />
                <div className="pl-10 pt-10">
                  <Text tag="span" fw="bold">
                    Returns:
                  </Text>
                  <span> Available for return within 30 days of delivery</span>
                </div>
              </div>
            </TogglePannel>
            <TogglePannel
              icon="arrow-down"
              title="Description"
              mode="availitem"
            >
              <p>{product && product.product_name}</p>
              <p>{product && product.product_size_attribute}</p>
              <p>{product && product.product_description}</p>
            </TogglePannel>
          </div>
        </Container>
      </div>
    )
  }
}

SectionProductInfo.defaultProps = {
  className: '',
  product: null,
  dtd: null,
  theme: null,
}

SectionProductInfo.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  dtd: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionProductInfo
