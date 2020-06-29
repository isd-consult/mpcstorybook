import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPrice.scss'

import FilterPrice from 'components/molecules/filters/FilterPrice'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'

class SectionPrice extends Component {
  render() {
    const { className, options, defaultValue, theme } = this.props

    return (
      options && (
      <div className={clsx('section-filter-price mb-40 mt-40', className)}>
        <Container>
          <Title
            className="mb-25"
            title="Shop by price"
            theme={theme}
          />
          <FilterPrice
            defaultValue={defaultValue}
            options={options}
            theme={theme}
          />
        </Container>
      </div>
)
    )
  }
}

SectionPrice.defaultProps = {
  className: '',
  defaultValue: null,
  options: [],
  theme: null,
}

SectionPrice.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionPrice
