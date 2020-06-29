import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './RequestReturnAddDetail.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'

import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionReturnItemEdit
  from 'components/organisms/sections/returns/SectionReturnItemEdit'
import SectionRefundExtraEdit
  from 'components/organisms/sections/returns/SectionRefundExtraEdit'

class RequestReturnAddDetail extends Component {

  render () {
    const {
      theme,
      menuInfo,
      className,
      items,
      reasons,
      deliveryMethods,
      refundMethods,
      onUploadFile,
      onChange,
      onDMChange,
      onRMChange,
      onSubmit,
      ...others
    } = this.props

    return (
      <BaseLayout 
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Request New Return"
            link="Back to My Account"
            href="/accounts"
          />
          <Text
            className="mt-20 mb-5"
            size="xl"
          >
            Enter information for each item
          </Text>
          { items && items.map((item, index) => (
            <SectionReturnItemEdit
              key={index.toString()}
              data={item}
              reasons={reasons}
              theme={theme}
              onUploadFile={onUploadFile}
              onChange={onChange}
            />
          ))}
          <SectionRefundExtraEdit
            theme={theme}
            deliveryMethods={deliveryMethods}
            refundMethods={refundMethods}
            onDMChange={onDMChange}
            onRMChange={onRMChange}
            onSubmit={onSubmit}
          />
        </Container>
      </BaseLayout>
    )
  }
}

RequestReturnAddDetail.defaultProps = {
  className: '',
  theme:null,
  menuInfo: null,
  items: null,
  reasons: null,
  deliveryMethods: null,
  refundMethods: null,
  onUploadFile: null,
  onChange: null,
  onDMChange: null,
  onRMChange: null,
  onSubmit: null
}

RequestReturnAddDetail.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  menuInfo: PropTypes.object,
  items: PropTypes.array,
  reasons: PropTypes.array,
  deliveryMethods: PropTypes.array,
  refundMethods: PropTypes.array,
  onUploadFile: PropTypes.func,
  onChange: PropTypes.func,
  onDMChange: PropTypes.func,
  onRMChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default RequestReturnAddDetail
