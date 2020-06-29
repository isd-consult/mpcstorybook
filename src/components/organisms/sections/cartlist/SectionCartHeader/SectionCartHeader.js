import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import StringUtils from 'utils/StringUtils'
import './SectionCartHeader.scss'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'

class SectionCartHeader extends Component {
  render () {
    const {
      className,
      totalCount,
      originalSubTotal,
      isHidden
    } = this.props

    return (
      !isHidden && (
      <div
        className={clsx(
          'section-cart-header',
          className
        )}
      >
        <Container>
          <Text size="xxl">
            {`Shopping cart (${totalCount} items)`}
          </Text>
          <Text color="grey">
            {`Subtotal ${StringUtils.formatPrice(originalSubTotal)}`}
          </Text>
        </Container>
      </div>
)
    )
  }
}

SectionCartHeader.defaultProps = {
  className: '',
  totalCount: 0,
  originalSubTotal: 0,
  isHidden: false
}

SectionCartHeader.propTypes = {
  className: PropTypes.string,
  totalCount: PropTypes.number,
  originalSubTotal: PropTypes.number,
  isHidden: PropTypes.bool
}

export default SectionCartHeader
