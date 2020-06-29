import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonScrollTop.scss'
import Icon from 'components/atoms/common/Icon'

class ButtonScrollTop extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.mounted = false
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount () {
    this.mounted = true
    window.addEventListener('scroll', () => this.onScroll())
  }

  componentWillUnmount () {
    this.mounted = false
    window.removeEventListener('scroll', () => this.onScroll())
  }

  onScroll () {
    if (this.mounted) this.setState({isVisible: window.pageYOffset>250})
  }

  scrollToTop() {
    setTimeout(window.scrollTo(0,1), 100)
  }

  render () {
    const { className, theme } = this.props
    const { isVisible } = this.state
    const Root = `div`
    return (
      <Root
        className={clsx(
          'button-scroll-top',
          {'button-scroll-top--visible': isVisible},
          className
        )}
        onClick={this.scrollToTop}
      >
        <Icon 
          className="button-scroll-top__icon" 
          name="arrow"
          size={20}
          theme={theme}
          left
        />
      </Root>
    )
  }
}

ButtonScrollTop.defaultProps = {
  className: '',
  theme: null,
}

ButtonScrollTop.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default ButtonScrollTop
