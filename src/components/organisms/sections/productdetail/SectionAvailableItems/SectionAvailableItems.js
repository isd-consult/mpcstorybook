import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAvailableItems.scss'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import { Link } from 'react-router-dom'
import Image from 'components/atoms/common/Image'

class SectionAvailableItems extends Component {

  render () {
    const {
      className,
      title,
      items,
      theme
    } = this.props

    if (!items || items.length < 1) return null

    return (
      <div
        className={clsx(
          'section-available-items',
          {[`section-available-items--${theme}`]: theme},
          className
        )}
      >
        <Container>
          <Title
            className="mb-10"
            title={title}
            theme={theme}
          />
          <Row isNoWrap>
            {items && items.map((item, index) => (
              <Col isAutoWidth key={index.toString()}>
                <Link to={`/product_detail/${item.sku}`}>
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    isThumb
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

SectionAvailableItems.defaultProps = {
  className: '',
  title: null,
  items: null,
  theme: null
}

SectionAvailableItems.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionAvailableItems
