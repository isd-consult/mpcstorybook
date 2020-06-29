import React, { Component } from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'

class NotFoundPage extends Component {
    render() {
      const {theme, ...others} = this.props
      return (
        <BaseLayout theme={theme} cartCount={0} menuInfo={menuInfo} {...others}>
          <div>
            <h1 style={{
              textAlign: 'center', 
              marginTop: '150px', 
              marginBottom: '150px'}}
            >
              This page will be comming soon!
            </h1>
          </div>
        </BaseLayout>
      )
    }
}
NotFoundPage.defaultProps = {
  theme: null,
}
NotFoundPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women'])
}
export default NotFoundPage