import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Policy.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'

class Policy extends Component {
  render () {
    const {
      className,
      content,
      ...others
    } = this.props

    return (
      <BaseLayout
        {...others}
      >
        <Container>
          <div 
          // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html:content}}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Policy.defaultProps = {
  className: '',
  content: ''
}

Policy.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string
}

export default Policy
