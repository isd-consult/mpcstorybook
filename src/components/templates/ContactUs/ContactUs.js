import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ContactUs.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionContactUS
  from 'components/organisms/sections/others/SectionContactUS'

class ContactUs extends Component {
  render () {
    const {
      className,
      theme,
      contact,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle title="Contact US" />
          <SectionContactUS 
            theme={theme}
            contact={contact}
          />
        </Container>
      </BaseLayout>
    )
  }
}

ContactUs.defaultProps = {
  className: '',
  contact: null,
  theme: null
}

ContactUs.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default ContactUs
