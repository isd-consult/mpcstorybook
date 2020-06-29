import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BaseLayout from 'components/layouts/BaseLayout'
import './UploadPoP.scss'
import SectionUploadPoP 
  from 'components/organisms/sections/delivery/SectionUploadPoP'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import Container from 'components/atoms/layout/Container'

class UploadPoP extends Component {
  render () {
    const {
      cartCount,
      className,
      menuInfo,
      theme,
      uploadPoPFile,
      orderNumber,
      step,
      ...others
    } = this.props
    return (
      <BaseLayout
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Proof of Payment"
            link="Proof of Payment"
            href="/order/confirmation"
          />
          <SectionUploadPoP 
            theme={theme}
            uploadPoPFile={uploadPoPFile}
            orderNumber={orderNumber}
            step={step}
          />
        </Container>
      </BaseLayout>
    )
  }
}

UploadPoP.defaultProps = {
  cartCount: 0,
  className: '',
  menuInfo: null,
  theme: null,
  uploadPoPFile: null,
  orderNumber: null,
  step: 0,
}

UploadPoP.propTypes = {
  cartCount: PropTypes.number,
  className: PropTypes.string,
  menuInfo: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  uploadPoPFile: PropTypes.func,
  step: PropTypes.number,
  orderNumber: PropTypes.string,
}

export default UploadPoP
