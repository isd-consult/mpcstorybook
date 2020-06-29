import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './FilterPrice.scss'

import ButtonFilter from 'components/molecules/buttons/ButtonFilter'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class FilterPrice extends Component {

  render() {
    const { className, options, theme } = this.props

    return (
      <div className={clsx('filter-price', className)}>
        {options && (
          <Row isNoWrap className="pb-10">
            {options.map(option => (
              <Col isAutoWidth key={option.value}>
                <ButtonFilter
                  theme={theme}
                  value={option.value}
                  text="under"
                  textHighlighted={option.label}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    )
  }
}

FilterPrice.defaultProps = {
  className: '',
  options: null,
  theme: null,
}

FilterPrice.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default FilterPrice
