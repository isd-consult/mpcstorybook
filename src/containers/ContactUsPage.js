import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import ContactUs from 'components/templates/ContactUs'
import Transition from 'containers/Transition'
import { contact } from 'redux/modules/contactus/actions'
import { connect } from 'react-redux'

class ContactUsPage extends Component {

  render() {
    const {
      theme,
      _contact,
      ...others
    } = this.props

    return (
      <Transition>
        <ContactUs
          theme={theme}
          menuInfo={menuInfo}
          contact={_contact}
          {...others}
        />
      </Transition>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _contact: (fileContent, contactInfo) => 
      dispatch(contact(fileContent, contactInfo)),
  }
}

ContactUsPage.defaultProps = {
  theme: null,
  _contact: null,
}

ContactUsPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  _contact: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(ContactUsPage)