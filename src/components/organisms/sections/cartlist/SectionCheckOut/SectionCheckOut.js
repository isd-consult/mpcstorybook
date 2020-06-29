import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import StringUtils from 'utils/StringUtils'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'

import Button from 'components/molecules/buttons/Button'
import './SectionCheckOut.scss'

class SectionCheckOut extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  async handleCheckout() {
    const {handle} = this.props
    this.setState({isLoading: true})
    await handle()
    this.setState({isLoading: false})
  }

  render () {
    const {
      theme,
      className,
      isDisabled,
      dtd,
      isHidden
    } = this.props

    const {
      isLoading
    } = this.state
    return (
      !isHidden && (
      <div
        className={clsx(
          'section-check-out',
          className
        )}
      >
        <Button
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={this.handleCheckout}
          theme={theme}
        >
          CHECKOUT NOW
        </Button>
        {dtd && (
        <TextWithIcon
          className={clsx(
            'section-check-out__dtd',
            className
          )}
          iconName="truck"
          iconSize={30}
          title="Estimated Delivery Time:"
          description={`${
            `${StringUtils.formatData1(dtd.date_from)}-${
            StringUtils.formatData2(dtd.date_to)}`
          }`}
        />
)}
      </div>
)
    )
  }
}

SectionCheckOut.defaultProps = {
  className: '',
  theme: null,
  isDisabled: false,
  isHidden: false,
  dtd: null,
  handle: null
}

SectionCheckOut.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  dtd: PropTypes.object,
  handle: PropTypes.func
}

export default SectionCheckOut
