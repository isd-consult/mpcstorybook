import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SearchNewIn.scss'

import Placeholder from 'components/atoms/common/Placeholder'
import Text from 'components/atoms/common/Text'

class SearchNewIn extends Component {
  renderList() {
    const { items } = this.props

    return items.map((item, index) => {
      return (
        <Text
          key={index.toString()}
          className={clsx('py-10 search-new-in__nav-item ta-center', {
            'pb-30': items.length - 1 === index,
          })}
          to={item.value}
        >
          {item.label}
        </Text>
      )
    })
  }

  renderPlaceholder() {
    return (
      <>
        <Placeholder className="mb-10" isCentered width={200} />
        <Placeholder className="mb-10" isCentered width={190} />
        <Placeholder className="mb-10" isCentered width={180} />
        <Placeholder className="mb-10" isCentered width={170} />
        <Placeholder className="mb-10" isCentered width={160} />
        <Placeholder className="mb-10" isCentered width={150} />
      </>
    )
  }

  render() {
    const { className, items } = this.props

    return (
      <div className={clsx('search-new-in', className)}>
        {items && items.length !== 0 && (
          <Text tag="h4" fw="bold" align="center">
            New in for you
          </Text>
        )}
        <nav className="search-new-in__nav mt-15">
          {items ? this.renderList() : this.renderPlaceholder()}
        </nav>
      </div>
    )
  }
}

SearchNewIn.defaultProps = {
  className: '',
  items: [],
}

SearchNewIn.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
}

export default SearchNewIn
