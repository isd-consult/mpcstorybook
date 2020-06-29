import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ReturnDetail.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import { Link } from 'react-router-dom'
import Button from 'components/molecules/buttons/Button'

import SectionReturnDetail 
  from 'components/organisms/sections/returns/SectionReturnDetail'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionReturnHistory
  from 'components/organisms/sections/returns/SectionReturnHistory'

class ReturnDetail extends Component {
  render () {
    const {
      theme,
      className,
      detail,
      ...others
    } = this.props

    return (
      <BaseLayout 
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title={`Return ${detail && detail.request_number}`}
          />
          <SectionReturnDetail
            theme={theme}
            data={detail}
            {...others}
          />
          <SectionReturnHistory
            theme={theme}
            history={null}
          />
          <Link to="/returns/list">
            <Button
              className="mt-20 mb-20 section-return-detail__return-btn" 
              theme={theme} 
              isCentered
            >
              BACK TO MY RETURN
            </Button>
          </Link>
        </Container>
      </BaseLayout>
    )
  }
}

ReturnDetail.defaultProps = {
  className: '',
  detail: null,
  theme:null,
}

ReturnDetail.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  detail: PropTypes.object,
}

export default ReturnDetail
